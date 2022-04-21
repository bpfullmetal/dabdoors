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
import HeadroomSettingComponent from './SettingsComponents/HeadroomSettingComponent';
import Switch from "react-switch";
import html2canvas from 'html2canvas';

const Builder = ({ adminProperties }) => {
  const hideSettings = adminProperties.hide_settings;

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
    headroom: {
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
    },
    ubarSettings: {
      count: 0,
      preesure_option: ''
    }
  });
  const [pack, setPack] = useState(0);
  const [addtionalPriceWithCustomWindow, setAddtionalPriceWithCustomWindow] = useState(0);
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

  const [premiumColorIndex, setPremiumColorIndex] = useState(
    adminProperties.premium_colors_group.select_button_options.findIndex(option => {
      return option.default == true
    }) > -1 ? adminProperties.premium_colors_group.select_button_options.findIndex(option => {
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
  const [changedPriceWithPressure, setChangedPriceWithPressure] = useState(0);
  const [changedPriceWithHeadRoom, setChangedPriceWithHeadRoom] = useState(0);

  const [windowRowsCols, setWindowRowsCols] = useState({
    rows: 4,
    cols: 4
  });
  const [windowSize, changeWindowSize] = useState({
    height1: Math.floor(Math.floor(initHeight / 30.48)),
    height2: 0,
    width1: Math.floor(Math.floor(initWidth / 30.48)),
    width2: 0
  });

  const [isAdding, setIsAdding] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [productUrl, setProductUrl] = useState('');
  const [showCustomPanel, setShowCustomPanel] = useState(false);
  const [pressureIndex, setPressureIndex] = useState(0);
  const [selectedUbarSetting, setSelectedUbarSetting] = useState({
    ubar_counts: 0,
    ubar_costs: 0
  });
  const [availablePressures, setAvailablePressures] = useState([]);
  const [layoutOption, setLayoutOption] = useState(-1);

  const changeWindowsCount = (e, index) => {
    let rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
    let rowIndex = Math.floor(index / windowRowsCols.cols);
    let colIndex = Math.floor(index % windowRowsCols.cols);
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

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (layoutOption == -1) {
      setPrice(price - addtionalPriceWithCustomWindow + windowCnt * Number(adminProperties.window_group.additional_price_$_per_window));
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
        cols: windowRowsCols.cols
      };
      setMetaObject({
        ...metaObj,
        customWindowLayout
      });
    }
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
    let selectedPanel = adminProperties.panels[e];
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
    let selectedOption = adminProperties.headroom.options[e];
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
      setPrice(price - changedPriceWithPremiumColor + Number(adminProperties.premium_colors_group.additional_price));
      setChangedPriceWithPremiumColor(Number(adminProperties.premium_colors_group.additional_price));
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
      setPrice(price - changedPriceWithTrackRadius + Number(adminProperties.track_radius_group.additional_price_$));
      setChangedPriceWithTrackRadius(Number(adminProperties.track_radius_group.additional_price_$));
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
          metaObj.size = {
            width: windowSize.width1 * 12 + windowSize.width2,
            height: windowSize.height1 * 12 + windowSize.height2
          }
          let formData = {
            action: 'addProductToCart',
            item_id: productId,
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
            console.log(res);
          }) 
        }
        
      });
    });
  

    // setIsAdding(true);
    // metaObj.price = price;
    // metaObj.size = {
    //   width: windowSize.width1 * 12 + windowSize.width2,
    //   height: windowSize.height1 * 12 + windowSize.height2
    // }
    // let formData = {
    //   action: 'addProductToCart',
    //   item_id: productId,
    //   meta_data: metaObj,
    //   thumb_img: base64data
    // };
    // jQuery.ajax({
    //   type: "post",
    //   dataType: "json",
    //   url: `${baseUrl}/wp-admin/admin-ajax.php`,
    //   data: formData,
    // }).then(res => {
    //   setIsAdding(false);
    //   setShowAlerts(true);
    //   console.log(res);
    // }) 
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
    } else if (hideSettings.hide_lock_placement_settings.hide_from_builder == true) {
      if (hideSettings.hide_lock_placement_settings.default == "inside") {
        lock_placement.hasLock = true;
        lock_placement.placement = 'inside';
        initialPrice += Number(adminProperties.lock_placement_group.inside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.inside.additional_price_$));
      } else if (hideSettings.hide_lock_placement_settings.default == "outside") {
        lock_placement.hasLock = true;
        lock_placement.placement = 'outside';
        initialPrice += Number(adminProperties.lock_placement_group.outside.additional_price_$);
        setChangedPriceWithLock(Number(adminProperties.lock_placement_group.outside.additional_price_$));
      }
    }

    if (hideSettings.hide_panel_settings.hide_from_builder == false) {
      if (adminProperties.panels.length) {
        let defaultPanelIndex = adminProperties.panels.findIndex(it => it.default === true);
        defaultPanelIndex = defaultPanelIndex > -1 ? defaultPanelIndex : 0;
        panelType.type = adminProperties.panels[defaultPanelIndex].panel_type;
        initialPrice += Number(adminProperties.panels[defaultPanelIndex].additional_price);
        setChangedPriceWithPanel(Number(adminProperties.panels[defaultPanelIndex].additional_price));
      }
    }

    if (adminProperties.headroom.options.length) {
      let defaultOptionIndex = adminProperties.headroom.options.findIndex(it => it.default === true);
      defaultOptionIndex = defaultOptionIndex > -1 ? defaultOptionIndex : 0;
      initialPrice += Number(adminProperties.headroom.options[defaultOptionIndex].additional_price);
      setChangedPriceWithHeadRoom(Number(adminProperties.headroom.options[defaultOptionIndex].additional_price));
    }

    if (hideSettings.hide_roller_type_settings.hide_from_builder == false) {
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
    }

    if (hideSettings.hide_premium_colors_settings.hide_from_builder == false) {
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
    }

    if (hideSettings.hide_track_radius_settings.hide_from_builder === false) {
      if (adminProperties.track_radius_group) {
        trackRadius.radius = adminProperties.track_radius_group.minimum;
        if ( Number(adminProperties.track_radius_group.minimum) > Number(adminProperties.track_radius_group.if_over_) ) {
          initialPrice += Number(adminProperties.track_radius_group.additional_price_$);
          setChangedPriceWithTrackRadius(Number(adminProperties.track_radius_group.additional_price_$));
        } else {
          setChangedPriceWithTrackRadius(0);
        }
      }
    }

    if (hideSettings.hide_vents_settings.hide_from_builder === true) {
      if (hideSettings.hide_vents_settings.default == "add") {
        initialPrice += Number(adminProperties.vents_group.additional_price_$_if_added);
        setHasVents(true);
      }
    }

    if (hideSettings.hide_insulation_settings.hide_insulation_from_window_settings === true) {
      if (hideSettings.hide_insulation_settings.default == "add") {
        initialPrice += Number(adminProperties.insulation_group.additional_price_$_if_added);
        setMetaObject({
          ...metaObj,
          insulation: {
            hasInsulation: true
          }
        });
      }
    }

    if(adminProperties.standard_colors_group) {
      let index = adminProperties.standard_colors_group.select_button_options.findIndex((e) => {
        return e.default == true;
      });
      if (index > -1) {
        standardColor.color = adminProperties.standard_colors_group.select_button_options[index].select_color;
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
    // console.log(initialPrice);
    setPrice(initialPrice);
    setIsInitialized(true);
  }, [isInitialized]);


  useEffect(() => {
      let pressureOptions =  adminProperties.pressure_group.pressure_options;
      let windowWidth = windowSize.width1 * 12 + windowSize.width2;
      let index = 0;
      let indexList = [];
      pressureOptions.forEach(it => {
        if (Number(it.min_width) <= windowWidth && Number(it.max_width) >= windowWidth) {
          indexList.push(index);
        }
        index++;
      });
      if ( indexList.length > 0 ) {
        setAvailablePressures(indexList);
      } else {
        setAvailablePressures([]);
      }
  }, [windowSize])

  useEffect(() => {
    if (!isInitialized) {
      return;
    }
    if (pressureIndex > -1) {
      let selectedPressure = adminProperties.pressure_group.pressure_options[pressureIndex];
      let windowHeight = windowSize.height1 * 12 + windowSize.height2;
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
        setMetaObject({
          ...metaObj,
          ubarSettings: {
            count: Number(ubarSettings[ubarIndex].ubar_counts),
            preesure_option: selectedPressure.pressure_range
          }
        });
      } else {
        setSelectedUbarSetting({
          ubar_counts: 0,
          ubar_costs: 0
        });
        setPrice(price - changedPriceWithPressure);
        setChangedPriceWithPressure(0);
        setMetaObject({
          ...metaObj,
          ubarSettings: {
            count: 0,
            preesure_option: null
          }
        });
      }
    } else {
      setSelectedUbarSetting({
        ubar_counts: 0,
        ubar_costs: 0
      });
      setPrice(price - changedPriceWithPressure);
      setChangedPriceWithPressure(0);
      setMetaObject({
        ...metaObj,
        ubarSettings: {
          count: 0,
          preesure_option: null
        }
      });
    }
  }, [pressureIndex, windowSize]);

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
            windowSize={windowSize}
            lockPlacement={metaObj.lock_placement}
            colors={
              adminProperties.standard_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            premiumColors={
              adminProperties.premium_colors_group.select_button_options.map((option, index) => {
                return option.select_color;
              })
            }
            customWindowProperties = {adminProperties.custom_window && adminProperties.custom_window}
            changeWindowsCount={(e, index) => {changeWindowsCount(e, index);}}
            changeWindowRowsCols={(e) => {setWindowRowsCols(e)}}
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
            onChangeWindowSize = {(e) => {changeWindowSize(e);}}
            hasSizeError = {(e) => { setSizeValidationError(e); }}
          />
          {hideSettings.hide_windows_settings.hide_windows_setting_from_builder === false && <WindowsSettingComponent
            hasWindow={hasWindow}
            additional_price={
              layoutOption == -1 ? (windowCnt * Number(adminProperties.window_group.additional_price_$_per_window)) : addtionalPriceWithCustomWindow
            }
            onChange={(e) => {
              if (e === true) {
                setPrice(price + windowCnt * Number(adminProperties.window_group.additional_price_$_per_window));
              } else {
                setPrice(price - windowCnt * Number(adminProperties.window_group.additional_price_$_per_window));
              }
              setHasWindow(e)
            }}
            properties={adminProperties.window_group && adminProperties.window_group}
            customWindowProperties = {adminProperties.custom_window && adminProperties.custom_window}
            windowRowsCols={windowRowsCols}
            onSelectWindowLayout={(e) => {
              setLayoutOption(e);
            }}
            onChangePriceByCustomWindow={(e) => {
              setPrice(price - windowCnt * Number(adminProperties.window_group.additional_price_$_per_window) - addtionalPriceWithCustomWindow + e);
              setAddtionalPriceWithCustomWindow(e);
            }}
            onChangePack={(e) => {
              setPack(e);
            }}
          />}
          <PressureSettingsComponent
            availablePressures={availablePressures}
            properties={adminProperties.pressure_group && adminProperties.pressure_group}
            onSelectPressure={(e)=>{
              setPressureIndex(e)
            }}
            selectedUbarSetting={selectedUbarSetting}
          />
          {hideSettings.hide_insulation_settings.hide_insulation_from_window_settings === false && <InsulationSettingComponent 
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
          />}
          {hideSettings.hide_vents_settings.hide_from_builder === false && <VentsSettingComponent
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
          />}
          {hideSettings.hide_lock_placement_settings.hide_from_builder === false && <LockPlacementSettingComponent
            additional_price={changedPriceWithLock}
            setAdditionalPriceForLock={(option, e) => changePricewithLock(option, e)}
            properties={adminProperties.lock_placement_group && adminProperties.lock_placement_group}
          />}
          {hideSettings.hide_panel_settings.hide_from_builder === false && <PanelSettingComponent
            additional_price={changedPriceWithPanel}
            panels={adminProperties.panels}
            onSelectPanelType={(e) => {
              console.log(e);
              changePriceWithPanelGroup(e);
            }}
          />}
          <HeadroomSettingComponent
            additional_price={changedPriceWithHeadRoom}
            headroomProperty={adminProperties.headroom}
            onSelectHeadroomType={(e) => {
              changePriceWithHeadRoom(e);
            }}
          />
          {hideSettings.hide_roller_type_settings.hide_from_builder === false && <RollerTypeSettingComponent
            additional_price={changedPriceWithRollerType}
            properties={adminProperties.roller_type_group && adminProperties.roller_type_group}
            setAdditionalPriceForRollerType={(type, e) => changePriceWithRollerType(type, e)}
          />}
          {hideSettings.hide_track_radius_settings.hide_from_builder === false && <TrackRadiusSettingComponent
            additional_price={changedPriceWithTrackRadius}
            properties={adminProperties.track_radius_group}
            enablePrice={(radius, e) => changePriceWithTrackRadius(radius, e)}
          />}
          <ColorsSettingComponent
            colorIndex={colorIndex}
            onChange={(color, e) => {
              setMetaObject({
                ...metaObj,
                standardColor: {
                  color: color
                }
              });
              if (e > -1) {
                setPremiumColorIndex(-1);
              }
              setColorIndex(e);
            }}
            properties={adminProperties.standard_colors_group}
          />
          {hideSettings.hide_premium_colors_settings.hide_from_builder === false && <PremiumColorsSettingComponent
            properties={adminProperties.premium_colors_group}
            colorIndex={premiumColorIndex}
            enablePrice={(color, e, index) => {
              setMetaObject({
                ...metaObj,
                premiumColor: {
                  color: color
                }
              });
              setPremiumColorIndex(index);
              // if (index > -1) {
              //   setColorIndex(-1);
              // }
              // changePriceWithPremiumColor(e);
            }}
          />}
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