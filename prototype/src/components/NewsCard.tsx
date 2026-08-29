import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NewsArticle } from '../types'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function NewsCard({ article, compact = false }: { article: NewsArticle; compact?: boolean }) {
  return (
    <a
      className={`news-card${compact ? ' news-card--compact' : ''}`}
      href={article.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="news-card__meta">
        <time dateTime={article.date}>{dateFormatter.format(new Date(`${article.date}T00:00:00Z`))}</time>
        <span>{article.author}</span>
      </div>
      <h3>{article.title}</h3>
      <span className="content-link">
        Read article <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
    </a>
  )
}
