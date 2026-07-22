export const getPreviousMonthDate = (date) => {
  if (!date) return ''

  const previous = new Date(date)

  previous.setMonth(previous.getMonth() - 1)

  return previous.toISOString()
}
