import { describe, expect, it } from 'vitest'
import { displayTimeControl, formatScore, matchScore, normalisedIncludes } from './schedule'
import type { Match } from '../types'

const match: Match = {
  id: 2,
  eventId: 'event',
  player1Id: 'first',
  player2Id: 'second',
  player1Elo: 2800,
  player2Elo: 2700,
  variant: 'Chess960',
  startDate: '2026-08-29',
  status: 'completed',
  games: [
    { id: 1, embedId: '1', round: '01-01', whitePlayerId: 'first', blackPlayerId: 'second', result: '1/2-1/2', timeControl: null, site: null, sourceLink: null },
    { id: 2, embedId: '2', round: '01-02', whitePlayerId: 'second', blackPlayerId: 'first', result: '0-1', timeControl: null, site: null, sourceLink: null },
  ],
}

describe('schedule helpers', () => {
  it('aggregates a score across reversed colours', () => {
    expect(matchScore(match)).toEqual({ first: 1.5, second: 0.5 })
    expect(formatScore(1.5)).toBe('1½')
  })

  it('matches search text without accents or case', () => {
    expect(normalisedIncludes('Lê Quang Liêm', 'le quang')).toBe(true)
  })

  it('formats fixed and incremental time controls', () => {
    expect(displayTimeControl('600')).toBe('10 min')
    expect(displayTimeControl('600+5')).toBe('10 min + 5 sec')
    expect(displayTimeControl('90')).toBe('90 sec')
  })
})
