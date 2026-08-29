import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { VideoItem } from '../types'

const labels: Record<VideoItem['category'], string> = {
  stream: 'Tournament stream',
  original: 'Freestyle original',
  championship: 'World championship',
}

export function VideoCard({ video, compact = false }: { video: VideoItem; compact?: boolean }) {
  return (
    <a
      className={`video-card${compact ? ' video-card--compact' : ''}`}
      href={video.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch ${video.title} on YouTube`}
    >
      <div className="video-card__media">
        <img src={video.thumbnail} alt="" loading="lazy" />
        <span className="video-card__play"><FontAwesomeIcon icon={faPlay} /></span>
      </div>
      <div className="video-card__body">
        <p>{labels[video.category]}</p>
        <h3>{video.title}</h3>
      </div>
    </a>
  )
}
