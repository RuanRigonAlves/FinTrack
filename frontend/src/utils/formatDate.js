export const formatDate = (date, option = 'dia/mes') => {
  if (!date) return ''

  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const currentDate = new Date(date)

  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  if (option === 'dia/mes') {
    return `${day} ${meses[month]}`
  }

  if (option === 'mes/ano') {
    return `${meses[month]} ${year}`
  }

  return currentDate
}

export const formatDateMonthYear = (date) => {
  if (!date) return ''

  const currentDate = new Date(date)

  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const year = currentDate.getFullYear()

  return `${month}/${year}`
}
