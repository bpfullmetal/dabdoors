const { render, useState } = wp.element;
import Switch from "react-switch";

const VentsSettingComponent = () => {
  const [vents, setVents] = useState(false);
  return (
    <div className="product-setting-item-component vents-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>Vents</label>
        <Switch onChange={(e) => {setVents(e)}} checked={vents} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
    </div>
  );
}

export default VentsSettingComponent;