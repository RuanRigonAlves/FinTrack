export const getPreviousMonthDate = (date) => {
  if (!date) return ''

  const previous = new Date(date)

  previous.setMonth(previous.getMonth() - 1)

  const month = String(previous.getMonth() + 1).padStart(2, '0')
  const year = previous.getFullYear()

  return `${month}/${year}`
}
