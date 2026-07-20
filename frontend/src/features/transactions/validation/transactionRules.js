export const required = (value) => {
  return !!value || 'This field is required'
}

export const postiveAmount = (value) => {
  return value > 0 || 'Amount must be number greater than zero'
}

export const maxDescription = (value) => {
  return !value || value.length <= 50 || 'Maximum 50 characters'
}
