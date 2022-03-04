const { render, useState, useEffect } = wp.element;

const PressureSettingsComponent = ({availablePressures, properties, onSelectPressure, selectedUbarSetting}) => {
  const [pressureIndex, setPressureIndex] = useState();
  useEffect(() => {
    if (availablePressures.length > 0) {
      setPressureIndex(availablePressures[0]);
      onSelectPressure(availablePressures[0]);
    } else {
      setPressureIndex(-1);
      onSelectPressure(-1);
    }
  }, [availablePressures])
  return (
    <div className="product-setting-item-component pressure-settings">
      <div className="d-flex justify-content-start align-items-center">
        <label>
          { properties.label }
        </label>
      </div>
      <div className="d-flex">
        <select value={pressureIndex} className="mt-1" onChange={(e) => {
          setPressureIndex(e.target.value);
          onSelectPressure(e.target.value);
        }}>
          {
            properties.pressure_options.map((it, index) => {
              return (<option key={index} value={index} disabled={availablePressures.indexOf(index)>-1?false:true}>{it.pressure_range}</option>);
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