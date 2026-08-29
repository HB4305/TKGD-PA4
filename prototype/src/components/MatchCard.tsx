import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessBoard, faChevronDown, faChevronUp, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import type { EventInfo, Match, Player } from '../types'
import { formatScore, matchScore } from '../lib/schedule'

interface MatchCardProps {
  match: Match
  event: EventInfo
  player1: Player
  player2: Player
  isOpen: boolean
  onToggle: () => void
}

export function MatchCard({ match, event, player1, player2, isOpen, onToggle }: MatchCardProps) {
  const navigate = useNavigate()
  const pageLocation = useLocation()
  const score = matchScore(match)
  const locationLabel = [event.location.city, event.location.country].filter(Boolean).join(', ')

  function playerLine(player: Player) {
    return (
      <span className="match-card__player">
        {player.countryCode && (
          <img
            src={`https://flagsapi.com/${player.countryCode.toUpperCase()}/flat/24.png`}
            alt={player.countryName ? `${player.countryName} flag` : ''}
          />
        )}
        {player.title && <b className="match-card__title">{player.title}</b>}
        <span className="match-card__player-name">{player.displayName}</span>
      </span>
    )
  }

  return (
    <article className={`match-card ${isOpen ? 'is-open' : ''}`}>
      <button className="match-card__trigger" aria-expanded={isOpen} onClick={onToggle}>
        <span className="match-card__players">
          {playerLine(player1)}
          {playerLine(player2)}
        </span>
        <span className="match-card__header-meta">
          <span className={`status-pill status-pill--${match.status}`}>{match.status}</span>
          {match.status !== 'upcoming' && (
            <span className="match-card__scores" aria-label="Match score">
              <strong>{formatScore(score.first)}</strong>
              <strong>{formatScore(score.second)}</strong>
            </span>
          )}
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </button>
      {isOpen && (
        <div className="match-card__content">
          <p className="match-card__event">{event.name}</p>
          <div className="match-card__meta">
            <span><FontAwesomeIcon icon={faChessBoard} /> {match.variant}</span>
            {locationLabel && <span><FontAwesomeIcon icon={faLocationDot} /> {locationLabel}</span>}
          </div>
          <button className="detail-button" onClick={() => navigate(`/schedule/${match.id}`, { state: { returnSearch: pageLocation.search } })}>View details</button>
        </div>
      )}
    </article>
  )
}
