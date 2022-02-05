const { render, useState } = wp.element;
import Switch from "react-switch";

const VentsSettingComponent = ({hasVents, onChange}) => {
  // const [vents, setVents] = useState(false);
  return (
    <div className="product-setting-item-component vents-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>Vents</label>
        <Switch onChange={(e) => {onChange(e)}} checked={hasVents} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
    </div>
  );
}

export default VentsSettingComponent;