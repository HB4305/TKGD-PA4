import { DayPicker, getDefaultClassNames, type DayPickerProps } from 'react-day-picker'

export function Calendar({ className = '', classNames, showOutsideDays = true, ...props }: DayPickerProps) {
  const defaults = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`calendar ${className}`.trim()}
      classNames={{
        root: `${defaults.root} calendar__root`,
        months: `${defaults.months} calendar__months`,
        month: `${defaults.month} calendar__month`,
        month_caption: `${defaults.month_caption} calendar__caption`,
        caption_label: `${defaults.caption_label} calendar__caption-label`,
        dropdowns: `${defaults.dropdowns} calendar__dropdowns`,
        dropdown: `${defaults.dropdown} calendar__dropdown`,
        dropdown_root: `${defaults.dropdown_root} calendar__dropdown-root`,
        months_dropdown: `${defaults.months_dropdown} calendar__months-dropdown`,
        years_dropdown: `${defaults.years_dropdown} calendar__years-dropdown`,
        chevron: `${defaults.chevron} calendar__chevron`,
        nav: `${defaults.nav} calendar__nav`,
        button_previous: `${defaults.button_previous} calendar__nav-button`,
        button_next: `${defaults.button_next} calendar__nav-button`,
        month_grid: `${defaults.month_grid} calendar__grid`,
        weekdays: `${defaults.weekdays} calendar__weekdays`,
        weekday: `${defaults.weekday} calendar__weekday`,
        week: `${defaults.week} calendar__week`,
        weeks: `${defaults.weeks} calendar__weeks`,
        day: `${defaults.day} calendar__day`,
        day_button: `${defaults.day_button} calendar__day-button`,
        selected: `${defaults.selected} is-selected`,
        today: `${defaults.today} is-today`,
        outside: `${defaults.outside} is-outside`,
        disabled: `${defaults.disabled} is-disabled`,
        hidden: `${defaults.hidden} is-hidden`,
        ...classNames,
      }}
      {...props}
    />
  )
}
