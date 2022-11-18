
import { useSelector, useDispatch } from 'react-redux'
import { setWindowLayout } from '../actions/window-layout'
import { toggleWindows } from '../actions/windows'
import Switch from "react-switch";

const WindowsSettingComponent = () => {
  const dispatch = useDispatch()
  const windowLayout = useSelector( state => state.windowLayout)
  const windowsEnabled = useSelector( state => state.windowsEnabled)
  const windowsGrid = useSelector( state => state.windowsGrid)
  const settingsData = useSelector( state => state.settingsData)
  
  const windowLayouts = adminProps.window_layouts
  return (
    <div className="product-setting-item-component window-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          Windows
          {
            settingsData.windows.cost > 0 && <span className="additional_price_alert">+${settingsData.windows.cost}</span> 
          }
        </label>
        <Switch onChange={ () => dispatch(toggleWindows()) } checked={windowsEnabled} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
      <span className="description">
        Click on a window space to add or delete windows.
      </span>
      <div className={`window-layout-settings mt-1 ${windowsEnabled ? '' : 'disabled'}`}>
        <select name="window-layout" value={windowLayout} onChange={ e => dispatch(setWindowLayout(e.target.value)) }>
          <option value={'custom'}>Custom</option>
          {
            `columns-${windowsGrid.cols}` in windowLayouts && 
            windowLayouts[`columns-${windowsGrid.cols}`].map( layout => {
              return <option value={layout.slug}>{ layout.name }</option>
            })
          }
        </select>
      </div>
    </div>
  );
}

export default WindowsSettingComponent;