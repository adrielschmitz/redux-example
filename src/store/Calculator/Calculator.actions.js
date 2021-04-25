export const sum = (a, b) => {
  return {
    type: 'SUM',
    payload: [a, b]
  }
}

export const subtract = (a, b) => {
  return {
    type: 'SUBTRACT',
    payload: [a, b]
  }
}
