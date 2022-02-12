const { render, useState } = wp.element;
import Switch from "react-switch";

const InsulationSettingComponent = ({properties, enableInsulation}) => {
  const [insulation, setInsulation] = useState(false);
  return (
    <div className="product-setting-item-component insulation-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>{ properties.label }</label>
        <Switch
          onChange={(e) => {
            setInsulation(e);
            enableInsulation(e);
          }}
          checked={insulation}
          width={40}
          height={20}
          onColor={'#1396E7'}
          checkedIcon={''}
          uncheckedIcon={''}
        />
      </div>
    </div>
  );
}

export default InsulationSettingComponent;