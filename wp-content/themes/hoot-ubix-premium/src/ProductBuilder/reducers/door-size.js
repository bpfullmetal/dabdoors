import { SET_DOOR_SIZE } from '../actions/door-size'

export const doorSize = (state = { width: doorSettings.initWidth, height: doorSettings.initHeight }, action) => {
  switch(action.type) {
    case SET_DOOR_SIZE:
      return action.size
    default:
      return state
  }
}