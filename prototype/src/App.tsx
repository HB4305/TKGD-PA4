import { HashRouter, Route, Routes } from 'react-router-dom'
import { BottomNavigation } from './components/BottomNavigation'
import { ExternalPage } from './components/ExternalPage'
import { MatchDetailPage } from './pages/MatchDetailPage'
import { SchedulePage } from './pages/SchedulePage'

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <div className="app-content">
          <Routes>
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/schedule/:matchId" element={<MatchDetailPage />} />
            <Route path="*" element={<ExternalPage />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </HashRouter>
  )
}
