const { render, useState } = wp.element;

const ColorsSettingComponent = ({properties, colorIndex, onChange}) => {
  let colors = properties.select_button_options.map((option, index) => {
    return { color: option.select_color, sku: option.sku_code }
  });
  return (
    <div className="product-setting-item-component colors-settings">
      <label>{ properties.label }</label>
      <div className="d-flex align-items-center colors-wrapper">
        {
          colors.map((e, index) => {
            return (
              <div className="color-item" style={{border: `2px solid ${colorIndex == index ? e.color : '#FFF'}`}}>
                <button type="button" className="btn-color button" style={{ backgroundColor: `${e.color}` }} onClick={(evt) => onChange(e, index)}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ColorsSettingComponent;