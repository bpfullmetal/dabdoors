import { SET_PANEL } from '../actions/panel'

export const panel = (state = 'Flush', action) => {
  switch(action.type) {
    case SET_PANEL:
        return action.panel
    default:
      return state
  }
}