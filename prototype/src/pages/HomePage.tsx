import { faArrowRight, faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { BrandHeader } from '../components/BrandHeader'
import { NewsCard } from '../components/NewsCard'
import { VideoCard } from '../components/VideoCard'
import { home, news, videos } from '../lib/data'

export function HomePage() {
  const featuredNews = home.featuredNewsIds.flatMap((id) => {
    const article = news.find((item) => item.id === id)
    return article ? [article] : []
  })
  const featuredVideos = home.featuredVideoIds.flatMap((id) => {
    const video = videos.find((item) => item.id === id)
    return video ? [video] : []
  })

  return (
    <main className="content-page home-page">
      <BrandHeader />
      <section className="home-hero">
        <p className="eyebrow">{home.hero.eyebrow}</p>
        <h1>{home.hero.title}</h1>
        <p className="home-hero__lead">{home.hero.description}</p>
        <div className="home-hero__actions">
          <Link className="primary-action" to="/schedule">View schedule <FontAwesomeIcon icon={faArrowRight} /></Link>
          <Link className="secondary-action" to="/videos">Watch now</Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <div><p className="eyebrow">ON THE HORIZON</p><h2>Upcoming world stage</h2></div>
          <Link to="/schedule">Schedule <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <div className="event-grid">
          {home.events.map((event) => (
            <article className="event-card" key={event.id}>
              <span className="event-card__number">{String(home.events.indexOf(event) + 1).padStart(2, '0')}</span>
              <div>
                <h3>{event.name}</h3>
                <p><FontAwesomeIcon icon={faCalendarDays} /> {event.dateLabel}</p>
                <p><FontAwesomeIcon icon={faLocationDot} /> {event.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section content-section--dark">
        <div className="section-title">
          <div><p className="eyebrow">WATCH OUT</p><h2>Videos & streams</h2></div>
          <Link to="/videos">View all <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <div className="video-grid video-grid--featured">
          {featuredVideos.map((video) => <VideoCard key={video.id} video={video} compact />)}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <div><p className="eyebrow">LATEST MOVES</p><h2>From the newsroom</h2></div>
          <Link to="/news">View all <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
        <div className="news-grid">
          {featuredNews.map((article) => <NewsCard key={article.id} article={article} compact />)}
        </div>
      </section>
    </main>
  )
}
