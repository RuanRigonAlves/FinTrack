export const getPreviousMonthDate = (date) => {
  const [day, monthYear] = date.split('-')
  const [month, year] = monthYear.split('/').map(Number)

  const previous = new Date(year, month - 2, Number(day))

  const newDay = String(previous.getDate()).padStart(2, '0')
  const newMonth = String(previous.getMonth() + 1).padStart(2, '0')
  const newYear = previous.getFullYear()

  return `${newDay}-${newMonth}/${newYear}`
}
