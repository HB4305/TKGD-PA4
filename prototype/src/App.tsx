import { HashRouter, Route, Routes } from 'react-router-dom'
import { BottomNavigation } from './components/BottomNavigation'
import { HomePage } from './pages/HomePage'
import { MatchDetailPage } from './pages/MatchDetailPage'
import { NewsPage } from './pages/NewsPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SchedulePage } from './pages/SchedulePage'
import { VideosPage } from './pages/VideosPage'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/schedule/:matchId" element={<MatchDetailPage />} />
            <Route path="*" element={<PlaceholderPage />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </HashRouter>
  )
}
