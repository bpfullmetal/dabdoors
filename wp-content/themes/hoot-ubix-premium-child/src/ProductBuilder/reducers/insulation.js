import { TOGGLE_INSULATION } from '../actions/insulation'

export const insulation = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_INSULATION:
        return !state
    default:
      return state
  }
}