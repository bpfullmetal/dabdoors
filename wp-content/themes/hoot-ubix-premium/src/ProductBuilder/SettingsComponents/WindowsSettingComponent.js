const { render, useState } = wp.element;
import Switch from "react-switch";

const WindowsSettingComponent = ({ additional_price, properties, hasWindow, onChange }) => {
  console.log(hasWindow ? additional_price : 0);
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

    </div>
  );
}

export default WindowsSettingComponent;