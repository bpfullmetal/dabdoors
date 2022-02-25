import { useState , useEffect } from 'react';
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
import PressureSettingsComponent from './SettingsComponents/PressureSettingsComponent';
import Switch from "react-switch";


const Builder = ({ adminProperties }) => {
  const [metaObj, setMetaObject] = useState({
    size: {
      width: 10.0,
      height: 16.2
    },
    windows: {
      hasWindow: false,
      position: []
    },
    lock_placement: {
      hasLock: false,
      placement: ''
    },
    insulation: {
      hasInsulation: false
    },
    vents: {
      hasVents: false
    },
    panelType: {
      type: ''
    },
    trackRadius:  {
      radius: 12
    },
    rollerType: {
      type: ''
    },
    standardColor: {
      color: '',
    },
    premiumColor: {
      color: ''
    }
  })
  const [price, setPrice] = useState(basePrice);
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
  // const [isLoaded, setLoadingStatus] = useState(false);
  const [changedPriceWithLock, setChangedPriceWithLock] = useState(0);
  const [changedPriceWithPanel, setChangedPriceWithPanel] = useState(0);
  const [changedPriceWithRollerType, setChangedPriceWithRollerType] = useState(0);
  const [changedPriceWithPremiumColor, setChangedPriceWithPremiumColor] = useState(0);
  const [changedPriceWithTrackRadius, setChangedPriceWithTrackRadius] = useState(0);
  const [changedPriceWithPressure, setChangedPriceWithPressure] = useState(0);
  const [windowSize, changeWindowSize] = useState({
    height1: Math.floor(initHeight),
    height2: 0,
    width1: Math.floor(initWidth),
    width2: 0
  })
  const [isAdding, setIsAdding] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [productUrl, setProductUrl] = useState('');
  const [showCustomPanel, setShowCustomPanel] = useState(false);
  const [pressureIndex, setPressureIndex] = useState(0);
  const [selectedUbarSetting, setSelectedUbarSetting] = useState({
    ubar_counts: 0,
    ubar_costs: 0
  })
  const changeWindowsCount = (e, index) => {
    let rows = ['A','B','C'];
    let rowIndex = Math.floor(index / 4);
    let colIndex = Math.floor(index % 4);
    let selectedWindowPos = `${rows[rowIndex]}${colIndex}`;
    let windwsObj = metaObj.windows;
    let windowsPos = metaObj.windows.position;

    if (hasWindow) {
      if (e === true) {
        windowsPos.push(selectedWindowPos);
        setPrice(price + Number(adminProperties.window_group.additional_price_$_per_window));
        setWindowCnt(windowCnt + 1);
      } else {
        windowsPos.splice(windowsPos.indexOf(selectedWindowPos), 1);
        setPrice(price - Number(adminProperties.window_group.additional_price_$_per_window));
        setWindowCnt(windowCnt - 1);
      }
      windwsObj.position = windowsPos;
      setMetaObject({
        ...metaObj,
        windows: windwsObj
      });
    }
  }

  useEffect(() => {
    if (showCustomPanel === true ) {
      jQuery('body').addClass('no-scroll');
    } else {
      jQuery('body').removeClass('no-scroll');
    }
  }, [showCustomPanel])

  const changePricewithLock = (option, e) => {
    let lock_placement = metaObj.lock_placement;
    lock_placement.hasLock = true;
    lock_placement.placement = option == 1 ? 'inside' : 'outside';
    setMetaObject({
      ...metaObj,
      lock_placement
    })
    setPrice(price - changedPriceWithLock + e);
    setChangedPriceWithLock(e);
  }

  const changePriceWithPanelGroup = (option, e) => {
    setPrice(price - changedPriceWithPanel + e);
    setChangedPriceWithPanel(e);
    setMetaObject({
      ...metaObj,
      panelType: {
        type: option == 1 ? 'raised' : 'flush'
      }
    });
  }

  const changePriceWithRollerType = (type, e) => {
    setMetaObject({
      ...metaObj,
      rollerType: {
        type: type
      }
    });
    setPrice(price - changedPriceWithRollerType + e);
    setChangedPriceWithRollerType(e);
  }

  const changePriceWithPremiumColor = (e) => {
    if (e == true) {
      setPrice(price - changedPriceWithPremiumColor + Number(adminProperties.premium_colors_group.additional_price));
      setChangedPriceWithPremiumColor(Number(adminProperties.premium_colors_group.additional_price));
    }
  }

  const changePriceWithTrackRadius = (radius, e) => {
    setMetaObject({
      ...metaObj,
      trackRadius: {
        radius: radius
      }
    })
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
    metaObj.price = price;
    let formData = {
      action: 'addProductToCart',
      item_id: productId,
      meta_data: metaObj
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: `${baseUrl}/wp-admin/admin-ajax.php`,
      data: formData,
    }).then(res => {
      setIsAdding(false);
      setShowAlerts(true);
      console.log(res);
    }) 
  }

  React.useEffect(() => {
      let initialPrice = price;
      let lock_placement = metaObj.lock_placement;
      let panelType = metaObj.panelType;
      let trackRadius = metaObj.trackRadius;
      let rollerType = metaObj.rollerType;
      let standardColor = metaObj.standardColor;
      let premiumColor = metaObj.premiumColor;
      if (adminProperties.lock_placement_group.inside.default === true) {
        lock_placement.hasLock = true;
        lock_placement.placement = 'inside';
        initialPrice += Number(adminProperties.lock_placement_group.inside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.inside.additional_price_$));
      } else if (adminProperties.lock_placement_group.outside.default === true) {
        lock_placement.hasLock = true;
        lock_placement.placement = 'outside';
        initialPrice += Number(adminProperties.lock_placement_group.outside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.outside.additional_price_$));
      } else {
        lock_placement.hasLock = false;
        lock_placement.placement = '';
      }

      if (adminProperties.panel_group.raised.default === true) {
        panelType.type = 'raised';
        initialPrice += Number(adminProperties.panel_group.raised.additional_price_$);
        setChangedPriceWithPanel(Number(adminProperties.lock_placement_group.inside.additional_price_$));
      } else if (adminProperties.panel_group.flush.default === true) {
        panelType.type = 'flush';
        initialPrice += Number(adminProperties.panel_group.flush.additional_price_$);
        setChangedPriceWithPanel(Number(adminProperties.panel_group.flush.additional_price_$));
      }

      if (adminProperties.roller_type_group) {
        let index = adminProperties.roller_type_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          rollerType.type = adminProperties.roller_type_group.select_button_options[index].button_name;
          initialPrice += Number(adminProperties.roller_type_group.select_button_options[index].additional_price);
          setChangedPriceWithRollerType(Number(adminProperties.roller_type_group.select_button_options[index].additional_price));
        } else {
          rollerType.type = '';
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
          premiumColor.color = adminProperties.premium_colors_group.select_button_options[index].select_color;
        } else {
          setChangedPriceWithPremiumColor(0);
        }
      }

      if (adminProperties.track_radius_group) {
        trackRadius.radius = adminProperties.track_radius_group.minimum;
        if ( Number(adminProperties.track_radius_group.minimum) > Number(adminProperties.track_radius_group.if_over_) ) {
          initialPrice += Number(adminProperties.track_radius_group.additional_price_$);
          setChangedPriceWithTrackRadius(Number(adminProperties.track_radius_group.additional_price_$));
        } else {
          setChangedPriceWithTrackRadius(0);
        }
      }

      if(adminProperties.standard_colors_group) {
        let index = adminProperties.standard_colors_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          standardColor.color = adminProperties.standard_colors_group.select_button_options[index].select_color;
        }
      }
      setMetaObject({
        ...metaObj,
        lock_placement,
        panelType,
        trackRadius,
        rollerType,
        standardColor,
        premiumColor
      });
      setPrice(initialPrice);
  }, []);

  useEffect(() => {
    let selectedPressure = adminProperties.pressure_group.pressure_options[pressureIndex];
    let windowHeight = windowSize.height1 + windowSize.height2 / 10;
    let ubarSettings = selectedPressure.ubar_settings ? selectedPressure.ubar_settings : [];
    let ubarIndex = ubarSettings.findIndex(it => {
      return Number(it.min_height) <= windowHeight && Number(it.max_height) > windowHeight;
    });
    if (ubarIndex > -1) {
      setSelectedUbarSetting({
        ubar_counts: Number(ubarSettings[ubarIndex].ubar_counts),
        ubar_costs: Number(ubarSettings[ubarIndex].per_ubar_costs)
      });
      let additional_price_with_pressure = Number(ubarSettings[ubarIndex].ubar_counts) * Number(ubarSettings[ubarIndex].per_ubar_costs);
      setPrice(price - changedPriceWithPressure + additional_price_with_pressure);
      setChangedPriceWithPressure(additional_price_with_pressure);
    } else {
      setSelectedUbarSetting({
        ubar_counts: 0,
        ubar_costs: 0
      });
      setPrice(price - changedPriceWithPressure);
      setChangedPriceWithPressure(0);
    }
  }, [pressureIndex, windowSize])

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
            lockPlacement={metaObj.lock_placement}
            colors={
              adminProperties.standard_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            changeWindowsCount={(e, index) => {changeWindowsCount(e, index);}}
          />
          <div className='mobile-switch-button'>
            <span>Customization</span>
            <Switch onChange={(e) => {setShowCustomPanel(e)}} checked={showCustomPanel} width={40} height={20} onColor={'#1396E7'} checkedIcon={''} uncheckedIcon={''} />
          </div>
        </div>
        <div className={`product-custom-bar ${showCustomPanel ? 'fixed-pos' : ''}`}>
          <div className="setting-title-section">
            <label>Customization Settings</label>
          </div>
          <span className="times btn-times" onClick={(e) => {setShowCustomPanel(false)}}>&times;</span>
          <SizeChangeComponent
            onChangeWindowSize = {(e) => {changeWindowSize(e);}}
          />
          <WindowsSettingComponent
            hasWindow={hasWindow}
            additional_price={windowCnt * Number(adminProperties.window_group.additional_price_$_per_window)}
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
          <PressureSettingsComponent
            properties={adminProperties.pressure_group && adminProperties.pressure_group}
            onSelectPressure={(e)=>{
              setPressureIndex(e)
            }}
            selectedUbarSetting={selectedUbarSetting}
          />
          <InsulationSettingComponent 
            properties={adminProperties.insulation_group}
            additional_price = {Number(adminProperties.insulation_group.additional_price_$_if_added)}
            enableInsulation={(e) => {
              if (e == true) {
                setPrice(price + Number(adminProperties.insulation_group.additional_price_$_if_added));
              } else {
                setPrice(price - Number(adminProperties.insulation_group.additional_price_$_if_added));
              }
              setMetaObject({
                ...metaObj,
                insulation: {
                  hasInsulation: e
                }
              });
            }}
          />
          <VentsSettingComponent
            hasVents={hasVents}
            additional_price = {Number(adminProperties.vents_group.additional_price_$_if_added)}
            onChange={(e) => {
              if (e == true) {
                setPrice(price + Number(adminProperties.vents_group.additional_price_$_if_added));
              } else {
                setPrice(price - Number(adminProperties.vents_group.additional_price_$_if_added));
              }
              setMetaObject({
                ...metaObj,
                vents: {
                  hasVents: e
                }
              });
              setHasVents(e);
            }}
            properties={adminProperties.vents_group && adminProperties.vents_group}
          />
          <LockPlacementSettingComponent
            additional_price={changedPriceWithLock}
            setAdditionalPriceForLock={(option, e) => changePricewithLock(option, e)}
            properties={adminProperties.lock_placement_group && adminProperties.lock_placement_group}
          />
          <PanelSettingComponent
            additional_price={changedPriceWithPanel}
            setAdditionalPriceForPanelGroup = {(option, e) => changePriceWithPanelGroup(option, e)}
            properties={adminProperties.panel_group && adminProperties.panel_group}
          />
          <RollerTypeSettingComponent
            additional_price={changedPriceWithRollerType}
            properties={adminProperties.roller_type_group && adminProperties.roller_type_group}
            setAdditionalPriceForRollerType={(type, e) => changePriceWithRollerType(type, e)}
          />
          <TrackRadiusSettingComponent
            additional_price={changedPriceWithTrackRadius}
            properties={adminProperties.track_radius_group}
            enablePrice={(radius, e) => changePriceWithTrackRadius(radius, e)}
          />
          <ColorsSettingComponent
            colorIndex={colorIndex}
            onChange={(color, e) => {
              setMetaObject({
                ...metaObj,
                standardColor: {
                  color: color
                }
              })
              setColorIndex(e);
            }}
            properties={adminProperties.standard_colors_group}
          />
          <PremiumColorsSettingComponent
            properties={adminProperties.premium_colors_group}
            enablePrice={(color, e) => {
              setMetaObject({
                ...metaObj,
                premiumColor: {
                  color: color
                }
              })
              changePriceWithPremiumColor(e);
            }}
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
                  Product was added to Cart, please check your <a href={`${baseUrl}/cart`} target="_blank">cart</a> and your <a href={productUrl} target="_blank">product.</a>
                  <span className='times' onClick={(e) => {setShowAlerts(false)}}>&times;</span>
                </p>
              )
            }
          </div>
        </div>
        <div className={`background-overlay ${showCustomPanel ? 'fixed-pos' : ''}`}></div>
      </div>
    </div>
  );
}

export default Builder;