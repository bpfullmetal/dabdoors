import { SET_LOCK_PLACEMENT } from '../actions/lock'

export const lock = (state = 'inside', action) => {
  switch(action.type) {
    case SET_LOCK_PLACEMENT:
        return action.placement
    default:
      return state
  }
}