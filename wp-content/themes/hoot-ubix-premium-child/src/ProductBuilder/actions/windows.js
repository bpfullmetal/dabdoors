export const SET_WINDOWS = 'SET_WINDOWS'
export const TOGGLE_WINDOWS = 'TOGGLE_WINDOWS'
export const TOGGLE_WINDOW = 'TOGGLE_WINDOW'

export const toggleWindow = index => {
  return {
    type: TOGGLE_WINDOW,
    index
  }
}

export const toggleWindows = () => {
  return {
    type: TOGGLE_WINDOWS
  }
}
