import { describe, expect, it } from 'vitest'
import { events, matches, players } from './data'

describe('sample data integrity', () => {
  it('uses unique numeric match IDs and embed IDs', () => {
    expect(new Set(matches.map((match) => match.id)).size).toBe(matches.length)
    const embedIds = matches.flatMap((match) => match.games.map((game) => game.embedId).filter(Boolean))
    expect(new Set(embedIds).size).toBe(embedIds.length)
  })

  it('references existing events and players', () => {
    const eventIds = new Set(events.map((event) => event.id))
    const playerIds = new Set(players.map((player) => player.id))
    for (const match of matches) {
      expect(eventIds.has(match.eventId)).toBe(true)
      expect(playerIds.has(match.player1Id)).toBe(true)
      expect(playerIds.has(match.player2Id)).toBe(true)
      for (const game of match.games) {
        expect(playerIds.has(game.whitePlayerId)).toBe(true)
        expect(playerIds.has(game.blackPlayerId)).toBe(true)
      }
    }
  })
})
