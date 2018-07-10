import {REQUEST_STROKES, EMPTY_STROKES} from '../actions'

const currentHole = (state = 0, action) => {
  switch (action.type) {
    case REQUEST_STROKES:
      state += 1
      return state
    case EMPTY_STROKES:
      state = 0
      return state
    default:
      return state
  }
}

export default currentHole
