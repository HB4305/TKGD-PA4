import { describe, expect, it } from 'vitest'
import { compareRounds, createImportPlan, makeGameInput, parsePgnHeaders } from './import-match.mjs'

const firstBlock = `[Event "FIDE Freestyle Chess World Championship"]
[Site "Chess.com"]
[Date "2026.02.14"]
[Round "02-01"]
[White "Carlsen, Magnus"]
[Black "Caruana, Fabiano"]
[Result "1/2-1/2"]
[Variant "Chess960"]
[WhiteElo "2832"]
[BlackElo "2727"]
[TimeControl "1500+10"]`

const secondBlock = `[Event "FIDE Freestyle Chess World Championship"]
[Site "Chess.com"]
[Date "2026.02.14"]
[Round "02-02"]
[White "Caruana, Fabiano"]
[Black "Carlsen, Magnus"]
[Result "0-1"]
[Variant "Chess960"]
[WhiteElo "2728"]
[BlackElo "2833"]
[TimeControl "1500+10"]`

const datasets = { players: [], events: [], matches: [] }

describe('PGN importer', () => {
  it('sorts numeric Round groups', () => {
    expect(compareRounds('02-01', '02-02')).toBeLessThan(0)
    expect(compareRounds('10-01', '2-09')).toBeGreaterThan(0)
  })

  it('creates one match and keeps only final-game Elo', () => {
    const entries = [
      makeGameInput(parsePgnHeaders(secondBlock), '15616893', 0),
      makeGameInput(parsePgnHeaders(firstBlock), '15616892', 1),
    ]
    const plan = createImportPlan(entries, datasets)
    expect(plan.match.id).toBe(1)
    expect(plan.match.startDate).toBe('2026-02-14')
    expect(plan.match.games.map((game) => game.round)).toEqual(['02-01', '02-02'])
    expect(plan.match.player1Elo).toBe(2833)
    expect(plan.match.player2Elo).toBe(2728)
    expect(plan.match.games[0]).not.toHaveProperty('whiteElo')
  })

  it('rejects a duplicate embed id before creating a plan', () => {
    const entry = makeGameInput(parsePgnHeaders(firstBlock), '15616892', 0)
    expect(() => createImportPlan([entry], { ...datasets, matches: [{ id: 9, games: [{ id: 1, embedId: '15616892' }] }] })).toThrow('already exists')
  })
})
