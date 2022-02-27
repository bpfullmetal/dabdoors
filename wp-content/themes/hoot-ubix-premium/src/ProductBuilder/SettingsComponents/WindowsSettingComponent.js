const { render, useState } = wp.element;
import Switch from "react-switch";

const WindowsSettingComponent = ({ additional_price, properties, hasWindow, onChange }) => {
  return (
    <div className="product-setting-item-component window-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          { properties?.label }
          { hasWindow && additional_price > 0 && (<span className="additional_price_alert">+${additional_price}</span>) }
        </label>
        <Switch onChange={(e) => {onChange(e)}} checked={hasWindow} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
      <select className="mt-1" style={{marginTop:10}}>
        <option value={0}>405 Williamsburg</option>
        <option value={1}>305 Williamsburg</option>
        <option value={2}>306 Sherwood</option>
        <option value={3}>393 Cathedral</option>
        <option value={4}>397 Stockton</option>
        <option value={5}>Custom</option>
      </select>
      <span className="description">
        Click on a window space to add or delete windows.
      </span>
    </div>
  );
}

export default WindowsSettingComponent;