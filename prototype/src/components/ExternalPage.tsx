import type { CSSProperties } from 'react'
import { useLocation } from 'react-router-dom'
import { navigation } from '../lib/data'
import { BrandHeader } from './BrandHeader'

export function ExternalPage() {
  const location = useLocation()
  const page = [...navigation.primaryItems, ...navigation.moreItems].find((item) => item.route === location.pathname)
  if (!page?.url) return <div className="page-error">This page is not configured.</div>

  return (
    <section className="external-page">
      <BrandHeader />
      <div className="iframe-viewport" style={{ '--crop-top': `${page.cropTopPx ?? 0}px` } as CSSProperties}>
        <iframe title={page.label} src={page.url} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </section>
  )
}
