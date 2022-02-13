const { render, useState } = wp.element;

const ColorsSettingComponent = ({properties, colorIndex, onChange}) => {
  let colors = properties.select_button_options.map((option, index) => {
    return option.select_color;
  });
  return (
    <div className="product-setting-item-component colors-settings">
      <label>{ properties.label }</label>
      <div className="d-flex align-items-center colors-wrapper">
        {
          colors.map((e, index) => {
            return (
              <div className="color-item" style={{border: `2px solid ${colorIndex == index ? e : '#FFF'}`}}>
                <button type="button" className="btn-color button" style={{ backgroundColor: `${e}` }} onClick={(e) => onChange(index)}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ColorsSettingComponent;