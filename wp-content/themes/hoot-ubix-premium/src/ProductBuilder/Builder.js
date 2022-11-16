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
  
  const [price, setPrice] = useState(Number(doorSettings.basePrice));

  const [hasSizeValidationError, setSizeValidationError] = useState(false);
  
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (showCustomPanel === true ) {
      jQuery('body').addClass('no-scroll');
    } else {
      jQuery('body').removeClass('no-scroll');
    }
  }, [showCustomPanel])

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
    let rollerType = metaObj.rollerType;
    if (hideSettings.hide_lock_placement_settings.hide_from_builder == false) {
      // Do something with hide lock from builder
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

    setMetaObject({
      ...metaObj,
      rollerType,
    });
    setPrice(initialPrice);
    setIsInitialized(true);
  }, [isInitialized]);

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
          <ProductContainerComponent />
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
          { hideSettings.hide_windows_settings.hide_windows_setting_from_builder === false && <WindowsSettingComponent/> }
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
          { hideSettings.hide_vents_settings.hide_from_builder === false && <VentsSettingComponent /> }
          { hideSettings.hide_lock_placement_settings.hide_from_builder === false && <LockPlacementSettingComponent />}
          { hideSettings.hide_panel_settings.hide_from_builder === false && <PanelSettingComponent />}
          <HeadroomSettingComponent/>
          { hideSettings.hide_roller_type_settings.hide_from_builder === false && <RollerTypeSettingComponent
            additional_price={changedPriceWithRollerType}
            properties={adminProps.roller_type_group && adminProps.roller_type_group}
            setAdditionalPriceForRollerType={(type, e) => changePriceWithRollerType(type, e)}
          />}
          { hideSettings.hide_track_radius_settings.hide_from_builder === false && <TrackRadiusSettingComponent /> }
          <ColorsSettingComponent />
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