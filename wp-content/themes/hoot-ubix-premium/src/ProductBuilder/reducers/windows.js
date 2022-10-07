import { SET_WINDOWS, TOGGLE_WINDOWS, TOGGLE_WINDOW } from '../actions/windows'

export const windows = (state = [], action) => {
  switch(action.type) {
    case TOGGLE_WINDOW:
      const toggledWindows = state.map( (window, w) => {
        return w === action.index 
        ? { selected: !window.selected }
        : window
      })
      return toggledWindows
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