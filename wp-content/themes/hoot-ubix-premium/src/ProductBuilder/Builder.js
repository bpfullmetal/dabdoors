import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux'

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
import HeadroomSettingComponent from './SettingsComponents/HeadroomSettingComponent';
import Switch from "react-switch";
import html2canvas from 'html2canvas';

const Builder = () => {
  const adminProps = useSelector( state => state.adminProps)
  const windowsGrid = useSelector( state => state.windowsGrid)
  const doorSize = useSelector( state => state.doorSize)
  const pressure = useSelector( state => state.pressure)
  
  const hideSettings = adminProps.hide_settings;

  const [metaObj, setMetaObject] = useState({
    size: {
      width: 10.0,
      height: 16.2,
      cost: 0
    },
    windows: {
      hasWindow: false,
      position: [],
      cost: 0
    },
    lock_placement: {
      hasLock: false,
      placement: '',
      cost: 0
    },
    insulation: {
      hasInsulation: false,
      cost: 0
    },
    vents: {
      hasVents: false,
      cost: 0
    },
    panelType: {
      type: '',
      cost: 0
    },
    headroom: {
      type: '',
      cost: 0
    },
    trackRadius:  {
      radius: 12,
      cost: 0
    },
    rollerType: {
      type: '',
      cost: 0
    },
    standardColor: {
      color: '',
      sku: '',
      cost: 0
    },
    premiumColor: {
      color: '',
      sku: '',
      cost: 0
    },
    ubarSettings: {
      count: 0,
      pressure_option: '',
      cost: 0
    }
  });
  const additionalSqInCost = 5
  const [pack, setPack] = useState(0);
  const [additionalPriceWithCustomWindow, setAdditionalPriceWithCustomWindow] = useState(0);
  const [price, setPrice] = useState(Number(doorSettings.basePrice));
  const [baseArea, setBaseArea] = useState(Number(doorSettings.initWidth) * Number(doorSettings.initHeight));
  const [basePrice, setBasePrice] = useState(Number(doorSettings.basePrice));
  const [hasWindow, setHasWindow] = useState(false);
  const [hasVents, setHasVents] = useState(false);
  const [colorIndex, setColorIndex] = useState(
    adminProps.standard_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) > -1 ? adminProps.standard_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) : 0
  );

  const [premiumColorIndex, setPremiumColorIndex] = useState(
    adminProps.premium_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) > -1 ? adminProps.premium_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) : -1
  )

  const [hasSizeValidationError, setSizeValidationError] = useState(false);
  const [windowCnt, setWindowCnt] = useState(0); 
  const [changedPriceWithLock, setChangedPriceWithLock] = useState(0);
  const [changedPriceWithPanel, setChangedPriceWithPanel] = useState(0);
  const [changedPriceWithRollerType, setChangedPriceWithRollerType] = useState(0);
  const [changedPriceWithPremiumColor, setChangedPriceWithPremiumColor] = useState(0);
  const [changedPriceWithTrackRadius, setChangedPriceWithTrackRadius] = useState(0);
  const [changedPriceWithHeadRoom, setChangedPriceWithHeadRoom] = useState(0);

  const [isAdding, setIsAdding] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [productUrl, setProductUrl] = useState('');
  const [showCustomPanel, setShowCustomPanel] = useState(false);
  const [selectedUbarSetting, setSelectedUbarSetting] = useState({
    ubar_counts: 0,
    ubar_costs: 0
  });
  const [availablePressures, setAvailablePressures] = useState([]);
  const [layoutOption, setLayoutOption] = useState(-1);

  const changeWindowsCount = (e, index) => {
    let rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
    let selectedWindowPos = `${rows[rowIndex]}${colIndex}`;
    let windowsObj = metaObj.windows;
    let windowsPos = metaObj.windows.position;
    let newWindowCount = windowCnt
    if (hasWindow) {
      if (e === true) {
        windowsPos.push(selectedWindowPos);
        newWindowCount++
      } else {
        windowsPos.splice(windowsPos.indexOf(selectedWindowPos), 1);
        newWindowCount--
      }
      setWindowCnt(newWindowCount);
      windowsObj.position = windowsPos;
      windowsObj.cost =  Number(adminProps.window_group.additional_price_$_per_window) * newWindowCount
      setMetaObject({
        ...metaObj,
        windows: windowsObj
      });
    }
  }

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let newWindowsObj = {
      ...metaObj,
      windows: {
        ...metaObj.windows,
        cost: additionalPriceWithCustomWindow + windowCnt * Number(adminProps.window_group.additional_price_$_per_window)
      }
    }
    console.log(additionalPriceWithCustomWindow, windowCnt)
    if (layoutOption == -1) {
      if (metaObj.customWindowLayout) {
        delete metaObj.customWindowLayout;
      }
    } else {
      let layoutName = '';
      if (layoutOption == 0) {
        layoutName = 'Williamsburg 405';
      } else if (layoutOption == 1) {
        layoutName = 'Williamsburg 305';
      } else if (layoutOption == 2) {
        layoutName = 'Winston 392';
      } else if (layoutOption == 3) {
        layoutName = 'Stockton 397';
      } else if (layoutOption == 4) {
        layoutName = 'Sherwood 306';
      }
      let customWindowLayout = {
        name: layoutName,
        cols: windowsGrid.cols,
        cost: 0
      };
      newWindowsObj.customWindowLayout = customWindowLayout
    }
    
    setMetaObject(newWindowsObj);
  }, [layoutOption])

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

  const changePriceWithPanelGroup = (e) => {
    let selectedPanel = adminProps.panels[e];
    if (selectedPanel) {
      let panelPrice = Number(selectedPanel.additional_price);
      setPrice(price - changedPriceWithPanel + panelPrice);
      setChangedPriceWithPanel(panelPrice);
      setMetaObject({
        ...metaObj,
        panelType: {
          type: selectedPanel.panel_type
        }
      });
    }
  }

  const changePriceWithHeadRoom = (e) => {
    let selectedOption = adminProps.headroom.options[e];
    if (selectedOption) {
      let additionalPrice = Number(selectedOption.additional_price);
      setPrice(price - changedPriceWithHeadRoom + additionalPrice);
      setChangedPriceWithHeadRoom(additionalPrice);
      setMetaObject({
        ...metaObj,
        headroom: {
          type: selectedOption.option_label
        }
      })
    }
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
      setPrice(price - changedPriceWithPremiumColor + Number(adminProps.premium_colors_group.additional_price));
      setChangedPriceWithPremiumColor(Number(adminProps.premium_colors_group.additional_price));
    } else {
      setPrice(price - changedPriceWithPremiumColor);
      setChangedPriceWithPremiumColor(0);
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
      setPrice(price - changedPriceWithTrackRadius + Number(adminProps.track_radius_group.additional_price_$));
      setChangedPriceWithTrackRadius(Number(adminProps.track_radius_group.additional_price_$));
    } else if (e === false) {
      setPrice(price - changedPriceWithTrackRadius + 0);
      setChangedPriceWithTrackRadius(0);
    }
  }

  const createProduct = (e) => {
    if (hasSizeValidationError) {
      window.alert('Product size has some errors. Please check before create the request.');
      return false;
    }
    setIsAdding(true);
    html2canvas(document.getElementById('product-door-wrapper')).then(function(canvas) {  
      canvas.toBlob(function(blob) {
        var reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
          var base64data = reader.result;
          metaObj.price = price;
          metaObj.size = doorSize
          let formData = {
            action: 'addProductToCart',
            item_id: doorSettings.productId,
            meta_data: metaObj,
            thumb_img: base64data
          };
          jQuery.ajax({
            type: "post",
            dataType: "json",
            url: `${baseUrl}/wp-admin/admin-ajax.php`,
            data: formData,
          }).then(res => {
            setIsAdding(false);
            setShowAlerts(true);
          }) 
        }
        
      });
    });
  }

  React.useEffect(() => {
    if (isInitialized) {
      return;
    }
    let initialPrice = price;
    let lock_placement = metaObj.lock_placement;
    let panelType = metaObj.panelType;
    let trackRadius = metaObj.trackRadius;
    let rollerType = metaObj.rollerType;
    let standardColor = metaObj.standardColor;
    let premiumColor = metaObj.premiumColor;
    let headroom = metaObj.headroom;
    if (hideSettings.hide_lock_placement_settings.hide_from_builder == false) {
      if (adminProps.lock_placement_group.inside.default === true) {
        lock_placement.hasLock = true;
        lock_placement.placement = 'inside';
        initialPrice += Number(adminProps.lock_placement_group.inside.additional_price_$);
        setChangedPriceWithLock(Number(adminProps.lock_placement_group.inside.additional_price_$));
      } else if (adminProps.lock_placement_group.outside.default === true) {
        lock_placement.hasLock = true;
        lock_placement.placement = 'outside';
        initialPrice += Number(adminProps.lock_placement_group.outside.additional_price_$);
        setChangedPriceWithLock(Number(adminProps.lock_placement_group.outside.additional_price_$));
      } else {
        lock_placement.hasLock = false;
        lock_placement.placement = '';
      }
    } else if (hideSettings.hide_lock_placement_settings.hide_from_builder == true) {
      if (hideSettings.hide_lock_placement_settings.default == "inside") {
        lock_placement.hasLock = true;
        lock_placement.placement = 'inside';
        initialPrice += Number(adminProps.lock_placement_group.inside.additional_price_$);
        setChangedPriceWithLock(Number(adminProps.lock_placement_group.inside.additional_price_$));
      } else if (hideSettings.hide_lock_placement_settings.default == "outside") {
        lock_placement.hasLock = true;
        lock_placement.placement = 'outside';
        initialPrice += Number(adminProps.lock_placement_group.outside.additional_price_$);
        setChangedPriceWithLock(Number(adminProps.lock_placement_group.outside.additional_price_$));
      }
    }

    if (hideSettings.hide_panel_settings.hide_from_builder == false) {
      if (adminProps.panels.length) {
        let defaultPanelIndex = adminProps.panels.findIndex(it => it.default === true);
        defaultPanelIndex = defaultPanelIndex > -1 ? defaultPanelIndex : 0;
        panelType.type = adminProps.panels[defaultPanelIndex].panel_type;
        initialPrice += Number(adminProps.panels[defaultPanelIndex].additional_price);
        setChangedPriceWithPanel(Number(adminProps.panels[defaultPanelIndex].additional_price));
      }
    }

    if (adminProps.headroom.options.length) {
      let defaultOptionIndex = adminProps.headroom.options.findIndex(it => it.default === true);
      defaultOptionIndex = defaultOptionIndex > -1 ? defaultOptionIndex : 0;
      initialPrice += Number(adminProps.headroom.options[defaultOptionIndex].additional_price);
      setChangedPriceWithHeadRoom(Number(adminProps.headroom.options[defaultOptionIndex].additional_price));
    }

    if (hideSettings.hide_roller_type_settings.hide_from_builder == false) {
      if (adminProps.roller_type_group) {
        let index = adminProps.roller_type_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          rollerType.type = adminProps.roller_type_group.select_button_options[index].button_name;
          initialPrice += Number(adminProps.roller_type_group.select_button_options[index].additional_price);
          setChangedPriceWithRollerType(Number(adminProps.roller_type_group.select_button_options[index].additional_price));
        } else {
          rollerType.type = '';
          setChangedPriceWithRollerType(0);
        }
      }
    }

    if (hideSettings.hide_premium_colors_settings.hide_from_builder == false) {
      if (adminProps.premium_colors_group) {
        let index = adminProps.premium_colors_group.select_button_options.findIndex((e) => {
          return e.default == true;
        });
        if (index > -1) {
          initialPrice += Number(adminProps.premium_colors_group.additional_price);
          setChangedPriceWithPremiumColor(Number(adminProps.premium_colors_group.additional_price));
          premiumColor.color = adminProps.premium_colors_group.select_button_options[index].select_color;
        } else {
          setChangedPriceWithPremiumColor(0);
        }
      }
    }

    if (hideSettings.hide_track_radius_settings.hide_from_builder === false) {
      if (adminProps.track_radius_group) {
        trackRadius.radius = adminProps.track_radius_group.minimum;
        if ( Number(adminProps.track_radius_group.minimum) > Number(adminProps.track_radius_group.if_over_) ) {
          initialPrice += Number(adminProps.track_radius_group.additional_price_$);
          setChangedPriceWithTrackRadius(Number(adminProps.track_radius_group.additional_price_$));
        } else {
          setChangedPriceWithTrackRadius(0);
        }
      }
    }

    if (hideSettings.hide_vents_settings.hide_from_builder === true) {
      if (hideSettings.hide_vents_settings.default == "add") {
        initialPrice += Number(adminProps.vents_group.additional_price_$_if_added);
        setHasVents(true);
      }
    }

    if (hideSettings.hide_insulation_settings.hide_insulation_from_window_settings === true) {
      if (hideSettings.hide_insulation_settings.default == "add") {
        initialPrice += Number(adminProps.insulation_group.additional_price_$_if_added);
        setMetaObject({
          ...metaObj,
          insulation: {
            hasInsulation: true
          }
        });
      }
    }

    if(adminProps.standard_colors_group) {
      let index = adminProps.standard_colors_group.select_button_options.findIndex((e) => {
        return e.default == true;
      });
      if (index > -1) {
        standardColor.color = adminProps.standard_colors_group.select_button_options[index].select_color;
        if (premiumColorIndex == -1) {
          standardColor.color = '';
          setColorIndex(index);
        }
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
    setIsInitialized(true);
  }, [isInitialized]);

  useEffect(() => {
    const { width, height } = doorSize.width
    let totalArea = height * width
    const additionalArea = (totalArea - baseArea) > 0 ? totalArea - baseArea : 0
    const additionalSizeCost = additionalArea * additionalSqInCost
    const newMetaObject = { 
      ...metaObj, 
      size: { 
        ...metaObj.size, 
        cost: additionalSizeCost
      }
    }
    setMetaObject(newMetaObject)
  }, [doorSize])

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    
    let selectedPressure = null
    let ubarSettings = []
    if ( pressure !== 'no-pressure' ) {
      selectedPressure = adminProps.pressure_group.pressure_options.filter( pressureOption => pressureOption.pressure_range === pressure )[0]
      ubarSettings = selectedPressure.ubar_settings ? selectedPressure.ubar_settings : [];
    }
    const height = doorSize.height
    const ubarIndex = ubarSettings.findIndex(it => {
      return Number(it.min_height) <= height && Number(it.max_height) > height;
    });
    const ubarCount = ubarIndex > -1 ?  Number(ubarSettings[ubarIndex].ubar_counts) : 0
    const ubarCost = ubarIndex > -1 ? Number(ubarSettings[ubarIndex].per_ubar_costs) : 0

    setSelectedUbarSetting({
      ubar_counts: ubarCount,
      ubar_costs: ubarCost
    });

    const additional_price_with_pressure = ubarCount * ubarCost

    setMetaObject({
      ...metaObj,
      ubarSettings: {
        cost: additional_price_with_pressure,
        count: ubarCount,
        pressure_option: selectedPressure ? selectedPressure.pressure_range : null
      }
    });

    
  }, [pressure, doorSize]);

  useEffect(() => {
    if (isInitialized) {
      if (premiumColorIndex > -1) {
        changePriceWithPremiumColor(true);
        setColorIndex(-1);
      } else {
        changePriceWithPremiumColor(false);
      }
    }
  }, [premiumColorIndex, isInitialized])

  const total = Object.entries(metaObj).reduce(( initialPrice, obj) => { return initialPrice + obj[1].cost }, price);
  // console.log('total', metaObj)

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
            premiumColorIndex={premiumColorIndex}
            lockPlacement={metaObj.lock_placement}
            colors={
              adminProps.standard_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            premiumColors={
              adminProps.premium_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            customWindowProperties = {adminProps.custom_window && adminProps.custom_window}
            windowLayouts = {adminProps.custom_window && adminProps.custom_window}
            changeWindowsCount={(e, index) => {changeWindowsCount(e, index);}}
            layoutOption={layoutOption}
            pack={pack}
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
            hasSizeError = {(e) => { setSizeValidationError(e); }}
          />
          {hideSettings.hide_windows_settings.hide_windows_setting_from_builder === false && <WindowsSettingComponent
            hasWindow={hasWindow}
            additional_price={
              layoutOption == -1 ? (windowCnt * Number(adminProps.window_group.additional_price_$_per_window)) : additionalPriceWithCustomWindow
            }
            onChange={(e) => {
              setMetaObject({ 
                ...metaObj, 
                windows: { 
                  ...metaObj.windows, 
                  cost: windowCnt * Number(adminProps.window_group.additional_price_$_per_window) 
                }
              })
              setHasWindow(e)
            }}
            properties={adminProps.window_group && adminProps.window_group}
            customWindowProperties = {adminProps.custom_window && adminProps.custom_window}
            windowLayouts={adminProps.window_layouts && adminProps.window_layouts}
            onSelectWindowLayout={(e) => {
              setLayoutOption(e);
            }}
            onChangePriceByCustomWindow={(e) => {
              console.log('additional', e)
              setPrice(Number(price - windowCnt * Number(adminProps.window_group.additional_price_$_per_window) - additionalPriceWithCustomWindow + e));
              setAdditionalPriceWithCustomWindow(e);
            }}
            onChangePack={(e) => {
              setPack(e);
            }}
          />}
          <PressureSettingsComponent
            properties={adminProps.pressure_group && adminProps.pressure_group}
            selectedUbarSetting={selectedUbarSetting}
          />
          {hideSettings.hide_insulation_settings.hide_insulation_from_window_settings === false && <InsulationSettingComponent 
            properties={adminProps.insulation_group}
            additional_price = {Number(adminProps.insulation_group.additional_price_$_if_added)}
            enableInsulation={(e) => {
              setMetaObject({
                ...metaObj,
                insulation: {
                  hasInsulation: e,
                  cost: e === true 
                    ? Number(adminProps.insulation_group.additional_price_$_if_added)
                    : 0
                }
              });
            }}
          />}
          {hideSettings.hide_vents_settings.hide_from_builder === false && <VentsSettingComponent
            hasVents={hasVents}
            additional_price = {Number(adminProps.vents_group.additional_price_$_if_added)}
            onChange={(e) => {
              if (e == true) {
                setPrice(Number(price + Number(adminProps.vents_group.additional_price_$_if_added)));
              } else {
                setPrice(Number(price - Number(adminProps.vents_group.additional_price_$_if_added)));
              }
              setMetaObject({
                ...metaObj,
                vents: {
                  hasVents: e
                }
              });
              setHasVents(e);
            }}
            properties={adminProps.vents_group && adminProps.vents_group}
          />}
          {hideSettings.hide_lock_placement_settings.hide_from_builder === false && <LockPlacementSettingComponent
            additional_price={changedPriceWithLock}
            setAdditionalPriceForLock={(option, e) => changePricewithLock(option, e)}
            properties={adminProps.lock_placement_group && adminProps.lock_placement_group}
          />}
          {hideSettings.hide_panel_settings.hide_from_builder === false && <PanelSettingComponent
            additional_price={changedPriceWithPanel}
            panels={adminProps.panels}
            onSelectPanelType={(e) => {
              changePriceWithPanelGroup(e);
            }}
          />}
          <HeadroomSettingComponent
            additional_price={changedPriceWithHeadRoom}
            headroomProperty={adminProps.headroom}
            onSelectHeadroomType={(e) => {
              changePriceWithHeadRoom(e);
            }}
          />
          {hideSettings.hide_roller_type_settings.hide_from_builder === false && <RollerTypeSettingComponent
            additional_price={changedPriceWithRollerType}
            properties={adminProps.roller_type_group && adminProps.roller_type_group}
            setAdditionalPriceForRollerType={(type, e) => changePriceWithRollerType(type, e)}
          />}
          {hideSettings.hide_track_radius_settings.hide_from_builder === false && <TrackRadiusSettingComponent
            additional_price={changedPriceWithTrackRadius}
            properties={adminProps.track_radius_group}
            enablePrice={(radius, e) => changePriceWithTrackRadius(radius, e)}
          />}
          <ColorsSettingComponent
            colorIndex={colorIndex}
            onChange={(color, e, sku) => {
              setMetaObject({
                ...metaObj,
                standardColor: {
                  ...metaObj.standardColor,
                  color: color.color,
                  sku: color.sku
                }
              });
              if (e > -1) {
                setPremiumColorIndex(-1);
              }
              setColorIndex(e);
            }}
            properties={adminProps.standard_colors_group}
          />
          {hideSettings.hide_premium_colors_settings.hide_from_builder === false && <PremiumColorsSettingComponent
            properties={adminProps.premium_colors_group}
            colorIndex={premiumColorIndex}
            enablePrice={(color, e, index, sku) => {
              setMetaObject({
                ...metaObj,
                premiumColor: {
                  color: color.color,
                  sku: color.sku,
                }
              });
              setPremiumColorIndex(index);
            }}
          />}
          {/* <div className="product-setting-item-component price-section">
          </div> */}
          <div className="product-setting-item-component addCartButton">
            <div class="d-flex price-section">
              <label>Total</label>
              <p>$ {total}</p>
            </div>
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