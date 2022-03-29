
import { useState, useEffect } from 'react';

import Switch from "react-switch";

const WindowsSettingComponent = ({ additional_price, properties, hasWindow, onChange, windowRowsCols, onSelectWindowLayout }) => {
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
        <select name="window-layout" onChange={(e) => {onSelectWindowLayout(e.target.value)}}>
          <option value={-1}>None</option>
          <option value={0} disabled={cols!==8 && cols!==7 && cols!==5}>Williamsburg 405</option>
          <option value={1} disabled={cols!==4 && cols !== 8}>Williamsburg 305</option>
          <option value={2} disabled={cols!==2 && cols!==4 && cols !== 8}>Winston 392</option>
          <option value={3} disabled>Stockton 397</option>
          <option value={4} disabled>Sherwood 306</option>
        </select>
      </div>
    </div>
  );
}

export default WindowsSettingComponent;