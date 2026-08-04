export function formatDate(date, type = 'short') {
  if (!date) return ''

  const currentDate = new Date(date)

  switch (type) {
    case 'short':
      return new Intl.DateTimeFormat('pt-BR').format(currentDate)

    case 'dayMonth':
      return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'short',
      })
        .format(currentDate)
        .replace(' de ', ' ')
        .replace('.', '')

    case 'monthYear':
      return new Intl.DateTimeFormat('pt-BR', {
        month: 'short',
        year: 'numeric',
      })
        .format(currentDate)
        .replace(' de ', ' ')
        .replace('.', '')

    case 'monthYearNumeric':
      return `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`

    case 'long':
      return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(currentDate)

    case 'input':
      return currentDate.toISOString().split('T')[0]

    default:
      return currentDate
  }
}
