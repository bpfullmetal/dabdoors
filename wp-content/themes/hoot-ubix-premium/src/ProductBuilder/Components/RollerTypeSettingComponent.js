const { render, useState } = wp.element;
import Switch from "react-switch";

const RollerTypeSettingComponent = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>Roller Type</label>
      <div className="d-flex button-wrapper align-items-center justify-content-between">
        <label class="radio-container">2” Steel Nylon
          <input type="radio" checked="checked" name="radio" value="1"/>
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">3” Steel Nylon
          <input type="radio" checked="checked" name="radio" value="1"/>
          <span class="checkmark"></span>
        </label>

      </div>
    </div>
  );
}

export default RollerTypeSettingComponent;