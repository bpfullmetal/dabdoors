import { SET_ROLLER_TYPE } from '../actions/roller'

const rollerDefault = adminProps.roller_type_group.select_button_options.filter( roller => roller.default )
const initialState = rollerDefault.length ? rollerDefault[0].button_name : adminProps.roller_type_group.select_button_options[0].button_name

export const roller = (state = initialState, action) => {
  switch(action.type) {
    case SET_ROLLER_TYPE:
        return action.roller
    default:
      return state
  }
}