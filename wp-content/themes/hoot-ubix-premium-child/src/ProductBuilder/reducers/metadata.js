import { SET_METADATA } from '../actions/metadata'

// Lock initial state
// console.log(doorSettings)
const headroomDefault = adminProps.headroom.options.filter( headroom => headroom.default )
const headroomAddCost = headroomDefault.length ? Number(headroomDefault[0].additional_price) : 0
const headroomVal = headroomDefault.length ? headroomDefault[0].option_label : adminProps.headroom.options[0].option_label
// Lock initial state
const lockDefault = Object.keys(adminProps.lock_placement_group).filter( prop => {
    return typeof adminProps.lock_placement_group[prop] === 'object' && adminProps.lock_placement_group[prop].default 
})
const lockAddCost = lockDefault.length ? Number(adminProps.lock_placement_group[lockDefault[0]].additional_price_$) : 0
const lockVal = lockDefault.length ? lockDefault[0] : 'inside'
// Panel initial state
const panelDefault = adminProps.panels.filter( panel => panel.default )
const panelAddCost = panelDefault.length ? Number(panelDefault[0].additional_price) : 0
const panelVal = panelDefault.length ? panelDefault[0].panel_type : adminProps.panels[0].panel_type
// Roller initial state
const rollerDefault = adminProps.roller_type_group.select_button_options.filter( roller => roller.default )
const rollerAddCost = rollerDefault.length ? Number(rollerDefault[0].additional_price) : 0
const rollerVal = rollerDefault.length ? rollerDefault[0].button_name : adminProps.roller_type_group.select_button_options[0].button_name
// Color initial state
const colorDefault = adminProps.standard_colors_group.select_button_options.filter( color => color.default )
const colorVal = colorDefault.length ? colorDefault[0].sku_code : adminProps.standard_colors_group.select_button_options[0].sku_code

const initialMetaData = {
  doorSize: {
    width: doorSettings.initHeight,
    height: doorSettings.initWidth,
  },
  lock: {
    value: lockVal,
    cost: lockAddCost
  },
  insulation: {
    enabled: false,
    cost: 0
  },
  vents: {
    enabled: false,
    cost: 0
  },
  panel: {
    value: panelVal,
    cost: panelAddCost
  },
  headroom: {
    value: headroomVal,
    cost: headroomAddCost
  },
  trackRadius: {
    value: null,
    cost: 0
  },
  roller: {
    value: rollerVal,
    cost: rollerAddCost
  },
  color: {
    type: 'standard',
    value: colorVal,
    cost: 0
  },
  uBar: {
    cost: 0,
    count: 0,
    pressure: '27-30'
  },
  windows: {
    position: [],
    enabled: false,
    cost: 0
  },
  windowPacks: {
    value: null
  }
}

export const metadata = (state = initialMetaData, action) => {
  switch(action.type) {
    case SET_METADATA:
      return action.metadata
    default:
      return state
  }
}