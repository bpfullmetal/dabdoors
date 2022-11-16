import { SET_ADDITIONAL_COST } from '../actions/additional-cost'
import { SET_COLOR } from '../actions/color'
import { SET_DOOR_SIZE } from '../actions/door-size'
import { SET_HEAD_ROOM } from '../actions/head-room'
import { SET_LOCK_PLACEMENT } from '../actions/lock'
import { SET_PANEL } from '../actions/panel'
import { SET_PRESSURE } from '../actions/pressure'
import { TOGGLE_VENTS } from '../actions/vents'
import { SET_TRACK_RADIUS } from '../actions/track-radius'
import { SET_WINDOWS, TOGGLE_WINDOW, TOGGLE_WINDOWS } from '../actions/windows'

const additionalCost = store => next => action => {
    next(action)
    let additionalCost = store.getState().additionalCost
    const adminProps = store.getState().adminProps
    const windowsEnabled = store.getState().windowsEnabled
    const windowsGrid = store.getState().windowsGrid
    const windows = store.getState().windows
    const windowLayout = store.getState().windowLayout
    const doorSize = store.getState().doorSize
    let windowsCost = 0

    switch (action.type) {
        case SET_COLOR:
            let colorCost = 0 
            console.log('COLOR', action.color)
            if ( 'premium_colors_group' in adminProps ) {
                if ( adminProps.premium_colors_group.select_button_options.filter( color => color.sku_code === action.color.sku ).length ) {
                    colorCost = adminProps.premium_colors_group.additional_price
                }
            }
            additionalCost = {
                ...additionalCost,
                color: Number(colorCost)
            }
        break;
        case SET_DOOR_SIZE:
            const additionalSqInCost = 5
            const { width, height } = doorSize
            const baseArea = Number(doorSettings.initWidth) * Number(doorSettings.initHeight)
            let totalArea = height * width
            const additionalArea = totalArea - baseArea
            console.log('additional area', additionalArea)
            additionalCost = {
                ...additionalCost,
                doorSize: additionalArea > 0 
                    ? Math.floor(((additionalArea / 12) * additionalSqInCost) * 100) / 100
                    : 0
            }
        break;
        case SET_HEAD_ROOM: 
            const headRoomCost = adminProps.headroom.options.filter( headroom => headroom.option_label === action.headRoom )[0].additional_price
            additionalCost = {
                ...additionalCost,
                headroom: Number(headRoomCost)
            }
        break;
        case SET_LOCK_PLACEMENT:
        break;
        case SET_PANEL:
            const panelCost = adminProps.panels.filter( panel => panel.panel_type === action.panel )[0].additional_price
            additionalCost = {
                ...additionalCost,
                panel: Number(panelCost)
            }
        break;
        case SET_PRESSURE:
            let pressureCost = 0
            if ( action.pressure !== 'no-pressure' ) {
                const selectedPressure = adminProps.pressure_group.pressure_options.filter( pressureOption => pressureOption.pressure_range === action.pressure )[0]
                console.log(selectedPressure)
                const ubarSettings = selectedPressure.ubar_settings ? selectedPressure.ubar_settings : [];
                const height = doorSize.height
                const ubarIndex = ubarSettings.findIndex(it => {
                    return Number(it.min_height) <= height && Number(it.max_height) > height;
                });
                console.log(ubarIndex)
                const ubarCount = ubarIndex > -1 ?  Number(ubarSettings[ubarIndex].ubar_counts) : 0
                const ubarCost = ubarIndex > -1 ? Number(ubarSettings[ubarIndex].per_ubar_costs) : 0
                pressureCost = ubarCount * ubarCost
                console.log('ubar cost', ubarCount * ubarCost)
            }
            additionalCost = {
                ...additionalCost,
                uBar: pressureCost
            }
        break;
        case TOGGLE_VENTS:
            const ventsCost = store.getState().vents
                ? adminProps.vents_group.additional_price_$_if_added
                : 0
            additionalCost = {
                ...additionalCost,
                vents: Number(ventsCost)
            }
        break;
        case SET_TRACK_RADIUS:
            additionalCost = {
                ...additionalCost,
                trackRadius: action.trackRadius > Number(adminProps.track_radius_group.if_over_) 
                ? Number(adminProps.track_radius_group.additional_price_$) 
                : 0
            }
        break;
        case SET_WINDOWS:
            if ( windowsEnabled ) {
                if ( windowLayout === 'custom' ) {
                    windowsCost = action.windows.reduce( ( cost, window ) => {
                        return window.selected 
                        ? cost + Number(adminProps.window_group.additional_price_$_per_window)
                        : cost
                    }, windowsCost )
                } else {
                    const layout = adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === windowLayout )[0]
                    windowsCost = layout.cost_per_window * action.windows.length
                }
                additionalCost = {
                    ...additionalCost,
                    windows: windowsCost
                }
            }
        break;
        case TOGGLE_WINDOW: 
            const windows = store.getState().windows
            windowsCost = windows.reduce( ( cost, window ) => {
                return window.selected 
                ? cost + Number(adminProps.window_group.additional_price_$_per_window)
                : cost
            }, windowsCost )
            additionalCost = {
                ...additionalCost,
                windows: windowsCost
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
            additionalCost = {
                ...additionalCost,
                windows: windowsCost
            }
        break;
        default:
        break;
    }
    console.log('add cost', additionalCost)
    next({
        type: SET_ADDITIONAL_COST,
        additionalCost
    })
}

export default additionalCost
