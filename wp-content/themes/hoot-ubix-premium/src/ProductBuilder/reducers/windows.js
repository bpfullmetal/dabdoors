import { SET_WINDOWS, TOGGLE_WINDOWS, TOGGLE_WINDOW } from '../actions/windows'

export const windows = (state = [], action) => {
  switch(action.type) {
    case SET_WINDOWS:
      return action.windows
    default:
      return state
  }
}

export const windowsEnabled = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_WINDOWS:
      return !state
    default:
      return state
  }
}