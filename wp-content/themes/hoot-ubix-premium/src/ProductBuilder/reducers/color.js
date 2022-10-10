import { SET_COLOR } from '../actions/color'

export const color = (state = { color: '#eddeb9', sku: 'B' }, action) => {
  switch(action.type) {
    case SET_COLOR:
      return action.color
    default:
      return state
  }
}