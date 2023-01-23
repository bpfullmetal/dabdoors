import { TOGGLE_VENTS } from '../actions/vents'

export const vents = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_VENTS:
        return !state
    default:
      return state
  }
}