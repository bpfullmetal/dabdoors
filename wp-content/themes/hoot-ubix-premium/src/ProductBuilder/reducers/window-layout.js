import { SET_WINDOW_LAYOUT } from '../actions/window-layout'

export const windowLayout = (state = 'custom', action) => {
  switch(action.type) {
    case SET_WINDOW_LAYOUT:
        return state
    default:
      return state
  }
}