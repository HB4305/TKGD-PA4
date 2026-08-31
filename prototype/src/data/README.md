# Prototype data

Only edit the JSON files in this folder when adding prototype content. IDs are stable references: do not change an existing ID after another document points to it.

## Files

- `navigation.json`: navigation labels, routes, Font Awesome icon keys, and reference URLs. The current Home, Videos, and News routes render local React pages; More routes render local placeholders.
- `players.json`: player identity and presentation data. `title`, country fields, and `photo` must be filled manually when the PGN importer creates a new player.
- `events.json`: event name and optional physical metadata. The importer creates an event with null location/format fields when it cannot find one.
- `matches.json`: schedule and match-detail content. Match IDs are positive integers and the Schedule view sorts them ascending.
- `home.json`: Home hero copy, upcoming events, and IDs that select featured news/videos.
- `news.json`: article title, publication date, author, and official Freestyle Chess URL.
- `videos.json`: video title, category, YouTube ID, URL, and thumbnail URL.

Home references news and videos by stable ID. Every ID in `featuredNewsIds` and `featuredVideoIds` should exist in the corresponding JSON file. The News and Videos pages preserve the array order in their data files.

## Match shape

```json
{
  "id": 12,
  "eventId": "2026-fide-freestyle-chess-world-championship",
  "player1Id": "magnus-carlsen",
  "player2Id": "fabiano-caruana",
  "player1Elo": 2832,
  "player2Elo": 2727,
  "variant": "Chess960",
  "startDate": "2026-02-14",
  "endDate": "2026-02-14",
  "status": "completed",
  "games": [
    {
      "id": 1,
      "embedId": "15616892",
      "date": "2026-02-14",
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

`startDate` and `endDate` are the earliest and latest game dates in a match. Each game stores its own `date`, allowing Schedule to show a multi-day match on every date where it has a game. `player1Elo` and `player2Elo` are taken from the last game after sorting by `round`. Games intentionally do not store their own Elo, FEN or SetUp fields. Set `embedId` to `null` when a Chess.com board is unavailable; the prototype will then omit the embedded board. `whitePlayerId` and `blackPlayerId` may also be `null` when a pairing has not been confirmed: the archive shows `TBD` and that game is excluded from the aggregate score until its players are known.

Run `pnpm data:import-match` to paste one or more PGN header blocks and create a new match. The importer preserves player/event fields you fill by hand, validates duplicate embed IDs, and updates the three relevant JSON files only after confirmation.
