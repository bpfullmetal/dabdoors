
import { useState, useEffect } from 'react';

import Switch from "react-switch";

const WindowsSettingComponent = ({ additional_price, properties, hasWindow, onChange, windowRowsCols }) => {
  console.log(windowRowsCols);
  const [cols, setCols] = useState(windowRowsCols?windowRowsCols.cols:4);
  useEffect(() => {
    setCols(windowRowsCols.cols);
  }, [windowRowsCols])
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
        <select>
          <option>None</option>
          <option disabled={cols!==8}>405 Williamsburg</option>
          <option disabled={cols!==4 && cols !== 8}>305 Williamsburg</option>
          <option disabled={cols!==2 && cols!==4 && cols !== 8}>306 Sherwood</option>
          <option disabled>306 Sherwood</option>
          <option disabled>306 Sherwood</option>
        </select>
      </div>
    </div>
  );
}

export default WindowsSettingComponent;