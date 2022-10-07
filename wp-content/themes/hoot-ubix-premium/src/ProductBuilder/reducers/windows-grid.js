import { SET_WINDOWS_GRID } from '../actions/windows-grid'

export const windowsGrid = (state = { rows: 4, cols: 4 }, action) => {
  switch(action.type) {
    case SET_WINDOWS_GRID:
        return action.grid
    default:
      return state
  }
}