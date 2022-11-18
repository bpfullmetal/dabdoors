import logger from './logger'
import windowLayout from './window-layout'
import settingsData from './settings-data'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  // logger,
  windowLayout,
  settingsData
)
