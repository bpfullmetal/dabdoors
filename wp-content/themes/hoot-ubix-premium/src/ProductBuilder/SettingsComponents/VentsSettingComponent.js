const { render, useState } = wp.element;
import Switch from "react-switch";

const VentsSettingComponent = ({additional_price, properties, hasVents, onChange}) => {
  return (
    <div className="product-setting-item-component vents-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>
          { properties.label }
          { hasVents && additional_price > 0 && <span className="additional_price_alert">{`+$${additional_price}`}</span> }
        </label>
        <Switch onChange={(e) => {onChange(e)}} checked={hasVents} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
    </div>
  );
}

export default VentsSettingComponent;