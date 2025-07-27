export const required = (value: string | null) => {
  if (value) return undefined
  return 'field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string | null) => {
  if (value && value.length > maxLength) return `max length is ${maxLength} symb`
  return undefined
}