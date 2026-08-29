# Prototype data

Only edit the JSON files in this folder when adding prototype content. IDs are stable references: do not change an existing ID after another document points to it.

## Files

- `navigation.json`: navigation labels, route, Font Awesome icon key, official URL, and the number of pixels to crop from an embedded official page.
- `players.json`: player identity and presentation data. `title`, country fields, and `photo` must be filled manually when the PGN importer creates a new player.
- `events.json`: event name and optional physical metadata. The importer creates an event with null location/format fields when it cannot find one.
- `matches.json`: schedule and match-detail content. Match IDs are positive integers and the Schedule view sorts them ascending.

## Match shape

```json
{
  "id": 12,
  "eventId": "fide-freestyle-chess-world-championship",
  "player1Id": "magnus-carlsen",
  "player2Id": "fabiano-caruana",
  "player1Elo": 2832,
  "player2Elo": 2727,
  "variant": "Chess960",
  "startDate": "2026-02-14",
  "status": "completed",
  "games": [
    {
      "id": 1,
      "embedId": "15616892",
      "round": "02-01",
      "whitePlayerId": "magnus-carlsen",
      "blackPlayerId": "fabiano-caruana",
      "result": "1/2-1/2",
      "timeControl": "1500+10",
      "site": "Chess.com",
      "sourceLink": "https://www.chess.com/..."
    }
  ]
}
```

`player1Elo` and `player2Elo` are taken from the last game after sorting by `round`. Games intentionally do not store their own Elo, date, FEN, or SetUp fields. Set `embedId` to `null` when a Chess.com board is unavailable; the prototype will then omit the embedded board.

Run `pnpm data:import-match` to paste one or more PGN header blocks and create a new match. The importer preserves player/event fields you fill by hand, validates duplicate embed IDs, and updates the three relevant JSON files only after confirmation.
