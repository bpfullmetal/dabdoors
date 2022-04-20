const { render, useState } = wp.element;

const PanelSettingComponent = ({ additional_price, properties, setAdditionalPriceForPanelGroup, panels }) => {
  const [option, setOption] = useState(properties.raised.default == true ? 1 : (properties.flush.default == true ? 2 : -1));
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>
        { properties.label }
        { additional_price > 0 && <span className="additional_price_alert">{`+$${additional_price}`}</span> }
      </label>
      {/* <div className="d-flex button-wrapper align-items-center">
        <button
          type="button"
          className={`button ${option == 1 ? 'active' : ''}`}
          onClick={(e) => {
            setOption(1);
            setAdditionalPriceForPanelGroup(1, Number(properties.raised.additional_price_$))
          }}
        > Raised </button>
        <button
          type="button"
          className={`button ${option == 2 ? 'active' : ''}`}
          onClick={(e) => {
            setOption(2);
            setAdditionalPriceForPanelGroup(2, Number(properties.flush.additional_price_$))
          }}
        > Flush </button>
      </div> */}
      <select className="button-wrapper" onChange={(e) => {
          // setPressureIndex(e.target.value);
          onSelectPanelType(e.target.value);
        }}>
        {
          panels.map((it, index) => {
            return (
              <option key={index} value={index}>{it.panel_type} (+${it.additional_price})</option>
            );
          })
        }
      </select>
    </div>

  );
}

export default PanelSettingComponent;