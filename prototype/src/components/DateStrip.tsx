import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronDown, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { addDays, format, parseISO } from 'date-fns'
import { localIsoDate } from '../lib/schedule'
import { Calendar } from './ui/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'

interface DateStripProps {
  selectedDate: string
  today: string
  eventCounts: Map<string, number>
  onChange: (date: string) => void
}

export function DateStrip({ selectedDate, today, eventCounts, onChange }: DateStripProps) {
  const stripRef = useRef<HTMLDivElement>(null)
  const [rangeAnchor, setRangeAnchor] = useState(selectedDate)
  const selected = parseISO(selectedDate)
  const dates = useMemo(
    () => Array.from({ length: 61 }, (_, index) => localIsoDate(addDays(parseISO(rangeAnchor), index - 30))),
    [rangeAnchor],
  )

  useEffect(() => {
    if (selectedDate < dates[0] || selectedDate > dates[dates.length - 1]) setRangeAnchor(selectedDate)
  }, [dates, selectedDate])

  useLayoutEffect(() => {
    const strip = stripRef.current
    const anchor = strip?.querySelector<HTMLElement>(`[data-date="${rangeAnchor}"]`)
    if (strip && anchor) strip.scrollLeft = anchor.offsetLeft - (strip.clientWidth - anchor.clientWidth) / 2
  }, [rangeAnchor])

  function selectAndCenter(date: Date | string) {
    const isoDate = typeof date === 'string' ? date : localIsoDate(date)
    setRangeAnchor(isoDate)
    onChange(isoDate)
  }

  return (
    <section className="date-strip" aria-label="Select a schedule date">
      <div className="date-strip__content">
        <div className="date-strip__topline">
          <Popover>
            <PopoverTrigger asChild>
              <button className="date-picker-button" type="button" aria-label="Choose date">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>{format(selected, 'MMMM yyyy')}</span>
                <FontAwesomeIcon className="date-picker-button__chevron" icon={faChevronDown} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="date-picker-popover">
              <Calendar
                mode="single"
                selected={selected}
                defaultMonth={selected}
                weekStartsOn={1}
                onSelect={(date) => date && selectAndCenter(date)}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div ref={stripRef} className="date-strip__scroll" aria-label="Scrollable date strip">
          {dates.map((date) => {
            const isToday = date === today
            const isSelected = date === selectedDate
            const count = eventCounts.get(date) ?? 0
            return (
              <button
                key={date}
                data-date={date}
                className={`date-chip ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''}`}
                aria-label={`${format(parseISO(date), 'EEEE, MMMM d')}${count ? `, ${count} matches` : ''}`}
                aria-pressed={isSelected}
                onClick={() => onChange(date)}
              >
                <span>{format(parseISO(date), 'EEE')}</span>
                <strong>{format(parseISO(date), 'd')}</strong>
                {isToday && <em>Today</em>}
                {count > 0 && <i aria-hidden="true">{count}</i>}
              </button>
            )
          })}
        </div>
        <button className="today-button" type="button" onClick={() => selectAndCenter(today)}>
          <FontAwesomeIcon icon={faRotateLeft} /> Go to Today
        </button>
      </div>
    </section>
  )
}
