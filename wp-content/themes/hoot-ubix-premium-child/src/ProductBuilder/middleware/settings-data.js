import { SET_SETTINGS_DATA } from '../actions/settings-data'
import { SET_COLOR } from '../actions/color'
import { SET_DOOR_SIZE } from '../actions/door-size'
import { SET_HEAD_ROOM } from '../actions/head-room'
import { TOGGLE_INSULATION } from '../actions/insulation'
import { SET_LOCK_PLACEMENT } from '../actions/lock'
import { SET_PANEL } from '../actions/panel'
import { SET_PRESSURE } from '../actions/pressure'
import { SET_ROLLER_TYPE } from '../actions/roller'
import { TOGGLE_VENTS } from '../actions/vents'
import { SET_TRACK_RADIUS } from '../actions/track-radius'
import { SET_WINDOWS, TOGGLE_WINDOW, TOGGLE_WINDOWS } from '../actions/windows'
import { SET_WINDOW_LAYOUT } from '../actions/window-layout'
import { SET_ADMIN_PROPS } from '../actions/admin-props'

const settingsData = store => next => action => {
    next(action)
    let settingsData = store.getState().settingsData
    const windowsEnabled = store.getState().windowsEnabled
    const windowsGrid = store.getState().windowsGrid
    const windows = store.getState().windows
    const windowLayout = store.getState().windowLayout
    const doorSize = store.getState().doorSize
    let windowsCost = 0

    switch (action.type) {
        case SET_COLOR:
            let colorCost = 0 
            let filteredColor = []
            // console.log('COLOR', action.color)
            if ( 'premium_colors_group' in adminProps ) {
                filteredColor = adminProps.premium_colors_group.select_button_options.filter( color => color.sku_code === action.color.sku )
                if ( filteredColor.length ) {
                    colorCost = Number(adminProps.premium_colors_group.additional_price)
                    colorName = filteredColor[0].button_type 
                }
            }
            if ( !filteredColor.length && 'standard_colors_group' in adminProps ) {
                filteredColor = adminProps.standard_colors_group.select_button_options.filter( color => color.sku_code === action.color.sku )
                if ( filteredColor.length ) {
                    colorName = filteredColor[0].button_type
                }
            }
            settingsData = {
                ...settingsData,
                color: {
                    type: colorCost ? 'premium' : 'standard',
                    value: action.color.sku,
                    color: colorName,
                    cost: colorCost,
                }
            }
        break;
        case SET_DOOR_SIZE:
            const additionalSqInCost = 5
            const { width, height } = doorSize
            const baseArea = Number(doorSettings.initWidth) * Number(doorSettings.initHeight)
            let totalArea = height * width
            const additionalArea = totalArea - baseArea
            // console.log('additional area', additionalArea)
            const additionalDoorSizeCost = additionalArea > 0 
                ? Math.floor(((additionalArea / 12) * additionalSqInCost) * 100) / 100
                : 0
            settingsData = {
                ...settingsData,
                doorSize: {
                    width: width,
                    height: height,
                    cost: additionalDoorSizeCost
                }
            }
        break;
        case SET_HEAD_ROOM: 
            const headRoomCost = adminProps.headroom.options.filter( headroom => headroom.option_label === action.headRoom )[0].additional_price
            settingsData = {
                ...settingsData,
                headroom: {
                    cost: Number(headRoomCost),
                    value: headroom.option_label
                }
            }
        break;
        case TOGGLE_INSULATION:
            const insulationCost = store.getState().insulation
                ? Number(adminProps.insulation_group.additional_price_$_if_added)
                : 0
            settingsData = {
                ...settingsData,
                insulation: {
                    cost: insulationCost,
                    enabled: store.getState().insulation
                }
            }
        break;
        case SET_LOCK_PLACEMENT:
        break;
        case SET_PANEL:
            const panelCost = adminProps.panels.filter( panel => panel.panel_type === action.panel )[0].additional_price
            settingsData = {
                ...settingsData,
                panel: {
                    cost: Number(panelCost),
                    value: action.panel
                }
            }
        break;
        case SET_PRESSURE:
            let pressureCost = 0
            let ubarCount = 0
            if ( action.pressure !== 'no-pressure' ) {
                const selectedPressure = adminProps.pressure_group.pressure_options.filter( pressureOption => pressureOption.pressure_range === action.pressure )[0]
                // console.log(selectedPressure)
                const ubarSettings = selectedPressure.ubar_settings ? selectedPressure.ubar_settings : [];
                const height = doorSize.height
                const ubarIndex = ubarSettings.findIndex(it => {
                    return Number(it.min_height) <= height && Number(it.max_height) > height;
                });
                // console.log(ubarIndex)
                ubarCount = ubarIndex > -1 ?  Number(ubarSettings[ubarIndex].ubar_counts) : 0
                const ubarCost = ubarIndex > -1 ? Number(ubarSettings[ubarIndex].per_ubar_costs) : 0
                pressureCost = ubarCount * ubarCost
                // console.log('ubar cost', ubarCount * ubarCost)
            }
            settingsData = {
                ...settingsData,
                uBar: {
                    cost: pressureCost,
                    count: ubarCount,
                    pressure: action.pressure
                }
            }
        break;
        case SET_ROLLER_TYPE:
            const rollerSelected = adminProps.roller_type_group.select_button_options.filter( roller => roller.button_name === action.roller )
            const rollerCost = rollerSelected.length ? Number(rollerSelected[0].additional_price) : 0
            settingsData = {
                ...settingsData,
                roller: {
                    cost: rollerCost,
                    value: action.roller
                }
            }
        break;
        case TOGGLE_VENTS:
            const ventsCost = store.getState().vents
                ? Number(adminProps.vents_group.additional_price_$_if_added)
                : 0
            settingsData = {
                ...settingsData,
                vents: {
                    cost: ventsCost,
                    enabled: store.getState().vents
                }
            }
        break;
        case SET_TRACK_RADIUS:
            const trackRadiusCost = action.trackRadius > Number(adminProps.track_radius_group.if_over_) 
            ? Number(adminProps.track_radius_group.additional_price_$) 
            : 0
            settingsData = {
                ...settingsData,
                trackRadius: {
                    cost: trackRadiusCost,
                    value: action.trackRadius
                }
            }
        break;
        case SET_WINDOW_LAYOUT:
            if ( windowsEnabled ) {
                let windowLayoutMeta = 'Custom'
                if ( windowLayout === 'custom' ) {
                    windowsCost = windows.reduce( ( cost, window ) => {
                        return window.selected 
                        ? cost + Number(adminProps.window_group.additional_price_$_per_window)
                        : cost
                    }, windowsCost )
                } else {
                    const layout = adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === windowLayout )[0]
                    windowsCost = layout.cost_per_window * layout.images.length
                    windowLayoutMeta = layout.name
                }
                settingsData = {
                    ...settingsData,
                    windows: {
                        cost: windowsCost,
                        enabled: windows.length ? true : false,
                        position: [],
                        layout: windowLayoutMeta
                    }
                }
            }
        break;
        case TOGGLE_WINDOW: 
            windowsCost = windows.reduce( ( cost, window, index ) => {
                return window.selected || index === action.index
                ? cost + Number(adminProps.window_group.additional_price_$_per_window)
                : cost
            }, windowsCost )
            const windowsMeta = []
            windows.forEach( (window, index) => {
                if ( !window.selected && index !== action.index ) return
                const rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'];
                const windowColumn = index % windowsGrid.cols
                const windowRow = Math.ceil((index/windowsGrid.cols) + .0001)
                windowsMeta.push(`${rows[windowColumn]}${windowRow}`)
            })
            settingsData = {
                ...settingsData,
                windows: {
                    ...settingsData.windows,
                    cost: windowsCost,
                    position: windowsMeta
                }
            }
        break;
        case TOGGLE_WINDOWS:   
            if ( windowsEnabled ) {
                const windows = store.getState().windows
                if ( windowLayout === 'custom' ) {
                    windowsCost = windows.reduce( ( cost, window ) => {
                        return window.selected 
                        ? cost + Number(adminProps.window_group.additional_price_$_per_window)
                        : cost
                    }, windowsCost )
                } else {
                    const selectedLayout = adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === windowLayout )[0]
                    windowsCost = selectedLayout.cost_per_window * windows.length
                }
            } else {
                windowsCost = 0
            }
            settingsData = {
                ...settingsData,
                windows: {
                    ...settingsData.windows,
                    layout: 'Custom',
                    position: [],
                    cost: windowsCost
                }
            }
        break;
        default:
        break;
    }
    next({
        type: SET_SETTINGS_DATA,
        settingsData
    })
}

export default settingsData
