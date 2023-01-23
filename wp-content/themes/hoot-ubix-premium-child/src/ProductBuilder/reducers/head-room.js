import { SET_HEAD_ROOM } from '../actions/head-room'

const headroomDefault = adminProps.headroom.options.filter( headroom => headroom.default )
const initialState = headroomDefault.length ? headroomDefault[0].option_label : adminProps.headroom.options[0].option_label

export const headRoom = (state = initialState, action) => {
  switch(action.type) {
    case SET_HEAD_ROOM:
      return action.headRoom
    default:
      return state
  }
}