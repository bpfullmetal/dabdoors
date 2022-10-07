import { SET_WINDOW_LAYOUT } from '../actions/window-layout'
import { SET_WINDOWS } from '../actions/windows'
import { SET_WINDOWS_GRID } from '../actions/windows-grid'

const windowLayout = store => next => action => {
  next(action)
  let windows = []
  const windowsGrid = store.getState().windowsGrid
  const windowCount = windowsGrid.cols * windowsGrid.rows
  switch (action.type) {
    case SET_WINDOW_LAYOUT:
        if ( action.layout === 'custom' ) {
            for ( let i = 0; i < windowCount; i++ ) {
                windows.push({ image: null, selected: false })
            }
        } else {
            const adminProps = store.getState().adminProps
            const windowImages = adminProps.window_layouts[`columns-${windowsGrid.cols}`].filter( layout => layout.slug === action.layout )[0].images
            windows = windowImages.map( image =>  { 
                return { image: image.sizes.medium, selected: false } 
            })
            console.log('WINDOWS', windows)
        }
        if ( windows ) {
          next({
            type: SET_WINDOWS,
            windows
          })
        }
    break;
    case SET_WINDOWS_GRID:
        for ( let i = 0; i < windowCount; i++ ) {
            windows.push({ selected: false, image: null })
        }
        next({
            type: SET_WINDOWS,
            windows
        })
    break;
    default:
    break
  }
}

export default windowLayout
