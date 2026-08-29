import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight, faUser } from '@fortawesome/free-solid-svg-icons'
import type { Player } from '../types'

interface PlayerCardProps {
  player: Player
  elo: number | null
  side: 'left' | 'right'
}

export function PlayerCard({ player, elo, side }: PlayerCardProps) {
  return (
    <section className={`player-card player-card--${side}`}>
      <div className="player-card__avatar">
        {player.photo ? <img src={player.photo} alt={player.displayName} /> : <FontAwesomeIcon icon={faUser} />}
      </div>
      <p className="player-card__title"><FontAwesomeIcon icon={faChessKnight} /> {player.title ?? 'Player'}</p>
      <h2>{player.displayName}</h2>
      {player.countryCode && player.countryName && (
        <p className="player-card__country">
          <img src={`https://flagsapi.com/${player.countryCode.toUpperCase()}/flat/24.png`} alt="" />
          {player.countryName}
        </p>
      )}
      <p className="player-card__elo">Elo <strong>{elo ?? '—'}</strong></p>
    </section>
  )
}
