import { BrandHeader } from '../components/BrandHeader'
import { NewsCard } from '../components/NewsCard'
import { news } from '../lib/data'

export function NewsPage() {
  return (
    <main className="content-page listing-page">
      <BrandHeader />
      <header className="page-intro">
        <p className="eyebrow">LATEST MOVES</p>
        <h1>News</h1>
        <p>Stories, tournament reports and announcements from across the Freestyle Chess world.</p>
      </header>
      <section className="listing-content">
        <div className="news-grid news-grid--listing">
          {news.map((article) => <NewsCard key={article.id} article={article} />)}
        </div>
      </section>
    </main>
  )
}
