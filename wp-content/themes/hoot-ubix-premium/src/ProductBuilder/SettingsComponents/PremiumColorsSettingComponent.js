const { render, useState } = wp.element;
import Switch from "react-switch";

const PremiumColorsSettingComponent = () => {
  let colors = ['#E3B718', '#B85C28', '#4F4C45'];
  const [option, setOption] = useState(0);
  return (
    <div className="product-setting-item-component colors-settings">
      <div className="d-flex justify-content-beteen align-items-center">
        <label>Premium Colors</label>
        <span className="addPrice">+$50</span>
      </div>
      <div className="d-flex align-items-center colors-wrapper">
        {
          colors.map((e, index) => {
            return (
              <div className="color-item" style={{border: `2px solid ${option === index ? e : '#FFF'}`}}>
                <button type="button" className="btn-color button" style={{ backgroundColor: `${e}` }} onClick={(e) => setOption(index)}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PremiumColorsSettingComponent;