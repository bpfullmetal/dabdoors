const { render, useState } = wp.element;
import Switch from "react-switch";

const ColorsSettingComponent = () => {
  let colors = ['#ADA487', '#D1C394', '#9A8333'];
  const [option, setOption] = useState(0);
  return (
    <div className="product-setting-item-component colors-settings">
      <label>Colors</label>
      <div className="d-flex align-items-center colors-wrapper">
        {
          colors.map((e, index) => {
            console.log('index=', index);
            return (
              <div className="color-item" style={{border: `2px solid ${option == index ? e : '#FFF'}`}}>
                <button type="button" className="btn-color button" style={{ backgroundColor: `${e}` }} onClick={(e) => setOption(index)}></button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ColorsSettingComponent;