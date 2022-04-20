const { render, useState } = wp.element;

const HeadroomSettingComponent = ({ additional_price, headroomProperty, onSelectHeadroomType }) => {
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>
        { headroomProperty.label }
        { additional_price > 0 && <span className="additional_price_alert">{`+$${additional_price}`}</span> }
      </label>
      <select className="button-wrapper" onChange={(e) => {
          onSelectHeadroomType(e.target.value);
        }}>
        {
          headroomProperty.options.map((it, index) => {
            return (
              <option key={index} value={index} >{it.option_label} (+${it.additional_price})</option>
            );
          })
        }
      </select>
    </div>

  );
}

export default HeadroomSettingComponent;