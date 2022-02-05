import Logo from "./../assets/img_logo.png";
import SizeChangeComponent from "./SettingsComponents/SizeChangeComponent";
import WindowsSettingComponent from "./SettingsComponents/WindowsSettingComponent";
import InsulationSettingComponent from "./SettingsComponents/InsulationSettingComponent";
import VentsSettingComponent from "./SettingsComponents/VentsSettingComponent";
import LockPlacementSettingComponent from "./SettingsComponents/LockPlacementSettingComponent";
import PanelSettingComponent from "./SettingsComponents/PanelSettingComponent";
import RollerTypeSettingComponent from "./SettingsComponents/RollerTypeSettingComponent";
import TrackRadiusSettingComponent from "./SettingsComponents/TrackRadiusSettingComponent";
import ColorsSettingComponent from "./SettingsComponents/ColorsSettingComponent";
import PremiumColorsSettingComponent from "./SettingsComponents/PremiumColorsSettingComponent";

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
          <LockPlacementSettingComponent />
          <PanelSettingComponent />
          <RollerTypeSettingComponent />
          <TrackRadiusSettingComponent />
          <ColorsSettingComponent />
          <PremiumColorsSettingComponent />
          <div className="product-setting-item-component addCartButton">
            <button type="button" className="btn btn-add-cart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;