const { render, useState } = wp.element;


const PressureSettingsComponent = ({properties, onSelectPressure, selectedUbarSetting}) => {
  const [pressureIndex, setPressureIndex] = useState(0);
  return (
    <div className="product-setting-item-component pressure-settings">
      <label>
        { properties.label }
        {/* { additional_price > 0 && <span className='additional_price_alert'>{`+$${additional_price}`}</span> } */}
      </label>
      <div className="d-flex">
        <select value={pressureIndex} className="mt-1" onChange={(e) => {
          setPressureIndex(e.target.value);
          onSelectPressure(e.target.value);
        }}>
          {
            properties.pressure_options.map((it, index) => {
              return (<option key={index} value={index}>{it.pressure_range}</option>);
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