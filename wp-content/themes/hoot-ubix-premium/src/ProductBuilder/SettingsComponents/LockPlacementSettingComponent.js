const { render, useState } = wp.element;
import Switch from "react-switch";

const LockPlacementSettingComponent = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="product-setting-item-component lock-placement-settings">
      <label>Lock Placement</label>
      <div className="d-flex button-wrapper align-items-center">
        <button type="button" className={`button ${option == 1 ? 'active' : ''}`} onClick={(e) => {setOption(1);}}>
          Inside
        </button>
        <button type="button" className={`button ${option == 2 ? 'active' : ''}`} onClick={(e) => {setOption(2);}}>
          Outside
        </button>
      </div>
    </div>
  );
}

export default LockPlacementSettingComponent;