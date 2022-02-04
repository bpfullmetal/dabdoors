import Logo from "./../assets/img_logo.png";
import SizeChangeComponent from "./Components/SizeChangeComponent";
import WindowsSettingComponent from "./Components/WindowsSettingComponent";
import InsulationSettingComponent from "./Components/InsulationSettingComponent";
import VentsSettingComponent from "./Components/VentsSettingComponent";

const Builder = () => {
  return (
    <div className="product-builder">
      <div className="title-section">
        <img src={Logo} className="logo"/>
        <h2>Hurricane Garage Doors Product BuiLder</h2>
      </div>
      <div className="product-builder-content">
        <div className="product-container"></div>
        <div className="product-custom-bar">
          <div className="setting-title-section">
            <label>Customization Settings</label>
          </div>
          <SizeChangeComponent />
          <WindowsSettingComponent />
          <InsulationSettingComponent />
          <VentsSettingComponent />
        </div>
      </div>
    </div>
  );
}

export default Builder;