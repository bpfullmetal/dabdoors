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

const Builder = ({ adminProperties }) => {
  const [price, setPrice] = useState(500);
  const [hasWindow, setHasWindow] = useState(false);
  const [hasVents, setHasVents] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [windowCnt, setWindowCnt] = useState(0); 
  if (adminProperties.lock_placement_group.inside.default == true) {
    setPrice(price + Number(adminProperties.lock_placement_group.inside.additional_price_$));
  } else if (adminProperties.lock_placement_group.outside.default == true) {
    setPrice(price + Number(adminProperties.lock_placement_group.outside.additional_price_$));
  }
  // console.log(adminProperties);
  const changeWindowsCount = (e) => {
    if (hasWindow) {
      if (e === true) {
        setPrice(price + Number(adminProperties.window_group.additional_price_$_per_window));
        setWindowCnt(windowCnt + 1);
      } else {
        setPrice(price - Number(adminProperties.window_group.additional_price_$_per_window));
        setWindowCnt(windowCnt - 1);
      }
    }
  }
  return (
    <div className="product-builder">
      <div className="title-section">
        <img src={Logo} className="logo"/>
        <h2>Hurricane Garage Doors Product BuiLder</h2>
      </div>
      <div className="product-builder-content">
        <div className="product-container">
          <ProductContainerComponent hasWindow={hasWindow} hasVents={hasVents} colorIndex={colorIndex} changeWindowsCount={(e) => {changeWindowsCount(e);}} />
        </div>
        <div className="product-custom-bar">
          <div className="setting-title-section">
            <label>Customization Settings</label>
          </div>
          <SizeChangeComponent />
          <WindowsSettingComponent
            hasWindow={hasWindow}
            onChange={(e) => {
              if (e === true) {
                setPrice(price + windowCnt * Number(adminProperties.window_group.additional_price_$_per_window));
              } else {
                setPrice(price - windowCnt * Number(adminProperties.window_group.additional_price_$_per_window));
              }
              setHasWindow(e)
            }}
            properties={adminProperties.window_group && adminProperties.window_group}
          />
          <InsulationSettingComponent />
          <VentsSettingComponent
            hasVents={hasVents}
            onChange={(e) => {
              if (e == true) {
                setPrice(price + Number(adminProperties.vents_group.additional_price_$_if_added));
              } else {
                setPrice(price - Number(adminProperties.vents_group.additional_price_$_if_added));
              }
              setHasVents(e);
            }}
            properties={adminProperties.vents_group && adminProperties.vents_group}
          />
          <LockPlacementSettingComponent
            setAdditionalPriceForLock={(e) => setPrice(price + e)}
            properties={adminProperties.lock_placement_group && adminProperties.lock_placement_group}
          />
          <PanelSettingComponent />
          <RollerTypeSettingComponent />
          <TrackRadiusSettingComponent />
          <ColorsSettingComponent colorIndex={colorIndex} onChange={(e) => setColorIndex(e)} />
          <PremiumColorsSettingComponent />
          <div className="product-setting-item-component price-section">
            <label>Total</label>
            <p>$ {price}</p>
          </div>
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