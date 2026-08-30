import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChessBoard, faClock, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BrandHeader } from '../components/BrandHeader'
import { GameAccordion } from '../components/GameAccordion'
import { PlayerCard } from '../components/PlayerCard'
import { eventById, getPlayer, matches } from '../lib/data'
import { formatDate, formatScore, matchScore } from '../lib/schedule'

export function MatchDetailPage() {
  const { matchId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const match = matches.find((candidate) => candidate.id === Number(matchId))

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [matchId])

  if (!match) return <section className="page-error"><h1>Match not found</h1><button onClick={() => navigate('/schedule')}>Back to Schedule</button></section>
  const event = eventById.get(match.eventId)
  const player1 = getPlayer(match.player1Id)
  const player2 = getPlayer(match.player2Id)
  const score = matchScore(match)
  const returnSearch = location.state?.returnSearch ?? `?date=${match.startDate}&open=${match.id}`
  const showGames = match.status !== 'upcoming' && match.games.length > 0

  return (
    <section className="match-detail-page">
      <BrandHeader onBack={() => navigate({ pathname: '/schedule', search: returnSearch })} />
      <main className="match-detail">
        <p className="eyebrow"><FontAwesomeIcon icon={faTrophy} /> {event?.name ?? 'Freestyle Chess'}</p>
        <div className="match-detail__info">
          <span><FontAwesomeIcon icon={faCalendarDay} /> {formatDate(match.startDate, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span><FontAwesomeIcon icon={faChessBoard} /> {match.variant}</span>
          <span className={`status-pill status-pill--${match.status}`}>{match.status}</span>
        </div>
        <div className="players-grid">
          <PlayerCard player={player1} elo={match.player1Elo} side="left" />
          {match.status === 'upcoming' ? (
            <div className="match-detail__score match-detail__score--versus"><strong>VS</strong></div>
          ) : (
            <div className="match-detail__score"><strong>{formatScore(score.first)}</strong><span>—</span><strong>{formatScore(score.second)}</strong><small>match score</small></div>
          )}
          <PlayerCard player={player2} elo={match.player2Elo} side="right" />
        </div>
        {match.games.length === 0 && (
          <p className="match-detail__pending-results">
            <FontAwesomeIcon icon={faClock} />
            {match.status === 'upcoming'
              ? 'Match results will be updated here after play begins.'
              : 'Game results and archive will be updated here soon.'}
          </p>
        )}
        {showGames && (
          <section className="games-section">
            <div className="section-heading"><h2>Games</h2></div>
            {match.games.map((game, index) => <GameAccordion key={game.id} game={game} white={getPlayer(game.whitePlayerId)} black={getPlayer(game.blackPlayerId)} initiallyOpen={index === 0} />)}
          </section>
        )}
      </main>
    </section>
  )
}
