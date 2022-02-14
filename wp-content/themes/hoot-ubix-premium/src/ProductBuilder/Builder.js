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
  // console.log(adminProperties);
  const [price, setPrice] = useState(500);
  const [hasWindow, setHasWindow] = useState(false);
  const [hasVents, setHasVents] = useState(false);
  const [colorIndex, setColorIndex] = useState(
    adminProperties.standard_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) > -1 ? adminProperties.standard_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) : 0
  );
  const [windowCnt, setWindowCnt] = useState(0); 
  const [isLoaded, setLoadingStatus] = useState(false);
  const [changedPriceWithLock, setChangedPriceWithLock] = useState(0);
  const [changedPriceWithPanel, setChangedPriceWithPanel] = useState(0);
  const [changedPriceWithRollerType, setChangedPriceWithRollerType] = useState(0);
  const [changedPriceWithPremiumColor, setChangedPriceWithPremiumColor] = useState(0);
  const [changedPriceWithTrackRadius, setChangedPriceWithTrackRadius] = useState(0);
  const [windowSize, changeWindowSize] = useState({
    height1: 16,
    height2: 2,
    width1: 10,
    width2: 0
  })
  const [isAdding, setIsAdding] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
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

  const changePricewithLock = (e) => {
    setPrice(price - changedPriceWithLock + e);
    setChangedPriceWithLock(e);
  }

  const changePriceWithPanelGroup = (e) => {
    setPrice(price - changedPriceWithPanel + e);
    setChangedPriceWithPanel(e);
  }

  const changePriceWithRollerType = (e) => {
    setPrice(price - changedPriceWithRollerType + e);
    setChangedPriceWithRollerType(e);
  }

  const changePriceWithPremiumColor = (e) => {
    if (e == true) {
      setPrice(price - changedPriceWithPremiumColor + Number(adminProperties.premium_colors_group.additional_price));
      setChangedPriceWithPremiumColor(Number(adminProperties.premium_colors_group.additional_price));
    }
  }

  const changePriceWithTrackRadius = (e) => {
    if ( e === true) {
      setPrice(price - changedPriceWithTrackRadius + Number(adminProperties.track_radius_group.additional_price_$));
      setChangedPriceWithTrackRadius(Number(adminProperties.track_radius_group.additional_price_$));
    } else if (e === false) {
      setPrice(price - changedPriceWithTrackRadius + 0);
      setChangedPriceWithTrackRadius(0);
    }
  }

  const createProduct = (e) => {
    setIsAdding(true);
    let formData = {
      action: 'createProduct',
      price: price
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: `${baseUrl}/wp-admin/admin-ajax.php`,
      data: formData,
      success: function(response){
        if (response && response.id) {
          jQuery.ajax({
            type: "post",
            dataType: "json",
            url: `${baseUrl}/wp-admin/admin-ajax.php`,
            data: {
              action: 'addProductToCart',
              item_id: response.id
            },
          }).done(function(res) {
            console.log(res);
            setIsAdding(false);
          })
        }
      }
    });
  }

  React.useEffect(() => {
      let initialPrice = price;
      if (adminProperties.lock_placement_group.inside.default === true) {
        initialPrice += Number(adminProperties.lock_placement_group.inside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.inside.additional_price_$));
      } else if (adminProperties.lock_placement_group.outside.default === true) {
        initialPrice += Number(adminProperties.lock_placement_group.outside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.outside.additional_price_$));
      }

      if (adminProperties.panel_group.raised.default === true) {
        initialPrice += Number(adminProperties.panel_group.raised.additional_price_$);
        setChangedPriceWithPanel(Number(adminProperties.lock_placement_group.inside.additional_price_$));
      } else if (adminProperties.panel_group.flush.default === true) {
        initialPrice += Number(adminProperties.panel_group.flush.additional_price_$);
        setChangedPriceWithPanel(Number(adminProperties.panel_group.flush.additional_price_$));
      }

      if (adminProperties.roller_type_group) {
        let index = adminProperties.roller_type_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          initialPrice += Number(adminProperties.roller_type_group.select_button_options[index].additional_price);
          setChangedPriceWithRollerType(Number(adminProperties.roller_type_group.select_button_options[index].additional_price));
        } else {
          setChangedPriceWithRollerType(0);
        }
      }

      if (adminProperties.premium_colors_group) {
        let index = adminProperties.premium_colors_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          initialPrice += Number(adminProperties.premium_colors_group.additional_price);
          setChangedPriceWithPremiumColor(Number(adminProperties.premium_colors_group.additional_price));
        } else {
          setChangedPriceWithPremiumColor(0);
        }
      }

      if (adminProperties.track_radius_group) {
        if ( Number(adminProperties.track_radius_group.minimum) > Number(adminProperties.track_radius_group.if_over_) ) {
          initialPrice += Number(adminProperties.track_radius_group.additional_price_$);
          setChangedPriceWithTrackRadius(Number(adminProperties.track_radius_group.additional_price_$));
        } else {
          setChangedPriceWithTrackRadius(0);
        }
      }

      setPrice(initialPrice);
  }, [])

  return (
    <div className="product-builder">
      <div className="title-section">
        <img src={Logo} className="logo"/>
        <h2>Hurricane Garage Doors Product BuiLder</h2>
      </div>
      <div className="product-builder-content">
        <div className="product-container">
          <ProductContainerComponent
            hasWindow={hasWindow}
            hasVents={hasVents}
            colorIndex={colorIndex}
            windowSize={windowSize}
            colors={
              adminProperties.standard_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            changeWindowsCount={(e) => {changeWindowsCount(e);}}
          />
        </div>
        <div className="product-custom-bar">
          <div className="setting-title-section">
            <label>Customization Settings</label>
          </div>
          <SizeChangeComponent
            onChangeWindowSize = {(e) => {changeWindowSize(e);}}
          />
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
          <InsulationSettingComponent 
            properties={adminProperties.insulation_group}
            enableInsulation={(e) => {
              if (e == true) {
                setPrice(price + Number(adminProperties.insulation_group.additional_price_$_if_added));
              } else {
                setPrice(price - Number(adminProperties.insulation_group.additional_price_$_if_added));
              }
            }}
          />
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
            setAdditionalPriceForLock={(e) => changePricewithLock(e)}
            properties={adminProperties.lock_placement_group && adminProperties.lock_placement_group}
          />
          <PanelSettingComponent
            setAdditionalPriceForPanelGroup = {(e) => changePriceWithPanelGroup(e)}
            properties={adminProperties.panel_group && adminProperties.panel_group}
          />
          <RollerTypeSettingComponent
            properties={adminProperties.roller_type_group && adminProperties.roller_type_group}
            setAdditionalPriceForRollerType={(e) => changePriceWithRollerType(e)}
          />
          <TrackRadiusSettingComponent
            properties={adminProperties.track_radius_group}
            enablePrice={(e) => changePriceWithTrackRadius(e)}
          />
          <ColorsSettingComponent
            colorIndex={colorIndex}
            onChange={(e) => setColorIndex(e)}
            properties={adminProperties.standard_colors_group}
          />
          <PremiumColorsSettingComponent
            properties={adminProperties.premium_colors_group}
            enablePrice={(e) => changePriceWithPremiumColor(e)}
          />
          <div className="product-setting-item-component price-section">
            <label>Total</label>
            <p>$ {price}</p>
          </div>
          <div className="product-setting-item-component addCartButton">
            <button type="button" className={`btn btn-add-cart ${isAdding ? 'disabled' : ''}`} onClick={(e) => {
              createProduct(e);
            }}>
              {isAdding ? 'Adding Product...' : 'Add to Cart'}
            </button>
            { 
              showAlerts && (
                <p className='alert'>
                  Product was added to Cart, please check your <a href={`${baseUrl}/cart`} target="_blank">cart.</a>
                  <span className='times' onClick={(e) => {setShowAlerts(false)}}>&times;</span>
                </p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;