export const REQUEST_STROKES = 'REQUEST_STROKES'
export const EMPTY_STROKES = 'EMPTY_STROKES'
export const LAST_ROUND = 'LAST_ROUND'
export const NEW_ROUND = 'NEW_ROUND'

export const currentHole = () => {
  return {
    type: 'REQUEST_STROKES'
  }
}

export const emptyHole = () => {
  return {
    type: 'EMPTY_STROKES'
  }
}

export const lastRound = () => {
  return {
    type: 'LAST_ROUND'
  }
}

export const newRound = (newRound) => {
  return {
    type: 'NEW_ROUND',
    newRound
  }
}
