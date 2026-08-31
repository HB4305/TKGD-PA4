import { describe, expect, it } from 'vitest'
import { displayTimeControl, formatScore, gameResultSummary, matchOccursOnDate, matchScore, normalisedIncludes } from './schedule'
import type { Match, Player } from '../types'

const match: Match = {
  id: 2,
  eventId: 'event',
  player1Id: 'first',
  player2Id: 'second',
  player1Elo: 2800,
  player2Elo: 2700,
  variant: 'Chess960',
  startDate: '2026-08-29',
  endDate: '2026-08-30',
  status: 'completed',
  games: [
    { id: 1, embedId: '1', date: '2026-08-29', round: '01-01', whitePlayerId: 'first', blackPlayerId: 'second', result: '1/2-1/2', timeControl: null, site: null, sourceLink: null },
    { id: 2, embedId: '2', date: '2026-08-30', round: '01-02', whitePlayerId: 'second', blackPlayerId: 'first', result: '0-1', timeControl: null, site: null, sourceLink: null },
  ],
}

describe('schedule helpers', () => {
  it('aggregates a score across reversed colours', () => {
    expect(matchScore(match)).toEqual({ first: 1.5, second: 0.5 })
    expect(formatScore(1.5)).toBe('1½')
  })

  it('does not assign a result when a game has no known player IDs', () => {
    const matchWithUnknownPlayers: Match = {
      ...match,
      games: [{ ...match.games[0], whitePlayerId: null, blackPlayerId: null, result: '1-0' }],
    }

    expect(matchScore(matchWithUnknownPlayers)).toEqual({ first: 0, second: 0 })
  })

  it('keeps an upcoming multi-day game with unknown players in its scheduled date', () => {
    const upcomingMatch: Match = {
      ...match,
      status: 'upcoming',
      games: [{ ...match.games[0], whitePlayerId: null, blackPlayerId: null, result: '*' }],
    }

    expect(matchOccursOnDate(upcomingMatch, '2026-08-29')).toBe(true)
    expect(matchScore(upcomingMatch)).toEqual({ first: 0, second: 0 })
  })

  it('matches search text without accents or case', () => {
    expect(normalisedIncludes('Lê Quang Liêm', 'le quang')).toBe(true)
  })

  it('formats fixed and incremental time controls', () => {
    expect(displayTimeControl('600')).toBe('10 min')
    expect(displayTimeControl('600+5')).toBe('10 min + 5 sec')
    expect(displayTimeControl('90')).toBe('90 sec')
  })

  it('uses compact, readable labels for game results', () => {
    const white: Player = { id: 'first', displayName: 'Alex Winner', sourceName: 'Winner, Alex', title: null, countryCode: null, countryName: null, photo: null }
    const black: Player = { id: 'second', displayName: 'Bobby Draw', sourceName: 'Draw, Bobby', title: null, countryCode: null, countryName: null, photo: null }

    expect(gameResultSummary({ ...match.games[0], result: '*' }, white, black)).toBeNull()
    expect(gameResultSummary({ ...match.games[0], result: '1/2-1/2' }, white, black)).toBe('Draw')
    expect(gameResultSummary({ ...match.games[0], result: '1-0' }, white, black)).toBe('Winner won')
    expect(gameResultSummary({ ...match.games[0], result: '0-1' }, white, black)).toBe('Draw won')
  })

  it('shows a multi-day match on every game date', () => {
    expect(matchOccursOnDate(match, '2026-08-29')).toBe(true)
    expect(matchOccursOnDate(match, '2026-08-30')).toBe(true)
    expect(matchOccursOnDate(match, '2026-08-31')).toBe(false)
  })
})
