import { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { DateStrip } from '../components/DateStrip'
import { MatchCard } from '../components/MatchCard'
import { BrandHeader } from '../components/BrandHeader'
import { eventById, getPlayer, matches } from '../lib/data'
import { localIsoDate, matchOccursOnDate, normalisedIncludes } from '../lib/schedule'
import type { MatchStatus } from '../types'

const statuses: Array<'all' | MatchStatus> = ['all', 'live', 'upcoming', 'completed']

export function SchedulePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const today = localIsoDate()
  const selectedDate = params.get('date') ?? today
  const query = params.get('q') ?? ''
  const status = (params.get('status') ?? 'all') as 'all' | MatchStatus
  const openMatchId = Number(params.get('open')) || null
  const eventCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const match of matches) {
      const dates = match.games.length > 0 ? new Set(match.games.map((game) => game.date)) : new Set([match.startDate])
      for (const date of dates) counts.set(date, (counts.get(date) ?? 0) + 1)
    }
    return counts
  }, [])

  function updateParams(next: Record<string, string | null>) {
    const nextParams = new URLSearchParams(params)
    for (const [key, value] of Object.entries(next)) value ? nextParams.set(key, value) : nextParams.delete(key)
    navigate({ pathname: '/schedule', search: `?${nextParams.toString()}` })
  }

  const filteredMatches = useMemo(() => matches
    .filter((match) => matchOccursOnDate(match, selectedDate))
    .filter((match) => status === 'all' || match.status === status)
    .filter((match) => {
      if (!query.trim()) return true
      const event = eventById.get(match.eventId)
      const locationText = event ? [event.location.venue, event.location.city, event.location.country].filter(Boolean).join(' ') : ''
      return normalisedIncludes([getPlayer(match.player1Id).displayName, getPlayer(match.player2Id).displayName, event?.name ?? '', locationText].join(' '), query)
    })
    .sort((first, second) => first.id - second.id), [selectedDate, status, query])

  return (
    <section className="schedule-page">
      <BrandHeader />
      <DateStrip selectedDate={selectedDate} today={today} eventCounts={eventCounts} onChange={(date) => updateParams({ date, open: null })} />
      <div className="schedule-controls">
        <label className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input value={query} onChange={(event) => updateParams({ q: event.target.value || null, open: null })} placeholder="Search player, event or location" />
        </label>
        <div className="status-filters" aria-label="Match status filter">
          {statuses.map((item) => <button key={item} className={status === item ? 'is-active' : ''} onClick={() => updateParams({ status: item === 'all' ? null : item, open: null })}>{item}</button>)}
        </div>
      </div>
      <main className="schedule-list">
        <div className="schedule-list__heading"><p>{selectedDate === today ? 'Today' : selectedDate}</p><span>{filteredMatches.length} match{filteredMatches.length === 1 ? '' : 'es'}</span></div>
        {filteredMatches.length ? filteredMatches.map((match) => {
          const event = eventById.get(match.eventId)
          if (!event) return null
          return <MatchCard key={match.id} match={match} event={event} player1={getPlayer(match.player1Id)} player2={getPlayer(match.player2Id)} isOpen={openMatchId === match.id} onToggle={() => updateParams({ open: openMatchId === match.id ? null : String(match.id) })} />
        }) : (
          <div className="empty-state"><h2>No matches found</h2><p>Try a different date, search term, or status filter.</p><button onClick={() => updateParams({ q: null, status: null })}>Reset filters</button></div>
        )}
      </main>
    </section>
  )
}
