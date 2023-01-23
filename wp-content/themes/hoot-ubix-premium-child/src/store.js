import { configureStore } from '@reduxjs/toolkit'
import { color } from './ProductBuilder/reducers/color'
import { doorSize } from './ProductBuilder/reducers/door-size'
import { headRoom } from './ProductBuilder/reducers/head-room'
import { insulation } from './ProductBuilder/reducers/insulation'
import { lock } from './ProductBuilder/reducers/lock'
import { metadata } from './ProductBuilder/reducers/metadata'
import { panel } from './ProductBuilder/reducers/panel'
import { pressure } from './ProductBuilder/reducers/pressure'
import { roller } from './ProductBuilder/reducers/roller'
import { settingsData } from './ProductBuilder/reducers/settings-data'
import { trackRadius } from './ProductBuilder/reducers/track-radius'
import { windows, windowsEnabled } from './ProductBuilder/reducers/windows'
import { windowsGrid } from './ProductBuilder/reducers/windows-grid'
import { windowLayout } from './ProductBuilder/reducers/window-layout'
import { vents } from './ProductBuilder/reducers/vents'
import middleware from './ProductBuilder/middleware/index';

export const store = configureStore({
  reducer: { 
    color,
    doorSize,
    headRoom,
    insulation,
    lock,
    metadata,
    panel,
    pressure,
    roller,
    settingsData,
    trackRadius,
    vents,
    windows,
    windowsEnabled,
    windowsGrid,
    windowLayout
  },
  enhancers: [middleware]
})