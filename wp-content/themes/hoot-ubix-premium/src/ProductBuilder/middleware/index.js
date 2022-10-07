import logger from './logger'
import windowLayout from './window-layout'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  logger,
  windowLayout
)
