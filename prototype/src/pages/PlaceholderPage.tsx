import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import { BrandHeader } from '../components/BrandHeader'
import { navigation } from '../lib/data'

export function PlaceholderPage() {
  const { pathname } = useLocation()
  const item = navigation.moreItems.find((entry) => entry.route === pathname)

  return (
    <main className="content-page placeholder-page">
      <BrandHeader />
      <section className="placeholder-card">
        <FontAwesomeIcon icon={faChessKnight} />
        <p className="eyebrow">COMING SOON</p>
        <h1>{item?.label ?? 'Page not found'}</h1>
        <p>{item ? 'This part of the Freestyle Chess experience is getting ready for its next move.' : 'The page you are looking for is not available.'}</p>
        <Link className="primary-action" to="/">Return home</Link>
      </section>
    </main>
  )
}
