import {LAST_ROUND} from '../actions'

const initial = {score: 0, course: ''}

const round = (state = initial, action) => {
  switch (action.type) {
    case LAST_ROUND:
      return state

    // case NEW_ROUND:
    //   state =

    default:
      return state
  }
}

export default round
