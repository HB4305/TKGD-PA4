import { access, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createInterface } from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(scriptDirectory, '..', 'src', 'data')
const allowedResults = new Set(['1-0', '0-1', '1/2-1/2', '*'])

export function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function normalisePlayerName(sourceName) {
  const parts = sourceName.split(',').map((part) => part.trim()).filter(Boolean)
  return parts.length === 2 ? `${parts[1]} ${parts[0]}` : sourceName.trim().replace(/\s+/g, ' ')
}

export function parsePgnHeaders(block) {
  const tags = {}
  for (const rawLine of block.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line) continue
    const match = line.match(/^\[([^\s]+)\s+"((?:\\"|[^"])*)"\]$/)
    if (match) tags[match[1]] = match[2].replace(/\\"/g, '"')
  }
  return tags
}

export function normaliseEmbedId(value) {
  const trimmed = String(value ?? '').trim()
  const gid = trimmed.match(/^\[gid\s*=\s*([^\]\s]+)\s*\]$/i)
  return gid ? gid[1] : trimmed
}

export function parseDate(value) {
  if (!/^\d{4}\.\d{2}\.\d{2}$/.test(value ?? '')) throw new Error(`Invalid PGN Date: ${value ?? '(missing)'}`)
  return value.replaceAll('.', '-')
}

export function compareRounds(first, second) {
  const firstTokens = String(first).match(/\d+/g)?.map(Number) ?? []
  const secondTokens = String(second).match(/\d+/g)?.map(Number) ?? []
  const length = Math.max(firstTokens.length, secondTokens.length)
  for (let index = 0; index < length; index += 1) {
    const difference = (firstTokens[index] ?? -1) - (secondTokens[index] ?? -1)
    if (difference !== 0) return difference
  }
  return String(first).localeCompare(String(second), undefined, { numeric: true, sensitivity: 'base' })
}

function required(tags, key) {
  if (!tags[key]?.trim()) throw new Error(`Missing required PGN tag: ${key}`)
  return tags[key].trim()
}

function parseElo(tags, key) {
  const value = Number(required(tags, key))
  if (!Number.isInteger(value) || value < 0) throw new Error(`Invalid ${key}: ${tags[key]}`)
  return value
}

export function makeGameInput(tags, embedId, inputIndex) {
  const result = required(tags, 'Result')
  if (!allowedResults.has(result)) throw new Error(`Unsupported Result: ${result}`)
  const numericEmbedId = normaliseEmbedId(embedId)
  if (!numericEmbedId) throw new Error('Embed ID is required')

  return {
    inputIndex,
    embedId: numericEmbedId,
    eventName: required(tags, 'Event'),
    date: parseDate(required(tags, 'Date')),
    round: required(tags, 'Round'),
    variant: required(tags, 'Variant'),
    white: { sourceName: required(tags, 'White'), elo: parseElo(tags, 'WhiteElo') },
    black: { sourceName: required(tags, 'Black'), elo: parseElo(tags, 'BlackElo') },
    result,
    timeControl: tags.TimeControl?.trim() || null,
    site: tags.Site?.trim() || null,
    sourceLink: tags.Link?.trim() || null,
  }
}

function inferStatus(games, startDate) {
  if (games.every((game) => game.result !== '*')) return 'completed'
  const today = new Date().toISOString().slice(0, 10)
  return startDate > today ? 'upcoming' : 'live'
}

function playerIdFromSourceName(sourceName) {
  return slugify(normalisePlayerName(sourceName))
}

export function createImportPlan(entries, datasets) {
  if (entries.length === 0) throw new Error('Enter at least one game')
  const existingEmbedIds = new Map()
  for (const match of datasets.matches) {
    for (const game of match.games) {
      if (game.embedId) existingEmbedIds.set(String(game.embedId), `match ${match.id}, game ${game.id}`)
    }
  }

  const seenEmbeds = new Set()
  for (const entry of entries) {
    if (existingEmbedIds.has(entry.embedId)) throw new Error(`Embed ID ${entry.embedId} already exists in ${existingEmbedIds.get(entry.embedId)}`)
    if (seenEmbeds.has(entry.embedId)) throw new Error(`Embed ID ${entry.embedId} appears more than once in this import`)
    seenEmbeds.add(entry.embedId)
  }

  const eventName = entries[0].eventName
  const variant = entries[0].variant
  const participantIds = new Set([playerIdFromSourceName(entries[0].white.sourceName), playerIdFromSourceName(entries[0].black.sourceName)])
  if (participantIds.size !== 2) throw new Error('A match must contain exactly two different players')

  for (const entry of entries) {
    if (entry.eventName !== eventName) throw new Error('All games in one import must have the same Event')
    if (entry.variant !== variant) throw new Error('All games in one import must have the same Variant')
    const entryPlayers = new Set([playerIdFromSourceName(entry.white.sourceName), playerIdFromSourceName(entry.black.sourceName)])
    if (entryPlayers.size !== 2 || [...entryPlayers].some((id) => !participantIds.has(id))) {
      throw new Error('All games in one import must contain the same two players')
    }
  }

  const orderedEntries = [...entries].sort((first, second) => compareRounds(first.round, second.round) || first.inputIndex - second.inputIndex)
  const player1Id = playerIdFromSourceName(orderedEntries[0].white.sourceName)
  const player2Id = playerIdFromSourceName(orderedEntries[0].black.sourceName)
  const finalEntry = orderedEntries.at(-1)
  const finalElo = new Map([
    [playerIdFromSourceName(finalEntry.white.sourceName), finalEntry.white.elo],
    [playerIdFromSourceName(finalEntry.black.sourceName), finalEntry.black.elo],
  ])
  const matchId = datasets.matches.reduce((highest, match) => Math.max(highest, Number(match.id) || 0), 0) + 1
  const eventId = slugify(eventName)
  const earliestDate = orderedEntries.reduce((earliest, entry) => (entry.date < earliest ? entry.date : earliest), orderedEntries[0].date)
  const latestDate = orderedEntries.reduce((latest, entry) => (entry.date > latest ? entry.date : latest), orderedEntries[0].date)

  const knownPlayers = new Set(datasets.players.map((player) => player.id))
  const playersToAdd = []
  for (const entry of orderedEntries) {
    for (const side of [entry.white, entry.black]) {
      const id = playerIdFromSourceName(side.sourceName)
      if (!knownPlayers.has(id)) {
        knownPlayers.add(id)
        playersToAdd.push({
          id,
          displayName: normalisePlayerName(side.sourceName),
          sourceName: side.sourceName,
          title: null,
          countryCode: null,
          countryName: null,
          photo: null,
        })
      }
    }
  }

  const eventToAdd = datasets.events.some((event) => event.id === eventId)
    ? null
    : { id: eventId, name: eventName, location: { venue: null, city: null, country: null }, format: null }

  const games = orderedEntries.map((entry, index) => ({
    id: index + 1,
    embedId: entry.embedId,
    date: entry.date,
    round: entry.round,
    whitePlayerId: playerIdFromSourceName(entry.white.sourceName),
    blackPlayerId: playerIdFromSourceName(entry.black.sourceName),
    result: entry.result,
    timeControl: entry.timeControl,
    site: entry.site,
    sourceLink: entry.sourceLink,
  }))

  const match = {
    id: matchId,
    eventId,
    player1Id,
    player2Id,
    player1Elo: finalElo.get(player1Id) ?? null,
    player2Elo: finalElo.get(player2Id) ?? null,
    variant,
    startDate: earliestDate,
    endDate: latestDate,
    status: inferStatus(games, earliestDate),
    games,
  }

  return { playersToAdd, eventToAdd, match, orderedEntries }
}

async function readJson(fileName) {
  const filePath = join(dataDirectory, fileName)
  return JSON.parse(await readFile(filePath, 'utf8'))
}

async function writeJsonAtomically(fileName, value) {
  const filePath = join(dataDirectory, fileName)
  const temporaryPath = `${filePath}.tmp`
  await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  await rename(temporaryPath, filePath)
}

async function main() {
  await Promise.all(['players.json', 'events.json', 'matches.json'].map(async (fileName) => access(join(dataDirectory, fileName))))
  const readline = createInterface({ input, output })
  const iterator = readline[Symbol.asyncIterator]()
  const entries = []
  async function ask(prompt) {
    output.write(prompt)
    const { value, done } = await iterator.next()
    if (done) throw new Error('Input ended before the import was complete')
    return value
  }
  async function readPgnExport() {
    const lines = []
    let result = null
    let hasMovetext = false
    while (true) {
      const line = await ask('')
      if (line.trim() === 'END') return lines.join('\n')
      lines.push(line)

      const tag = line.trim().match(/^\[([^\s]+)\s+"((?:\\"|[^"])*)"\]$/)
      if (tag?.[1] === 'Result') result = tag[2].replace(/\\"/g, '"')

      const isMovetext = line.trim() && !tag
      if (isMovetext) {
        hasMovetext = true
        if (result && line.trim().endsWith(result)) return lines.join('\n')
      }

      if (!hasMovetext && line.trim() === '') {
        output.write('Continue pasting movetext, or type END on its own line for a tags-only PGN.\n')
      }
    }
  }

  try {
    let addAnother = true
    while (addAnother) {
      const embedId = await ask('Chess.com embed ID (or [gid=...]): ')
      output.write('Paste the complete PGN export. The game ends automatically at the final PGN result.\n')
      output.write('For a tags-only PGN, type END on a new line after the tags.\n')
      const block = await readPgnExport()
      entries.push(makeGameInput(parsePgnHeaders(block), embedId, entries.length))
      const response = await ask('Add another game to this match? [y/N] ')
      addAnother = /^y(es)?$/i.test(response.trim())
    }

    const datasets = {
      players: await readJson('players.json'),
      events: await readJson('events.json'),
      matches: await readJson('matches.json'),
    }
    const plan = createImportPlan(entries, datasets)
    output.write(`\nNew match #${plan.match.id}: ${plan.match.player1Id} vs ${plan.match.player2Id}\n`)
    output.write(`Event: ${plan.match.eventId}\nVariant: ${plan.match.variant}\nStart date: ${plan.match.startDate}\nGames: ${plan.match.games.length}\n`)
    output.write(`Final Elo: ${plan.match.player1Elo} – ${plan.match.player2Elo}\n`)
    output.write(`Rounds: ${plan.match.games.map((game) => game.round).join(', ')}\n`)
    const shouldWrite = await ask('Write this new match to JSON? [y/N] ')
    if (!/^y(es)?$/i.test(shouldWrite.trim())) {
      output.write('Cancelled. No files were changed.\n')
      return
    }

    await writeJsonAtomically('players.json', [...datasets.players, ...plan.playersToAdd])
    if (plan.eventToAdd) await writeJsonAtomically('events.json', [...datasets.events, plan.eventToAdd])
    await writeJsonAtomically('matches.json', [...datasets.matches, plan.match])
    output.write(`Imported match #${plan.match.id}.\n`)
  } finally {
    readline.close()
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    output.write(`Import failed: ${error.message}\n`)
    process.exitCode = 1
  })
}
