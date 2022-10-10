import { SET_HEAD_ROOM } from '../actions/head-room'

export const headRoom = (state = 'Low headroom', action) => {
  switch(action.type) {
    case SET_HEAD_ROOM:
      return action.headRoom
    default:
      return state
  }
}