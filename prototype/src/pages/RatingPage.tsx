import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faArrowUpWideShort, faMagnifyingGlass, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { BrandHeader } from '../components/BrandHeader'
import { getPlayer, ratings } from '../lib/data'
import { normalisedIncludes } from '../lib/schedule'

type SortField = 'player' | 'elo'
type SortDirection = 'asc' | 'desc'

export function RatingPage() {
  const [query, setQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('elo')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const visibleRatings = useMemo(() => ratings
    .map((rating) => ({ ...rating, player: getPlayer(rating.playerId) }))
    .filter(({ player }) => normalisedIncludes([player.displayName, player.title ?? '', player.countryName ?? ''].join(' '), query))
    .sort((first, second) => {
      const comparison = sortField === 'elo'
        ? first.elo - second.elo
        : first.player.displayName.localeCompare(second.player.displayName)
      return sortDirection === 'asc' ? comparison : -comparison
    }), [query, sortDirection, sortField])

  function toggleSort(field: SortField) {
    if (field === sortField) {
      setSortDirection((direction) => direction === 'asc' ? 'desc' : 'asc')
      return
    }
    setSortField(field)
    setSortDirection(field === 'elo' ? 'desc' : 'asc')
  }

  function sortIcon(field: SortField) {
    if (field !== sortField) return null
    return <FontAwesomeIcon icon={sortDirection === 'asc' ? faArrowUpWideShort : faArrowDownShortWide} />
  }

  return (
    <main className="content-page rating-page">
      <BrandHeader />
      <section className="page-intro rating-page__intro">
        <p className="eyebrow"><FontAwesomeIcon icon={faRankingStar} /> Freestyle Chess</p>
        <h1>Ratings</h1>
      </section>
      <section className="listing-content rating-page__content">
        <label className="search-box rating-page__search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search player or country" />
        </label>
        <div className="rating-table" role="table" aria-label="Player ratings">
          <div className="rating-table__header" role="row">
            <button role="columnheader" onClick={() => toggleSort('player')}>Player {sortIcon('player')}</button>
            <button role="columnheader" onClick={() => toggleSort('elo')}>Elo {sortIcon('elo')}</button>
          </div>
          <div role="rowgroup">
            {visibleRatings.map(({ player, elo }) => (
              <div className="rating-table__row" role="row" key={player.id}>
                <div className="rating-player" role="cell">
                  <div className="rating-player__photo">
                    {player.photo ? <img src={player.photo} alt="" /> : <FontAwesomeIcon icon={faRankingStar} />}
                  </div>
                  {player.countryCode && <img className="rating-player__flag" src={`https://flagsapi.com/${player.countryCode.toUpperCase()}/flat/24.png`} alt={player.countryName ? `${player.countryName} flag` : ''} />}
                  {player.title && <b className="rating-player__title">{player.title}</b>}
                  <span>{player.displayName}</span>
                </div>
                <strong className="rating-table__elo" role="cell">{elo}</strong>
              </div>
            ))}
          </div>
        </div>
        {!visibleRatings.length && <p className="rating-page__empty">No players match this search.</p>}
      </section>
    </main>
  )
}
