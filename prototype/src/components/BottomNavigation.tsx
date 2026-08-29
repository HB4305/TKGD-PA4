import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faBookOpen,
  faBullhorn,
  faCalendarDays,
  faCirclePlay,
  faEllipsis,
  faGraduationCap,
  faHouse,
  faImages,
  faNewspaper,
  faRankingStar,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { navigation } from '../lib/data'

const icons: Record<string, IconDefinition> = {
  calendarDays: faCalendarDays,
  circlePlay: faCirclePlay,
  house: faHouse,
  newspaper: faNewspaper,
  ellipsis: faEllipsis,
  rankingStar: faRankingStar,
  bullhorn: faBullhorn,
  images: faImages,
  bookOpen: faBookOpen,
  bagShopping: faBagShopping,
  graduationCap: faGraduationCap,
}

export function BottomNavigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const isMoreRoute = useMemo(() => navigation.moreItems.some((item) => item.route === location.pathname), [location.pathname])

  function navigateTo(route: string) {
    setIsMoreOpen(false)
    navigate(route)
  }

  return (
    <nav className="bottom-navigation" aria-label="Primary navigation">
      {isMoreOpen && (
        <>
          <button className="more-backdrop" aria-label="Close More menu" onClick={() => setIsMoreOpen(false)} />
          <div className="more-menu" role="menu" aria-label="More pages">
            {navigation.moreItems.map((item) => (
              <button key={item.id} role="menuitem" onClick={() => navigateTo(item.route)}>
                <FontAwesomeIcon icon={icons[item.icon]} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
      <div className="bottom-navigation__items">
        {navigation.primaryItems.map((item) => {
          const isMore = item.id === 'more'
          const isActive = isMore ? isMoreRoute || isMoreOpen : item.route === location.pathname || (item.id === 'schedule' && location.pathname.startsWith('/schedule'))
          return (
            <button
              key={item.id}
              className={`bottom-navigation__item ${item.id === 'home' ? 'bottom-navigation__item--home' : ''} ${isActive ? 'is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              aria-expanded={isMore ? isMoreOpen : undefined}
              onClick={() => isMore ? setIsMoreOpen((open) => !open) : navigateTo(item.route)}
            >
              <FontAwesomeIcon icon={icons[item.icon]} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
