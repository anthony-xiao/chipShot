export const REQUEST_STROKES = 'REQUEST_STROKES'
export const EMPTY_STROKES = 'EMPTY_STROKES'

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
