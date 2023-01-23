import { SET_WINDOW_LAYOUT } from '../actions/window-layout'
import { SET_WINDOWS, TOGGLE_WINDOW, TOGGLE_WINDOWS } from '../actions/windows'
import { SET_SETTINGS_DATA } from '../actions/settings-data'
import { SET_WINDOWS_GRID } from '../actions/windows-grid'

const windowLayout = store => next => action => {
  next(action)
  let windows = []
  const windowsGrid = store.getState().windowsGrid
  const windowCount = windowsGrid.cols * windowsGrid.rows
  switch (action.type) {
    case TOGGLE_WINDOW:
      const toggledWindows = store.getState().windows.map( (window, w) => {
        return w === action.index 
        ? { ...window, selected: !window.selected }
        : window
      })
      next({
        type: SET_WINDOWS,
        windows: toggledWindows
      })
    break;
    case TOGGLE_WINDOWS:
      if ( !store.getState().windowsEnabled ) {
        for ( let i = 0; i < windowCount; i++ ) {
          windows.push({ image: null, selected: false })
        }
        next({
          type: SET_WINDOW_LAYOUT,
          layout: 'custom'
        })
        next({
          type: SET_WINDOWS,
          windows
        })
      }
    break;
    case SET_WINDOW_LAYOUT:
      // console.log('layout w', action.layout)
        if ( action.layout === 'custom' ) {
            for ( let i = 0; i < windowCount; i++ ) {
                windows.push({ image: null, selected: false })
            }
        } else {
            const windowImages = adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === action.layout )[0].images
            windows = windowImages.map( image =>  { 
                return { image: image.sizes.medium, selected: false } 
            })
            // console.log('WINDOWS', windows)
        }
        if ( windows ) {
          next({
            type: SET_WINDOWS,
            windows
          })
        }
    break;
    case SET_WINDOWS_GRID:
        const matchedLayouts = `columns-${windowsGrid.cols}` in adminProps.window_layouts 
          ? adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === store.getState().windowLayout )
          : []
        if ( !matchedLayouts.length ) {
          for ( let i = 0; i < windowCount; i++ ) {
            windows.push({ selected: false, image: null })
          }
          next({
            type: SET_WINDOWS,
            windows
          })
          next({
            type: SET_WINDOW_LAYOUT,
            layout: 'custom'
          })
        }
    break;
    default:
    break
  }
}

export default windowLayout
