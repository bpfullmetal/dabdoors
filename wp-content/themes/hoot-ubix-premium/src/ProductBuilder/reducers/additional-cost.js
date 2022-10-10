import { SET_ADDITIONAL_COST } from '../actions/additional-cost'

export const additionalCost = (state = {}, action) => {
  switch(action.type) {
    case SET_ADDITIONAL_COST:
      return action.additionalCost
    default:
      return state
  }
}