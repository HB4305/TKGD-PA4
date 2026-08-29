import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface BrandHeaderProps {
  onBack?: () => void
}

export function BrandHeader({ onBack }: BrandHeaderProps) {
  return (
    <header className="brand-header">
      {onBack ? (
        <button className="back-button" onClick={onBack} aria-label="Back to Schedule">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </button>
      ) : <span className="header-spacer" />}
      <Link className="brand-logo" to="/" aria-label="Go to Home">
        <img src="/logo.svg" alt="Freestyle Chess" />
      </Link>
      <span className="header-spacer" />
    </header>
  )
}
