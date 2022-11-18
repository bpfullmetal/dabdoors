import { SET_PANEL } from '../actions/panel'

const panelDefault = adminProps.panels.filter( panel => panel.default )
const initialState = panelDefault.length ? panelDefault[0].panel_type : adminProps.panels[0].panel_type

export const panel = (state = initialState, action) => {
  switch(action.type) {
    case SET_PANEL:
        return action.panel
    default:
      return state
  }
}