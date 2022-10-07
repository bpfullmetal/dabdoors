
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setWindowLayout } from '../actions/window-layout'
import { toggleWindows } from '../actions/windows'
import Switch from "react-switch";
import { getAvailableOptions, getPriceForCustomWindow, getPack } from '../../helper';

const WindowsSettingComponent = ({
    additional_price,
    properties,
    customWindowProperties,
    hasWindow,
    onChange,
    onSelectWindowLayout,
    onChangePriceByCustomWindow,
    onChangePack,
    windowLayouts
  }) => {
  const dispatch = useDispatch()
  const windows = useSelector((state) => state.windows)
  const windowLayout = useSelector((state) => state.windowsLayout)
  const windowsEnabled = useSelector((state) => state.windowsEnabled)
  const windowsGrid = useSelector((state) => state.windowsGrid)
  
  const [value, setValue] = useState(-1);
  const [cols, setCols] = useState(windowsGrid?windowsGrid.cols:4);
  const [availableOptions, setAvaiableOptions] = useState([]);

  useEffect(() => {
    setCols(windowsGrid.cols);
    let cols = windowsGrid.cols;
    setAvaiableOptions(getAvailableOptions(cols, customWindowProperties));
    console.log(getAvailableOptions(cols, customWindowProperties))
    setValue(-1);
    onSelectWindowLayout(-1);
  }, [windowsGrid, customWindowProperties]);
  useEffect(() => {
    if (value > -1) {
      let pack = getPack(value, windowsGrid.cols, customWindowProperties);
      onChangePack(pack);
      let customWindowPrice = getPriceForCustomWindow(value, pack, customWindowProperties, windowsGrid.cols);
      onChangePriceByCustomWindow(customWindowPrice);
    } else {
      onChangePriceByCustomWindow(0);
    }
  }, [windowsGrid, customWindowProperties, value])
  
  const handleSelectLayout = layout => {
    if ( layout === 'custom' ) {
      
    } else {
      const filteredLayouts = windowLayouts[`columns-${windowsGrid.cols}`].filter( l => l.slug === layout )
      dispatch(setWindowLayout(layout))
    }
  }

  return (
    <div className="product-setting-item-component window-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          { properties?.label }
          { hasWindow && additional_price > 0 && (<span className="additional_price_alert">+${additional_price}</span>) }
        </label>
        <Switch onChange={ () => dispatch(toggleWindows()) } checked={windowsEnabled} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
      <span className="description">
        Click on a window space to add or delete windows.
      </span>
      <div className={`window-layout-settings mt-1 ${hasWindow ? '' : 'disabled'}`}>
        <select name="window-layout" value={windowLayout} onChange={(e) => { handleSelectLayout(e.target.value) }}>
          <option value={'custom'}>Custom</option>
          {
            windowLayouts[`columns-${windowsGrid.cols}`] !== undefined && 
            windowLayouts[`columns-${windowsGrid.cols}`].map( layout => {
              console.log('images', layout.images)
              return <option value={layout.slug}>{ layout.name }</option>
            })
          }
        </select>
      </div>
    </div>
  );
}

export default WindowsSettingComponent;