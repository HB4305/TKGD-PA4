import { useState } from 'react'
import { BrandHeader } from '../components/BrandHeader'
import { VideoCard } from '../components/VideoCard'
import { videos } from '../lib/data'
import type { VideoCategory } from '../types'

type Filter = 'all' | VideoCategory
const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'stream', label: 'Streams' },
  { id: 'original', label: 'Originals' },
  { id: 'championship', label: 'Championship' },
]

export function VideosPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const visibleVideos = filter === 'all' ? videos : videos.filter((video) => video.category === filter)

  return (
    <main className="content-page listing-page">
      <BrandHeader />
      <header className="page-intro page-intro--dark">
        <p className="eyebrow">WATCH OUT</p>
        <h1>Videos & streams</h1>
        <p>Full tournament broadcasts, championship moments and original Freestyle stories.</p>
      </header>
      <section className="listing-content">
        <div className="content-filters" aria-label="Video categories">
          {filters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? 'is-active' : ''}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="video-grid">
          {visibleVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      </section>
    </main>
  )
}
