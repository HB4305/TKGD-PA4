export type MatchStatus = 'live' | 'upcoming' | 'completed'
export type GameResult = '1-0' | '0-1' | '1/2-1/2' | '*'

export interface Player {
  id: string
  displayName: string
  sourceName: string
  title: string | null
  countryCode: string | null
  countryName: string | null
  photo: string | null
}

export interface EventInfo {
  id: string
  name: string
  location: { venue: string | null; city: string | null; country: string | null }
  format: string | null
}

export interface Game {
  id: number
  embedId: string | null
  round: string
  whitePlayerId: string
  blackPlayerId: string
  result: GameResult
  timeControl: string | null
  site: string | null
  sourceLink: string | null
}

export interface Match {
  id: number
  eventId: string
  player1Id: string
  player2Id: string
  player1Elo: number | null
  player2Elo: number | null
  variant: string
  startDate: string
  status: MatchStatus
  games: Game[]
}

export interface NavigationItem {
  id: string
  label: string
  route: string
  icon: string
  url?: string
  cropTopPx?: number
}

export interface NavigationData {
  primaryItems: NavigationItem[]
  moreItems: NavigationItem[]
}
