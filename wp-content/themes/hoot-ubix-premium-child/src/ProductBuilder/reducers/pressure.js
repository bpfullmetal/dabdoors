import { SET_PRESSURE } from '../actions/pressure'

export const pressure = (state = 'no-pressure', action) => {
  switch(action.type) {
    case SET_PRESSURE:
        return action.pressure
    default:
      return state
  }
}