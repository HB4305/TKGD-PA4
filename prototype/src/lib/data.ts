import eventsData from '../data/events.json'
import homeData from '../data/home.json'
import matchesData from '../data/matches.json'
import navigationData from '../data/navigation.json'
import newsData from '../data/news.json'
import playersData from '../data/players.json'
import videosData from '../data/videos.json'
import type { EventInfo, HomeData, Match, NavigationData, NewsArticle, Player, VideoItem } from '../types'

export const players = playersData as Player[]
export const events = eventsData as EventInfo[]
export const matches = matchesData as Match[]
export const navigation = navigationData as NavigationData
export const home = homeData as HomeData
export const news = newsData as NewsArticle[]
export const videos = videosData as VideoItem[]

export const playerById = new Map(players.map((player) => [player.id, player]))
export const eventById = new Map(events.map((event) => [event.id, event]))

export function getPlayer(id: string) {
  const player = playerById.get(id)
  if (!player) throw new Error(`Unknown player ID: ${id}`)
  return player
}

export function getEvent(id: string) {
  const event = eventById.get(id)
  if (!event) throw new Error(`Unknown event ID: ${id}`)
  return event
}
