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
  date: string
  round: string
  whitePlayerId: string | null
  blackPlayerId: string | null
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
  endDate: string
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

export interface NewsArticle {
  id: string
  title: string
  date: string
  author: string
  url: string
}

export type VideoCategory = 'stream' | 'original' | 'championship'

export interface VideoItem {
  id: string
  title: string
  category: VideoCategory
  youtubeId: string
  url: string
  thumbnail: string
}

export interface HomeEvent {
  id: string
  name: string
  dateLabel: string
  location: string
}

export interface HomeData {
  hero: {
    eyebrow: string
    title: string
    description: string
  }
  events: HomeEvent[]
  featuredNewsIds: string[]
  featuredVideoIds: string[]
}
