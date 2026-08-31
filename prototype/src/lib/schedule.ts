import type { Game, Match, Player } from '../types'

export function localIsoDate(date = new Date()) {
  const timezoneOffset = date.getTimezoneOffset() * 60_000
  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 10)
}

export function addDays(isoDate: string, days: number) {
  const date = new Date(`${isoDate}T12:00:00`)
  date.setDate(date.getDate() + days)
  return localIsoDate(date)
}

export function formatDate(isoDate: string, options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }) {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(`${isoDate}T12:00:00`))
}

export function matchScore(match: Match) {
  let first = 0
  let second = 0
  for (const game of match.games) {
    if (game.result === '1/2-1/2') {
      if (game.whitePlayerId === match.player1Id || game.blackPlayerId === match.player1Id) first += 0.5
      if (game.whitePlayerId === match.player2Id || game.blackPlayerId === match.player2Id) second += 0.5
    } else if (game.result === '1-0') {
      if (game.whitePlayerId === match.player1Id) first += 1
      else if (game.whitePlayerId === match.player2Id) second += 1
    } else if (game.result === '0-1') {
      if (game.blackPlayerId === match.player1Id) first += 1
      else if (game.blackPlayerId === match.player2Id) second += 1
    }
  }
  return { first, second }
}

export function formatScore(score: number) {
  return Number.isInteger(score) ? String(score) : String(score).replace('.5', '½')
}

export function matchOccursOnDate(match: Match, date: string) {
  if (match.games.length > 0) return match.games.some((game) => game.date === date)
  return date >= match.startDate && date <= match.endDate
}

export function displayTimeControl(value: string | null) {
  if (!value) return 'Time control unavailable'
  const match = value.match(/^(\d+)(?:\+(\d+))?$/)
  if (!match) return value
  const seconds = Number(match[1])
  const increment = match[2] === undefined ? null : Number(match[2])
  const base = seconds % 60 === 0 ? `${seconds / 60} min` : `${seconds} sec`
  return increment === null ? base : `${base} + ${increment} sec`
}

export function gameResultSummary(game: Game, white: Player | null, black: Player | null) {
  if (game.result === '*') return null
  if (game.result === '1/2-1/2') return 'Draw'

  const winner = game.result === '1-0' ? white : black
  const shortName = winner?.displayName.trim().split(/\s+/).at(-1)
  return `${shortName ?? (game.result === '1-0' ? 'White' : 'Black')} won`
}

export function normalisedIncludes(value: string, query: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(
    query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(),
  )
}

export function gamePlayers(game: Game, getPlayer: (id: string) => Player) {
  return {
    white: game.whitePlayerId ? getPlayer(game.whitePlayerId) : null,
    black: game.blackPlayerId ? getPlayer(game.blackPlayerId) : null,
  }
}
