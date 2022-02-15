const { render, useState } = wp.element;

const LockPlacementSettingComponent = ({ properties, setAdditionalPriceForLock }) => {
  const [option, setOption] = useState(properties.inside.default === true ? 1 : (properties.outside.default == true ? 2 : -1));

  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>{ properties.label }</label>
      <div className="d-flex button-wrapper align-items-center">
        <button
          type="button"
          className={`button ${option == 1 ? 'active' : ''}`}
          onClick={(e) => {setOption(1); setAdditionalPriceForLock(1, Number(properties.inside.additional_price_$))}}
        >
          Inside
        </button>
        <button
          type="button"
          className={`button ${option == 2 ? 'active' : ''}`}
          onClick={(e) => {setOption(2); setAdditionalPriceForLock(2, Number(properties.outside.additional_price_$))}}
        >
          Outside
        </button>
      </div>
    </div>
  );
}

export default LockPlacementSettingComponent;