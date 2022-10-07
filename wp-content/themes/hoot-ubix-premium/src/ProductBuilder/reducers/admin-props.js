import { SET_ADMIN_PROPS } from '../actions/admin-props'

export const adminProps = (state = {}, action) => {
  switch(action.type) {
    case SET_ADMIN_PROPS:
      return action.props
    default:
      return state
  }
}