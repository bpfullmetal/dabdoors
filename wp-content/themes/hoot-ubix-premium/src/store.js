import { configureStore } from '@reduxjs/toolkit'
import { windows, windowsEnabled } from './ProductBuilder/reducers/windows'
import { windowsGrid } from './ProductBuilder/reducers/windows-grid'
import { windowLayout } from './ProductBuilder/reducers/window-layout'
import { adminProps } from './ProductBuilder/reducers/admin-props'
import { doorSize } from './ProductBuilder/reducers/door-size'
import { pressure } from './ProductBuilder/reducers/pressure'
import middleware from './ProductBuilder/middleware/index';

export const store = configureStore({
  reducer: {
    adminProps,
    doorSize,
    pressure,
    windows,
    windowsEnabled,
    windowsGrid,
    windowLayout
  },
  enhancers: [middleware]
})