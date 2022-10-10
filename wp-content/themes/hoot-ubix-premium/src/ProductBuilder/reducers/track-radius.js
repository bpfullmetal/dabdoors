import { SET_TRACK_RADIUS } from '../actions/track-radius'

export const trackRadius = (state = 12, action) => {
  switch(action.type) {
    case SET_TRACK_RADIUS:
        return action.trackRadius
    default:
      return state
  }
}