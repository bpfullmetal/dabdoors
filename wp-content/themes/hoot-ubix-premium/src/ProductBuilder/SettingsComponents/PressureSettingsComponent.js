const { render, useState } = wp.element;
import Switch from "react-switch";


const PressureSettingsComponent = ({onChange, hasPressure, availablePressureIndex, properties, onSelectPressure, selectedUbarSetting}) => {
  const [pressureIndex, setPressureIndex] = useState(0);
  return (
    <div className="product-setting-item-component pressure-settings">
      <div className="d-flex justify-content-between align-items-center">
        <label>
          { properties.label }
        </label>
        <Switch onChange={(e) => {onChange(e)}} checked={hasPressure} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>
      <div className="d-flex">
        <select value={availablePressureIndex} className={`mt-1 ${hasPressure ? '' : 'disabled'}`} onChange={(e) => {
          setPressureIndex(e.target.value);
          onSelectPressure(e.target.value);
        }}>
          {
            properties.pressure_options.map((it, index) => {
              return (<option key={index} value={index} disabled={availablePressureIndex==index?false:true}>{it.pressure_range}</option>);
            })
          }
        </select>
      </div>
      {selectedUbarSetting.ubar_counts > 0 && <div className="additional_price_alert">
          Ubar Counts: {selectedUbarSetting.ubar_counts}, &nbsp; &nbsp;Additioanl Price: +${selectedUbarSetting.ubar_counts * selectedUbarSetting.ubar_costs }
      </div>}
    </div>
  );
}

export default PressureSettingsComponent;