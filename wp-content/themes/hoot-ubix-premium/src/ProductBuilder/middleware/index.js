import logger from './logger'
import windowLayout from './window-layout'
import additionalCost from './additional-cost'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  // logger,
  windowLayout,
  additionalCost
)
