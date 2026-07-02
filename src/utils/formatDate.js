export const formatDate = (date, option = 'dia/mes') => {
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

  const [day, rest] = date.split('-')
  const [month, year] = rest.split('/')

  if (option === 'dia/mes') return `${day} ${meses[Number(month) - 1]}`

  if (option === 'mes/ano') return `${meses[Number(month) - 1]} ${year}`
}

export const formatDateMonthYear = (date) => {
  const [day, rest] = date.split('-')

  return rest
}
