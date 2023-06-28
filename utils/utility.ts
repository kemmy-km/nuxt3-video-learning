
export const deepCopy = (value: any) => {
  return JSON.parse(JSON.stringify(value))
}
