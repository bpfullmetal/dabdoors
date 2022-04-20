const { render, useState } = wp.element;

const PanelSettingComponent = ({ additional_price, onSelectPanelType, panels }) => {
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>
        Panel Type
        { additional_price > 0 && <span className="additional_price_alert">{`+$${additional_price}`}</span> }
      </label>
      <select className="button-wrapper" onChange={(e) => {
          onSelectPanelType(e.target.value);
        }}>
        {
          panels.map((it, index) => {
            return (
              <option key={index} value={index} selected={it.default===true}>{it.panel_type} (+${it.additional_price})</option>
            );
          })
        }
      </select>
    </div>

  );
}

export default PanelSettingComponent;