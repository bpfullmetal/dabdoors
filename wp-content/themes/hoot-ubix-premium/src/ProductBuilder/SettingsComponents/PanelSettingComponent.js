const { render, useState } = wp.element;

const PanelSettingComponent = ({ properties, setAdditionalPriceForPanelGroup }) => {
  const [option, setOption] = useState(properties.raised.default == true ? 1 : (properties.flush.default == true ? 2 : -1));
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>{ properties.label }</label>
      <div className="d-flex button-wrapper align-items-center">
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
      </div>
    </div>
  );
}

export default PanelSettingComponent;