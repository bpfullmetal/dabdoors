
import { useState, useEffect } from 'react';

import Switch from "react-switch";
import { getAvailableOptions } from '../../helper';

const WindowsSettingComponent = ({ additional_price, properties, customWindowProperties, hasWindow, onChange, windowRowsCols, onSelectWindowLayout }) => {
  const [value, setValue] = useState(-1);
  const [cols, setCols] = useState(windowRowsCols?windowRowsCols.cols:4);
  const [availableOptions, setAvaiableOptions] = useState([]);
  useEffect(() => {
    setCols(windowRowsCols.cols);
    let cols = windowRowsCols.cols;
    // console.log(customWindowProperties);
    setAvaiableOptions(getAvailableOptions(cols, customWindowProperties));
    if (value == 0) {
      if (cols !== 8 && cols !== 7 && cols !== 5) {
        setValue(-1);
        onSelectWindowLayout(-1);
      }
    } else if (value > 0) {
      if (cols !== 8 && cols !== 4) {
        setValue(-1);
        onSelectWindowLayout(-1);
      }
    }
  }, [windowRowsCols, customWindowProperties]);
  useEffect(() => {
    console.log(availableOptions);
  }, [availableOptions]);
  return (
    <div className="product-setting-item-component window-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          { properties?.label }
          { hasWindow && additional_price > 0 && (<span className="additional_price_alert">+${additional_price}</span>) }
        </label>
        <Switch onChange={(e) => {onChange(e)}} checked={hasWindow} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
      <span className="description">
        Click on a window space to add or delete windows.
      </span>
      <div className={`window-layout-settings mt-1 ${hasWindow ? '' : 'disabled'}`}>
        <select name="window-layout" value={value} onChange={(e) => {setValue(e.target.value); onSelectWindowLayout(e.target.value)}}>
          <option value={-1}>None</option>
          <option value={0} disabled={availableOptions.indexOf(0)}>Williamsburg 405</option>
          <option value={1} disabled={availableOptions.indexOf(1)}>Williamsburg 305</option>
          <option value={2} disabled={availableOptions.indexOf(2)}>Winston 392</option>
          <option value={3} disabled={availableOptions.indexOf(3)}>Stockton 397</option>
          <option value={4} disabled={availableOptions.indexOf(4)}>Sherwood 306</option>
        </select>
      </div>
    </div>
  );
}

export default WindowsSettingComponent;