const { render, useState } = wp.element;

const PremiumColorsSettingComponent = ({ properties, colorIndex, enablePrice }) => {
  let colors = properties.select_button_options.map((option, index) => {
    return option.select_color;
  });

  // const [option, setOption] = useState(colorIndex);

  return (
    <div className="product-setting-item-component colors-settings">
      <div className="d-flex justify-content-beteen align-items-center">
        <label>{ properties.label } &nbsp;</label>
        { properties.additional_price && colorIndex > -1 && <span className="addPrice">+${properties.additional_price}</span>}
      </div>
      <div className="d-flex align-items-center colors-wrapper">
        {
          colors.map((e, index) => {
            return (
              <div className="color-item" style={{border: `2px solid ${colorIndex === index ? e : '#FFF'}`}}>
                <button type="button" className="btn-color button" style={{ backgroundColor: `${e}` }} onClick={(evt) => { /*setOption(index);*/ enablePrice(e, true, index)}}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PremiumColorsSettingComponent;