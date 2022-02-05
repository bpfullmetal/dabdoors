import { useState } from 'react';
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
import ProductContainerComponent from "./CustomProductComponents/ProductContainerComponent";

const Builder = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const [hasVents, setHasVents] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <div className="product-builder">
      <div className="title-section">
        <img src={Logo} className="logo"/>
        <h2>Hurricane Garage Doors Product BuiLder</h2>
      </div>
      <div className="product-builder-content">
        <div className="product-container">
          <ProductContainerComponent hasWindow={hasWindow} hasVents={hasVents} colorIndex={colorIndex} />
        </div>
        <div className="product-custom-bar">
          <div className="setting-title-section">
            <label>Customization Settings</label>
          </div>
          <SizeChangeComponent />
          <WindowsSettingComponent hasWindow={hasWindow} onChange={(e) => setHasWindow(e)} />
          <InsulationSettingComponent />
          <VentsSettingComponent hasVents={hasVents} onChange={(e) => setHasVents(e)}/>
          <LockPlacementSettingComponent />
          <PanelSettingComponent />
          <RollerTypeSettingComponent />
          <TrackRadiusSettingComponent />
          <ColorsSettingComponent colorIndex={colorIndex} onChange={(e) => setColorIndex(e)} />
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