import { SET_LOCK_PLACEMENT } from '../actions/lock'

const lockDefault = Object.keys(adminProps.lock_placement_group).filter( prop => {
  return typeof adminProps.lock_placement_group[prop] === 'object' && adminProps.lock_placement_group[prop].default 
})
const initialState = lockDefault.length ? lockDefault[0] : 'inside'

export const lock = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOCK_PLACEMENT:
        return action.placement
    default:
      return state
  }
}