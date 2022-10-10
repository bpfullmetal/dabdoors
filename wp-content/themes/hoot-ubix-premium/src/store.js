import { configureStore } from '@reduxjs/toolkit'
import { additionalCost } from './ProductBuilder/reducers/additional-cost'
import { adminProps } from './ProductBuilder/reducers/admin-props'
import { color } from './ProductBuilder/reducers/color'
import { doorSize } from './ProductBuilder/reducers/door-size'
import { headRoom } from './ProductBuilder/reducers/head-room'
import { lock } from './ProductBuilder/reducers/lock'
import { panel } from './ProductBuilder/reducers/panel'
import { pressure } from './ProductBuilder/reducers/pressure'
import { trackRadius } from './ProductBuilder/reducers/track-radius'
import { windows, windowsEnabled } from './ProductBuilder/reducers/windows'
import { windowsGrid } from './ProductBuilder/reducers/windows-grid'
import { windowLayout } from './ProductBuilder/reducers/window-layout'
import { vents } from './ProductBuilder/reducers/vents'
import middleware from './ProductBuilder/middleware/index';

export const store = configureStore({
  reducer: {
    additionalCost,
    adminProps,
    color,
    doorSize,
    lock,
    headRoom,
    panel,
    pressure,
    trackRadius,
    windows,
    windowsEnabled,
    windowsGrid,
    windowLayout,
    vents
  },
  enhancers: [middleware]
})