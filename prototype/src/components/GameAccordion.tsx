import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faClock, faLink, faSquare } from '@fortawesome/free-solid-svg-icons'
import type { Game, Player } from '../types'
import { displayTimeControl } from '../lib/schedule'
import { ChessEmbed } from './ChessEmbed'

interface GameAccordionProps {
  game: Game
  white: Player
  black: Player
  initiallyOpen: boolean
}

export function GameAccordion({ game, white, black, initiallyOpen }: GameAccordionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  return (
    <article className="game-accordion">
      <button className="game-accordion__trigger" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}>
        <span><b>Game {game.id}</b></span>
        <strong>{game.result}</strong>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <div className="game-accordion__content" hidden={!isOpen} aria-hidden={!isOpen}>
        <dl>
          <div><dt><FontAwesomeIcon icon={faSquare} /> White</dt><dd>{white.displayName}</dd></div>
          <div><dt><FontAwesomeIcon icon={faSquare} /> Black</dt><dd>{black.displayName}</dd></div>
          <div><dt><FontAwesomeIcon icon={faClock} /> Time control</dt><dd>{displayTimeControl(game.timeControl)}</dd></div>
          <div><dt><FontAwesomeIcon icon={faLink} /> Source</dt><dd>{game.sourceLink ? <a href={game.sourceLink} target="_blank" rel="noreferrer">{game.site ?? 'Chess.com'}</a> : (game.site ?? 'Chess.com')}</dd></div>
        </dl>
        {game.embedId && <ChessEmbed embedId={game.embedId} />}
      </div>
    </article>
  )
}
