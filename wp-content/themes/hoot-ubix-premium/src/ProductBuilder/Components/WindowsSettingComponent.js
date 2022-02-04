const { render, useState } = wp.element;
import Switch from "react-switch";

const WindowsSettingComponent = () => {
  const [hasWindow, setHasWindow] = useState(0);
  return (
    <div className="product-setting-item-component window-settings">
      <div class="d-flex align-items-center justify-content-between">
        <label>Windows</label>
        <Switch onChange={(e) => {setHasWindow(e)}} checked={hasWindow} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
      </div>

      <span className="description">
        Click on a window space to add or delete windows.
      </span>

    </div>
  );
}

export default WindowsSettingComponent;