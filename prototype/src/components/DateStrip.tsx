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
  const pendingRangeAnchor = useRef<string | null>(null)
  const scrollAnimationFrame = useRef<number | null>(null)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [rangeAnchor, setRangeAnchor] = useState(selectedDate)
  const selected = parseISO(selectedDate)
  const [pickerMonth, setPickerMonth] = useState(selected)
  const dates = useMemo(
    () => Array.from({ length: 61 }, (_, index) => localIsoDate(addDays(parseISO(rangeAnchor), index - 30))),
    [rangeAnchor],
  )

  useEffect(() => {
    if (selectedDate !== rangeAnchor && pendingRangeAnchor.current !== selectedDate) setRangeAnchor(selectedDate)
  }, [rangeAnchor, selectedDate])

  function scrollToDate(date: string, behavior: ScrollBehavior = 'auto') {
    const strip = stripRef.current
    const anchor = strip?.querySelector<HTMLElement>(`[data-date="${date}"]`)
    if (!strip || !anchor) return
    strip.scrollTo({
      left: anchor.offsetLeft - (strip.clientWidth - anchor.clientWidth) / 2,
      behavior,
    })
  }

  useLayoutEffect(() => {
    scrollToDate(rangeAnchor)
  }, [rangeAnchor])

  useEffect(() => () => {
    if (scrollAnimationFrame.current) cancelAnimationFrame(scrollAnimationFrame.current)
  }, [])

  function animateToDate(date: string, onComplete?: () => void) {
    const strip = stripRef.current
    const anchor = strip?.querySelector<HTMLElement>(`[data-date="${date}"]`)
    if (!strip || !anchor) return false

    if (scrollAnimationFrame.current) cancelAnimationFrame(scrollAnimationFrame.current)
    const from = strip.scrollLeft
    const to = anchor.offsetLeft - (strip.clientWidth - anchor.clientWidth) / 2
    const distance = Math.abs(to - from)
    if (distance < 1) {
      onComplete?.()
      return true
    }

    const duration = Math.min(700, Math.max(320, distance * 0.18))
    const startedAt = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)
      strip.scrollLeft = from + (to - from) * eased
      if (progress < 1) {
        scrollAnimationFrame.current = requestAnimationFrame(tick)
      } else {
        scrollAnimationFrame.current = null
        onComplete?.()
      }
    }
    scrollAnimationFrame.current = requestAnimationFrame(tick)
    return true
  }

  function selectAndCenter(date: Date | string) {
    const isoDate = typeof date === 'string' ? date : localIsoDate(date)
    if (isoDate === rangeAnchor) {
      onChange(isoDate)
      animateToDate(isoDate)
      return
    }

    pendingRangeAnchor.current = isoDate
    onChange(isoDate)
    const completed = animateToDate(isoDate, () => {
      pendingRangeAnchor.current = null
      setRangeAnchor(isoDate)
    })
    if (!completed) {
      pendingRangeAnchor.current = null
      setRangeAnchor(isoDate)
    }
  }

  function selectTodayFromPicker() {
    const todayDate = parseISO(today)
    setPickerMonth(todayDate)
    selectAndCenter(todayDate)
  }

  function handleDatePickerOpenChange(open: boolean) {
    setIsDatePickerOpen(open)
    if (open) setPickerMonth(selected)
  }

  return (
    <section className="date-strip" aria-label="Select a schedule date">
      <div className="date-strip__content">
        <div className="date-strip__topline">
          <Popover open={isDatePickerOpen} onOpenChange={handleDatePickerOpenChange}>
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
                month={pickerMonth}
                endMonth={new Date(2099, 12, 31)}
                captionLayout="dropdown"
                navLayout="around"
                animate
                fixedWeeks
                weekStartsOn={1}
                onMonthChange={setPickerMonth}
                onSelect={(date) => {
                  if (!date) return
                  setPickerMonth(date)
                  selectAndCenter(date)
                }}
              />
              <button className="date-picker-today-button" type="button" onClick={selectTodayFromPicker}>
                <FontAwesomeIcon icon={faRotateLeft} /> Go to Today
              </button>
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
                onClick={() => selectAndCenter(date)}
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
