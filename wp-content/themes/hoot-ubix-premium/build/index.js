/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ProductBuilder/Builder.js":
/*!***************************************!*\
  !*** ./src/ProductBuilder/Builder.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img_logo.png */ "./src/assets/img_logo.png");
/* harmony import */ var _SettingsComponents_SizeChangeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsComponents/SizeChangeComponent */ "./src/ProductBuilder/SettingsComponents/SizeChangeComponent.js");
/* harmony import */ var _SettingsComponents_WindowsSettingComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsComponents/WindowsSettingComponent */ "./src/ProductBuilder/SettingsComponents/WindowsSettingComponent.js");
/* harmony import */ var _SettingsComponents_InsulationSettingComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsComponents/InsulationSettingComponent */ "./src/ProductBuilder/SettingsComponents/InsulationSettingComponent.js");
/* harmony import */ var _SettingsComponents_VentsSettingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingsComponents/VentsSettingComponent */ "./src/ProductBuilder/SettingsComponents/VentsSettingComponent.js");
/* harmony import */ var _SettingsComponents_LockPlacementSettingComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SettingsComponents/LockPlacementSettingComponent */ "./src/ProductBuilder/SettingsComponents/LockPlacementSettingComponent.js");
/* harmony import */ var _SettingsComponents_PanelSettingComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SettingsComponents/PanelSettingComponent */ "./src/ProductBuilder/SettingsComponents/PanelSettingComponent.js");
/* harmony import */ var _SettingsComponents_RollerTypeSettingComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SettingsComponents/RollerTypeSettingComponent */ "./src/ProductBuilder/SettingsComponents/RollerTypeSettingComponent.js");
/* harmony import */ var _SettingsComponents_TrackRadiusSettingComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SettingsComponents/TrackRadiusSettingComponent */ "./src/ProductBuilder/SettingsComponents/TrackRadiusSettingComponent.js");
/* harmony import */ var _SettingsComponents_ColorsSettingComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SettingsComponents/ColorsSettingComponent */ "./src/ProductBuilder/SettingsComponents/ColorsSettingComponent.js");
/* harmony import */ var _SettingsComponents_PremiumColorsSettingComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SettingsComponents/PremiumColorsSettingComponent */ "./src/ProductBuilder/SettingsComponents/PremiumColorsSettingComponent.js");
/* harmony import */ var _CustomProductComponents_ProductContainerComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CustomProductComponents/ProductContainerComponent */ "./src/ProductBuilder/CustomProductComponents/ProductContainerComponent.js");















const Builder = () => {
  const [hasWindow, setHasWindow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [hasVents, setHasVents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-builder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__,
    className: "logo"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Hurricane Garage Doors Product BuiLder")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-builder-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CustomProductComponents_ProductContainerComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    hasWindow: hasWindow,
    hasVents: hasVents
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-custom-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-title-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Customization Settings")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_SizeChangeComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_WindowsSettingComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasWindow: hasWindow,
    onChange: e => setHasWindow(e)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_InsulationSettingComponent__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_VentsSettingComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hasVents: hasVents,
    onChange: e => setHasVents(e)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_LockPlacementSettingComponent__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_PanelSettingComponent__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_RollerTypeSettingComponent__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_TrackRadiusSettingComponent__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_ColorsSettingComponent__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsComponents_PremiumColorsSettingComponent__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component addCartButton"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "btn btn-add-cart"
  }, "Add to Cart")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Builder);

/***/ }),

/***/ "./src/ProductBuilder/CustomProductComponents/ProductContainerComponent.js":
/*!*********************************************************************************!*\
  !*** ./src/ProductBuilder/CustomProductComponents/ProductContainerComponent.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WindowComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WindowComponent */ "./src/ProductBuilder/CustomProductComponents/WindowComponent.js");
/* harmony import */ var _VentsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VentsComponent */ "./src/ProductBuilder/CustomProductComponents/VentsComponent.js");




const ProductContainerComponent = _ref => {
  let {
    hasWindow,
    hasVents
  } = _ref;
  let windows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "product-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wall-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outline-door"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inline-door"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inline-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "window-wrapper"
  }, windows.map((e, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WindowComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      enableWindow: hasWindow
    });
  })), hasVents && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_VentsComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductContainerComponent);

/***/ }),

/***/ "./src/ProductBuilder/CustomProductComponents/VentsComponent.js":
/*!**********************************************************************!*\
  !*** ./src/ProductBuilder/CustomProductComponents/VentsComponent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_vent_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/img_vent_background.png */ "./src/assets/img_vent_background.png");



const VentsComponent = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vent-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_img_vent_background_png__WEBPACK_IMPORTED_MODULE_1__
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vent-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_img_vent_background_png__WEBPACK_IMPORTED_MODULE_1__
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vent-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_img_vent_background_png__WEBPACK_IMPORTED_MODULE_1__
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "vent-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _assets_img_vent_background_png__WEBPACK_IMPORTED_MODULE_1__
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (VentsComponent);

/***/ }),

/***/ "./src/ProductBuilder/CustomProductComponents/WindowComponent.js":
/*!***********************************************************************!*\
  !*** ./src/ProductBuilder/CustomProductComponents/WindowComponent.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  render,
  useState
} = wp.element;

const WindowComponent = _ref => {
  let {
    enableWindow
  } = _ref;
  const [hasWindow, setHasWindow] = useState(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `window-item ${hasWindow ? 'active-window' : 'no-window'} ${enableWindow ? '' : 'disableWindow'}`
  }, hasWindow == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "btn btn-add",
    onClick: e => setHasWindow(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.15625 6.34375V0H6.34375V6.34375H0V8.15625H6.34375V14.5H8.15625V8.15625H14.5V6.34375H8.15625Z",
    fill: "#1D1E1D"
  }))), hasWindow == true && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "btn btn-remove",
    onClick: e => setHasWindow(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14.1973 10.3435L14.1973 17.0883",
    stroke: "#C83939",
    "stroke-width": "1.92708",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.3438 10.3435L10.3438 17.0883",
    stroke: "#C83939",
    "stroke-width": "1.92708",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18.0518 6.48926H6.48926V19.9788C6.48926 20.511 6.92065 20.9424 7.4528 20.9424H17.0882C17.6204 20.9424 18.0518 20.511 18.0518 19.9788V6.48926Z",
    stroke: "#C83939",
    "stroke-width": "1.92708",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4.5625 6.48926H19.9792",
    stroke: "#C83939",
    "stroke-width": "1.92708",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.1608 3.59863H9.37956C8.84741 3.59863 8.41602 4.03003 8.41602 4.56217V6.48926H16.1243V4.56217C16.1243 4.03003 15.693 3.59863 15.1608 3.59863Z",
    stroke: "#C83939",
    "stroke-width": "1.92708",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WindowComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/ColorsSettingComponent.js":
/*!*************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/ColorsSettingComponent.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const ColorsSettingComponent = () => {
  let colors = ['#ADA487', '#D1C394', '#9A8333'];
  const [option, setOption] = useState(0);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component colors-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Colors"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center colors-wrapper"
  }, colors.map((e, index) => {
    console.log('index=', index);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "color-item",
      style: {
        border: `2px solid ${option == index ? e : '#FFF'}`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "btn-color button",
      style: {
        backgroundColor: `${e}`
      },
      onClick: e => setOption(index)
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorsSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/InsulationSettingComponent.js":
/*!*****************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/InsulationSettingComponent.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const InsulationSettingComponent = () => {
  const [insulation, setInsulation] = useState(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component insulation-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "d-flex align-items-center justify-content-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Insulation"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: e => {
      setInsulation(e);
    },
    checked: insulation,
    width: 40,
    height: 20,
    onColor: '#1396E7',
    checkedIcon: '',
    uncheckedIcon: ''
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InsulationSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/LockPlacementSettingComponent.js":
/*!********************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/LockPlacementSettingComponent.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const LockPlacementSettingComponent = () => {
  const [option, setOption] = useState(1);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component lock-placement-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Lock Placement"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex button-wrapper align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `button ${option == 1 ? 'active' : ''}`,
    onClick: e => {
      setOption(1);
    }
  }, "Inside"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `button ${option == 2 ? 'active' : ''}`,
    onClick: e => {
      setOption(2);
    }
  }, "Outside")));
};

/* harmony default export */ __webpack_exports__["default"] = (LockPlacementSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/PanelSettingComponent.js":
/*!************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/PanelSettingComponent.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const PanelSettingComponent = () => {
  const [option, setOption] = useState(1);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component lock-placement-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Panel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex button-wrapper align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `button ${option == 1 ? 'active' : ''}`,
    onClick: e => {
      setOption(1);
    }
  }, "Raised"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `button ${option == 2 ? 'active' : ''}`,
    onClick: e => {
      setOption(2);
    }
  }, "Flush")));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/PremiumColorsSettingComponent.js":
/*!********************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/PremiumColorsSettingComponent.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const PremiumColorsSettingComponent = () => {
  let colors = ['#E3B718', '#B85C28', '#4F4C45'];
  const [option, setOption] = useState(0);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component colors-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex justify-content-beteen align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Premium Colors"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "addPrice"
  }, "+$50")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center colors-wrapper"
  }, colors.map((e, index) => {
    console.log('index = ', index);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "color-item",
      style: {
        border: `2px solid ${option === index ? e : '#FFF'}`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "btn-color button",
      style: {
        backgroundColor: `${e}`
      },
      onClick: e => setOption(index)
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PremiumColorsSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/RollerTypeSettingComponent.js":
/*!*****************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/RollerTypeSettingComponent.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const RollerTypeSettingComponent = () => {
  const [option, setOption] = useState(1);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component lock-placement-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Roller Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex button-wrapper align-items-center justify-content-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    class: "radio-container"
  }, "2\u201D Steel Nylon", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    checked: "checked",
    name: "radio",
    value: "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "checkmark"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    class: "radio-container"
  }, "3\u201D Steel Nylon", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    checked: "checked",
    name: "radio",
    value: "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "checkmark"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RollerTypeSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/SizeChangeComponent.js":
/*!**********************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/SizeChangeComponent.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const SizeChangeComponent = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Size"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "size-settings-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "width-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "W"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "width"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "height-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "H"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    name: "height"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SizeChangeComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/TrackRadiusSettingComponent.js":
/*!******************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/TrackRadiusSettingComponent.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js");

const {
  render,
  useState
} = wp.element;



const TrackRadiusSettingComponent = () => {
  const [value, setValue] = useState(1);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component track-radius-settings slider-bar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Track Radius"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ariaLabelledby: "slider-label",
    className: "horizontal-slider",
    thumbClassName: "example-thumb",
    trackClassName: "example-track",
    renderThumb: (props, state) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", props, state.valueNow),
    step: 0.1,
    min: 1,
    max: 10,
    value: value,
    onChange: e => {
      setValue(e);
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TrackRadiusSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/VentsSettingComponent.js":
/*!************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/VentsSettingComponent.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const VentsSettingComponent = _ref => {
  let {
    hasVents,
    onChange
  } = _ref;
  // const [vents, setVents] = useState(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component vents-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "d-flex align-items-center justify-content-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Vents"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: e => {
      onChange(e);
    },
    checked: hasVents,
    width: 40,
    height: 20,
    onColor: '#1396E7',
    checkedIcon: '',
    uncheckedIcon: ''
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (VentsSettingComponent);

/***/ }),

/***/ "./src/ProductBuilder/SettingsComponents/WindowsSettingComponent.js":
/*!**************************************************************************!*\
  !*** ./src/ProductBuilder/SettingsComponents/WindowsSettingComponent.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");

const {
  render,
  useState
} = wp.element;


const WindowsSettingComponent = _ref => {
  let {
    hasWindow,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "product-setting-item-component window-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "d-flex align-items-center justify-content-between"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Windows"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: e => {
      onChange(e);
    },
    checked: hasWindow,
    width: 40,
    height: 20,
    onColor: '#1396E7',
    checkedIcon: '',
    uncheckedIcon: ''
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "description"
  }, "Click on a window space to add or delete windows."));
};

/* harmony default export */ __webpack_exports__["default"] = (WindowsSettingComponent);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductBuilder_Builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductBuilder/Builder */ "./src/ProductBuilder/Builder.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

const {
  render,
  useState
} = wp.element;



const Votes = () => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    // setVotes(votes + 1);
    // console.log(jQuery('#section-woocommerce'));
    let formData = {
      action: 'ajaxHandleForTestHook',
      item_id: 1,
      values: 10
    };
    jQuery.ajax({
      type: "post",
      dataType: "json",
      url: 'http://localhost/garage/wp-admin/admin-ajax.php',
      data: formData,
      success: function (msg) {
        console.log(msg);
      }
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ProductBuilder_Builder__WEBPACK_IMPORTED_MODULE_1__["default"], null) // <div>
  //   <p>
  //     <button onClick={addVote}>Call the Hooks</button>
  //   </p>
  // </div>
  ;
};

render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Votes, null), document.getElementById('single-product-builder'));

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-slider/es/components/ReactSlider/ReactSlider.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brians/git/react-slider/src/components/ReactSlider/ReactSlider.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * To prevent text selection while dragging.
 * http://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
 */

function pauseEvent(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }

  if (e && e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function stopPropagation(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
}

function sanitizeInValue(x) {
  if (x == null) {
    return [];
  }

  return Array.isArray(x) ? x.slice() : [x];
}

function prepareOutValue(x) {
  return x !== null && x.length === 1 ? x[0] : x.slice();
}

function trimSucceeding(length, nextValue, minDistance, max) {
  for (var i = 0; i < length; i += 1) {
    var padding = max - i * minDistance;

    if (nextValue[length - 1 - i] > padding) {
      // eslint-disable-next-line no-param-reassign
      nextValue[length - 1 - i] = padding;
    }
  }
}

function trimPreceding(length, nextValue, minDistance, min) {
  for (var i = 0; i < length; i += 1) {
    var padding = min + i * minDistance;

    if (nextValue[i] < padding) {
      // eslint-disable-next-line no-param-reassign
      nextValue[i] = padding;
    }
  }
}

function addHandlers(eventMap) {
  Object.keys(eventMap).forEach(function (key) {
    if (typeof document !== 'undefined') {
      document.addEventListener(key, eventMap[key], false);
    }
  });
}

function removeHandlers(eventMap) {
  Object.keys(eventMap).forEach(function (key) {
    if (typeof document !== 'undefined') {
      document.removeEventListener(key, eventMap[key], false);
    }
  });
}

function trimAlignValue(val, props) {
  return alignValue(trimValue(val, props), props);
}

function alignValue(val, props) {
  var valModStep = (val - props.min) % props.step;
  var alignedValue = val - valModStep;

  if (Math.abs(valModStep) * 2 >= props.step) {
    alignedValue += valModStep > 0 ? props.step : -props.step;
  }

  return parseFloat(alignedValue.toFixed(5));
}

function trimValue(val, props) {
  var trimmed = val;

  if (trimmed <= props.min) {
    trimmed = props.min;
  }

  if (trimmed >= props.max) {
    trimmed = props.max;
  }

  return trimmed;
}

var ReactSlider = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReactSlider, _React$Component);

  function ReactSlider(_props) {
    var _this;

    _this = _React$Component.call(this, _props) || this;

    _this.onKeyUp = function () {
      _this.onEnd();
    };

    _this.onMouseUp = function () {
      _this.onEnd(_this.getMouseEventMap());
    };

    _this.onTouchEnd = function () {
      _this.onEnd(_this.getTouchEventMap());
    };

    _this.onBlur = function () {
      _this.setState({
        index: -1
      }, _this.onEnd(_this.getKeyDownEventMap()));
    };

    _this.onMouseMove = function (e) {
      // Prevent controlled updates from happening while mouse is moving
      _this.setState({
        pending: true
      });

      var position = _this.getMousePosition(e);

      var diffPosition = _this.getDiffPosition(position[0]);

      var newValue = _this.getValueFromPosition(diffPosition);

      _this.move(newValue);
    };

    _this.onTouchMove = function (e) {
      if (e.touches.length > 1) {
        return;
      } // Prevent controlled updates from happending while touch is moving


      _this.setState({
        pending: true
      });

      var position = _this.getTouchPosition(e);

      if (typeof _this.isScrolling === 'undefined') {
        var diffMainDir = position[0] - _this.startPosition[0];
        var diffScrollDir = position[1] - _this.startPosition[1];
        _this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
      }

      if (_this.isScrolling) {
        _this.setState({
          index: -1
        });

        return;
      }

      var diffPosition = _this.getDiffPosition(position[0]);

      var newValue = _this.getValueFromPosition(diffPosition);

      _this.move(newValue);
    };

    _this.onKeyDown = function (e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      } // Prevent controlled updates from happening while a key is pressed


      _this.setState({
        pending: true
      });

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'Left':
        case 'Down':
          e.preventDefault();

          _this.moveDownByStep();

          break;

        case 'ArrowRight':
        case 'ArrowUp':
        case 'Right':
        case 'Up':
          e.preventDefault();

          _this.moveUpByStep();

          break;

        case 'Home':
          e.preventDefault();

          _this.move(_this.props.min);

          break;

        case 'End':
          e.preventDefault();

          _this.move(_this.props.max);

          break;

        case 'PageDown':
          e.preventDefault();

          _this.moveDownByStep(_this.props.pageFn(_this.props.step));

          break;

        case 'PageUp':
          e.preventDefault();

          _this.moveUpByStep(_this.props.pageFn(_this.props.step));

          break;

        default:
      }
    };

    _this.onSliderMouseDown = function (e) {
      // do nothing if disabled or right click
      if (_this.props.disabled || e.button === 2) {
        return;
      } // Prevent controlled updates from happening while mouse is moving


      _this.setState({
        pending: true
      });

      if (!_this.props.snapDragDisabled) {
        var position = _this.getMousePosition(e);

        _this.forceValueFromPosition(position[0], function (i) {
          _this.start(i, position[0]);

          addHandlers(_this.getMouseEventMap());
        });
      }

      pauseEvent(e);
    };

    _this.onSliderClick = function (e) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onSliderClick && !_this.hasMoved) {
        var position = _this.getMousePosition(e);

        var valueAtPos = trimAlignValue(_this.calcValue(_this.calcOffsetFromPosition(position[0])), _this.props);

        _this.props.onSliderClick(valueAtPos);
      }
    };

    _this.createOnKeyDown = function (i) {
      return function (e) {
        if (_this.props.disabled) {
          return;
        }

        _this.start(i);

        addHandlers(_this.getKeyDownEventMap());
        pauseEvent(e);
      };
    };

    _this.createOnMouseDown = function (i) {
      return function (e) {
        // do nothing if disabled or right click
        if (_this.props.disabled || e.button === 2) {
          return;
        } // Prevent controlled updates from happending while mouse is moving


        _this.setState({
          pending: true
        });

        var position = _this.getMousePosition(e);

        _this.start(i, position[0]);

        addHandlers(_this.getMouseEventMap());
        pauseEvent(e);
      };
    };

    _this.createOnTouchStart = function (i) {
      return function (e) {
        if (_this.props.disabled || e.touches.length > 1) {
          return;
        } // Prevent controlled updates from happending while touch is moving


        _this.setState({
          pending: true
        });

        var position = _this.getTouchPosition(e);

        _this.startPosition = position; // don't know yet if the user is trying to scroll

        _this.isScrolling = undefined;

        _this.start(i, position[0]);

        addHandlers(_this.getTouchEventMap());
        stopPropagation(e);
      };
    };

    _this.handleResize = function () {
      // setTimeout of 0 gives element enough time to have assumed its new size if
      // it is being resized
      var resizeTimeout = window.setTimeout(function () {
        // drop this timeout from pendingResizeTimeouts to reduce memory usage
        _this.pendingResizeTimeouts.shift();

        _this.resize();
      }, 0);

      _this.pendingResizeTimeouts.push(resizeTimeout);
    };

    _this.renderThumb = function (style, i) {
      var className = _this.props.thumbClassName + " " + _this.props.thumbClassName + "-" + i + " " + (_this.state.index === i ? _this.props.thumbActiveClassName : '');
      var props = {
        'ref': function ref(r) {
          _this["thumb" + i] = r;
        },
        'key': _this.props.thumbClassName + "-" + i,
        className: className,
        style: style,
        'onMouseDown': _this.createOnMouseDown(i),
        'onTouchStart': _this.createOnTouchStart(i),
        'onFocus': _this.createOnKeyDown(i),
        'tabIndex': 0,
        'role': 'slider',
        'aria-orientation': _this.props.orientation,
        'aria-valuenow': _this.state.value[i],
        'aria-valuemin': _this.props.min,
        'aria-valuemax': _this.props.max,
        'aria-label': Array.isArray(_this.props.ariaLabel) ? _this.props.ariaLabel[i] : _this.props.ariaLabel,
        'aria-labelledby': Array.isArray(_this.props.ariaLabelledby) ? _this.props.ariaLabelledby[i] : _this.props.ariaLabelledby
      };
      var state = {
        index: i,
        value: prepareOutValue(_this.state.value),
        valueNow: _this.state.value[i]
      };

      if (_this.props.ariaValuetext) {
        props['aria-valuetext'] = typeof _this.props.ariaValuetext === 'string' ? _this.props.ariaValuetext : _this.props.ariaValuetext(state);
      }

      return _this.props.renderThumb(props, state);
    };

    _this.renderTrack = function (i, offsetFrom, offsetTo) {
      var props = {
        key: _this.props.trackClassName + "-" + i,
        className: _this.props.trackClassName + " " + _this.props.trackClassName + "-" + i,
        style: _this.buildTrackStyle(offsetFrom, _this.state.upperBound - offsetTo)
      };
      var state = {
        index: i,
        value: prepareOutValue(_this.state.value)
      };
      return _this.props.renderTrack(props, state);
    };

    var value = sanitizeInValue(_props.value);

    if (!value.length) {
      value = sanitizeInValue(_props.defaultValue);
    } // array for storing resize timeouts ids


    _this.pendingResizeTimeouts = [];
    var zIndices = [];

    for (var i = 0; i < value.length; i += 1) {
      value[i] = trimAlignValue(value[i], _props);
      zIndices.push(i);
    }

    _this.state = {
      index: -1,
      upperBound: 0,
      sliderLength: 0,
      value: value,
      zIndices: zIndices
    };
    return _this;
  }

  var _proto = ReactSlider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
      this.resize();
    }
  } // Keep the internal `value` consistent with an outside `value` if present.
  // This basically allows the slider to be a controlled component.
  ;

  ReactSlider.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var value = sanitizeInValue(props.value);

    if (!value.length) {
      return null;
    } // Do not allow controlled upates to happen while we have pending updates


    if (state.pending) {
      return null;
    }

    return {
      value: value.map(function (item) {
        return trimAlignValue(item, props);
      })
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // If an upperBound has not yet been determined (due to the component being hidden
    // during the mount event, or during the last resize), then calculate it now
    if (this.state.upperBound === 0) {
      this.resize();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearPendingResizeTimeouts();

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  };

  _proto.onEnd = function onEnd(eventMap) {
    if (eventMap) {
      removeHandlers(eventMap);
    }

    if (this.hasMoved) {
      this.fireChangeEvent('onAfterChange');
    } // Allow controlled updates to continue


    this.setState({
      pending: false
    });
    this.hasMoved = false;
  };

  _proto.getValue = function getValue() {
    return prepareOutValue(this.state.value);
  };

  _proto.getClosestIndex = function getClosestIndex(pixelOffset) {
    var minDist = Number.MAX_VALUE;
    var closestIndex = -1;
    var value = this.state.value;
    var l = value.length;

    for (var i = 0; i < l; i += 1) {
      var offset = this.calcOffset(value[i]);
      var dist = Math.abs(pixelOffset - offset);

      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }

    return closestIndex;
  };

  _proto.getMousePosition = function getMousePosition(e) {
    return [e["page" + this.axisKey()], e["page" + this.orthogonalAxisKey()]];
  };

  _proto.getTouchPosition = function getTouchPosition(e) {
    var touch = e.touches[0];
    return [touch["page" + this.axisKey()], touch["page" + this.orthogonalAxisKey()]];
  };

  _proto.getKeyDownEventMap = function getKeyDownEventMap() {
    return {
      keydown: this.onKeyDown,
      keyup: this.onKeyUp,
      focusout: this.onBlur
    };
  };

  _proto.getMouseEventMap = function getMouseEventMap() {
    return {
      mousemove: this.onMouseMove,
      mouseup: this.onMouseUp
    };
  };

  _proto.getTouchEventMap = function getTouchEventMap() {
    return {
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd
    };
  };

  _proto.getValueFromPosition = function getValueFromPosition(position) {
    var diffValue = position / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return trimAlignValue(this.state.startValue + diffValue, this.props);
  };

  _proto.getDiffPosition = function getDiffPosition(position) {
    var diffPosition = position - this.state.startPosition;

    if (this.props.invert) {
      diffPosition *= -1;
    }

    return diffPosition;
  } // create the `keydown` handler for the i-th thumb
  ;

  _proto.resize = function resize() {
    var slider = this.slider,
        thumb = this.thumb0;

    if (!slider || !thumb) {
      return;
    }

    var sizeKey = this.sizeKey(); // For the slider size, we want to use the client width/height, excluding any borders

    var sliderRect = slider.getBoundingClientRect();
    var sliderSize = slider[sizeKey];
    var sliderMax = sliderRect[this.posMaxKey()];
    var sliderMin = sliderRect[this.posMinKey()]; // For the thumb size, we want to use the outer width/height, including any borders

    var thumbRect = thumb.getBoundingClientRect();
    var thumbSize = thumbRect[sizeKey.replace('client', '').toLowerCase()];
    var upperBound = sliderSize - thumbSize;
    var sliderLength = Math.abs(sliderMax - sliderMin);

    if (this.state.upperBound !== upperBound || this.state.sliderLength !== sliderLength || this.state.thumbSize !== thumbSize) {
      this.setState({
        upperBound: upperBound,
        sliderLength: sliderLength,
        thumbSize: thumbSize
      });
    }
  } // calculates the offset of a thumb in pixels based on its value.
  ;

  _proto.calcOffset = function calcOffset(value) {
    var range = this.props.max - this.props.min;

    if (range === 0) {
      return 0;
    }

    var ratio = (value - this.props.min) / range;
    return ratio * this.state.upperBound;
  } // calculates the value corresponding to a given pixel offset, i.e. the inverse of `calcOffset`.
  ;

  _proto.calcValue = function calcValue(offset) {
    var ratio = offset / this.state.upperBound;
    return ratio * (this.props.max - this.props.min) + this.props.min;
  };

  _proto.calcOffsetFromPosition = function calcOffsetFromPosition(position) {
    var slider = this.slider;
    var sliderRect = slider.getBoundingClientRect();
    var sliderMax = sliderRect[this.posMaxKey()];
    var sliderMin = sliderRect[this.posMinKey()]; // The `position` value passed in is the mouse position based on the window height.
    // The slider bounding rect is based on the viewport, so we must add the window scroll
    // offset to normalize the values.

    var windowOffset = window["page" + this.axisKey() + "Offset"];
    var sliderStart = windowOffset + (this.props.invert ? sliderMax : sliderMin);
    var pixelOffset = position - sliderStart;

    if (this.props.invert) {
      pixelOffset = this.state.sliderLength - pixelOffset;
    }

    pixelOffset -= this.state.thumbSize / 2;
    return pixelOffset;
  } // Snaps the nearest thumb to the value corresponding to `position`
  // and calls `callback` with that thumb's index.
  ;

  _proto.forceValueFromPosition = function forceValueFromPosition(position, callback) {
    var _this2 = this;

    var pixelOffset = this.calcOffsetFromPosition(position);
    var closestIndex = this.getClosestIndex(pixelOffset);
    var nextValue = trimAlignValue(this.calcValue(pixelOffset), this.props); // Clone this.state.value since we'll modify it temporarily
    // eslint-disable-next-line zillow/react/no-access-state-in-setstate

    var value = this.state.value.slice();
    value[closestIndex] = nextValue; // Prevents the slider from shrinking below `props.minDistance`

    for (var i = 0; i < value.length - 1; i += 1) {
      if (value[i + 1] - value[i] < this.props.minDistance) {
        return;
      }
    }

    this.fireChangeEvent('onBeforeChange');
    this.hasMoved = true;
    this.setState({
      value: value
    }, function () {
      callback(closestIndex);

      _this2.fireChangeEvent('onChange');
    });
  } // clear all pending timeouts to avoid error messages after unmounting
  ;

  _proto.clearPendingResizeTimeouts = function clearPendingResizeTimeouts() {
    do {
      var nextTimeout = this.pendingResizeTimeouts.shift();
      clearTimeout(nextTimeout);
    } while (this.pendingResizeTimeouts.length);
  };

  _proto.start = function start(i, position) {
    var thumbRef = this["thumb" + i];

    if (thumbRef) {
      thumbRef.focus();
    }

    var zIndices = this.state.zIndices; // remove wherever the element is

    zIndices.splice(zIndices.indexOf(i), 1); // add to end

    zIndices.push(i);
    this.setState(function (prevState) {
      return {
        startValue: prevState.value[i],
        startPosition: position !== undefined ? position : prevState.startPosition,
        index: i,
        zIndices: zIndices
      };
    });
  };

  _proto.moveUpByStep = function moveUpByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }

    var oldValue = this.state.value[this.state.index];
    var newValue = trimAlignValue(oldValue + step, this.props);
    this.move(Math.min(newValue, this.props.max));
  };

  _proto.moveDownByStep = function moveDownByStep(step) {
    if (step === void 0) {
      step = this.props.step;
    }

    var oldValue = this.state.value[this.state.index];
    var newValue = trimAlignValue(oldValue - step, this.props);
    this.move(Math.max(newValue, this.props.min));
  };

  _proto.move = function move(newValue) {
    var _this$state = this.state,
        index = _this$state.index,
        value = _this$state.value;
    var length = value.length; // Short circuit if the value is not changing

    var oldValue = value[index];

    if (newValue === oldValue) {
      return;
    } // Trigger only before the first movement


    if (!this.hasMoved) {
      this.fireChangeEvent('onBeforeChange');
    }

    this.hasMoved = true; // if "pearling" (= thumbs pushing each other) is disabled,
    // prevent the thumb from getting closer than `minDistance` to the previous or next thumb.

    var _this$props = this.props,
        pearling = _this$props.pearling,
        max = _this$props.max,
        min = _this$props.min,
        minDistance = _this$props.minDistance;

    if (!pearling) {
      if (index > 0) {
        var valueBefore = value[index - 1];

        if (newValue < valueBefore + minDistance) {
          // eslint-disable-next-line no-param-reassign
          newValue = valueBefore + minDistance;
        }
      }

      if (index < length - 1) {
        var valueAfter = value[index + 1];

        if (newValue > valueAfter - minDistance) {
          // eslint-disable-next-line no-param-reassign
          newValue = valueAfter - minDistance;
        }
      }
    }

    value[index] = newValue; // if "pearling" is enabled, let the current thumb push the pre- and succeeding thumbs.

    if (pearling && length > 1) {
      if (newValue > oldValue) {
        this.pushSucceeding(value, minDistance, index);
        trimSucceeding(length, value, minDistance, max);
      } else if (newValue < oldValue) {
        this.pushPreceding(value, minDistance, index);
        trimPreceding(length, value, minDistance, min);
      }
    } // Normally you would use `shouldComponentUpdate`,
    // but since the slider is a low-level component,
    // the extra complexity might be worth the extra performance.


    this.setState({
      value: value
    }, this.fireChangeEvent.bind(this, 'onChange'));
  };

  _proto.pushSucceeding = function pushSucceeding(value, minDistance, index) {
    var i;
    var padding;

    for (i = index, padding = value[i] + minDistance; value[i + 1] !== null && padding > value[i + 1]; i += 1, padding = value[i] + minDistance) {
      // eslint-disable-next-line no-param-reassign
      value[i + 1] = alignValue(padding, this.props);
    }
  };

  _proto.pushPreceding = function pushPreceding(value, minDistance, index) {
    for (var i = index, padding = value[i] - minDistance; value[i - 1] !== null && padding < value[i - 1]; i -= 1, padding = value[i] - minDistance) {
      // eslint-disable-next-line no-param-reassign
      value[i - 1] = alignValue(padding, this.props);
    }
  };

  _proto.axisKey = function axisKey() {
    if (this.props.orientation === 'vertical') {
      return 'Y';
    } // Defaults to 'horizontal';


    return 'X';
  };

  _proto.orthogonalAxisKey = function orthogonalAxisKey() {
    if (this.props.orientation === 'vertical') {
      return 'X';
    } // Defaults to 'horizontal'


    return 'Y';
  };

  _proto.posMinKey = function posMinKey() {
    if (this.props.orientation === 'vertical') {
      return this.props.invert ? 'bottom' : 'top';
    } // Defaults to 'horizontal'


    return this.props.invert ? 'right' : 'left';
  };

  _proto.posMaxKey = function posMaxKey() {
    if (this.props.orientation === 'vertical') {
      return this.props.invert ? 'top' : 'bottom';
    } // Defaults to 'horizontal'


    return this.props.invert ? 'left' : 'right';
  };

  _proto.sizeKey = function sizeKey() {
    if (this.props.orientation === 'vertical') {
      return 'clientHeight';
    } // Defaults to 'horizontal'


    return 'clientWidth';
  };

  _proto.fireChangeEvent = function fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](prepareOutValue(this.state.value), this.state.index);
    }
  };

  _proto.buildThumbStyle = function buildThumbStyle(offset, i) {
    var style = {
      position: 'absolute',
      touchAction: 'none',
      willChange: this.state.index >= 0 ? this.posMinKey() : '',
      zIndex: this.state.zIndices.indexOf(i) + 1
    };
    style[this.posMinKey()] = offset + "px";
    return style;
  };

  _proto.buildTrackStyle = function buildTrackStyle(min, max) {
    var obj = {
      position: 'absolute',
      willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : ''
    };
    obj[this.posMinKey()] = min;
    obj[this.posMaxKey()] = max;
    return obj;
  };

  _proto.buildMarkStyle = function buildMarkStyle(offset) {
    var _ref;

    return _ref = {
      position: 'absolute'
    }, _ref[this.posMinKey()] = offset, _ref;
  };

  _proto.renderThumbs = function renderThumbs(offset) {
    var length = offset.length;
    var styles = [];

    for (var i = 0; i < length; i += 1) {
      styles[i] = this.buildThumbStyle(offset[i], i);
    }

    var res = [];

    for (var _i = 0; _i < length; _i += 1) {
      res[_i] = this.renderThumb(styles[_i], _i);
    }

    return res;
  };

  _proto.renderTracks = function renderTracks(offset) {
    var tracks = [];
    var lastIndex = offset.length - 1;
    tracks.push(this.renderTrack(0, 0, offset[0]));

    for (var i = 0; i < lastIndex; i += 1) {
      tracks.push(this.renderTrack(i + 1, offset[i], offset[i + 1]));
    }

    tracks.push(this.renderTrack(lastIndex + 1, offset[lastIndex], this.state.upperBound));
    return tracks;
  };

  _proto.renderMarks = function renderMarks() {
    var _this3 = this;

    var marks = this.props.marks;
    var range = this.props.max - this.props.min + 1;

    if (typeof marks === 'boolean') {
      marks = Array.from({
        length: range
      }).map(function (_, key) {
        return key;
      });
    } else if (typeof marks === 'number') {
      marks = Array.from({
        length: range
      }).map(function (_, key) {
        return key;
      }).filter(function (key) {
        return key % marks === 0;
      });
    }

    return marks.map(parseFloat).sort(function (a, b) {
      return a - b;
    }).map(function (mark) {
      var offset = _this3.calcOffset(mark);

      var props = {
        key: mark,
        className: _this3.props.markClassName,
        style: _this3.buildMarkStyle(offset)
      };
      return _this3.props.renderMark(props);
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var offset = [];
    var value = this.state.value;
    var l = value.length;

    for (var i = 0; i < l; i += 1) {
      offset[i] = this.calcOffset(value[i], i);
    }

    var tracks = this.props.withTracks ? this.renderTracks(offset) : null;
    var thumbs = this.renderThumbs(offset);
    var marks = this.props.marks ? this.renderMarks() : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
      ref: function ref(r) {
        _this4.slider = r;
      },
      style: {
        position: 'relative'
      },
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      onMouseDown: this.onSliderMouseDown,
      onClick: this.onSliderClick
    }, tracks, thumbs, marks);
  };

  return ReactSlider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

ReactSlider.displayName = 'ReactSlider';
ReactSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  pageFn: function pageFn(step) {
    return step * 10;
  },
  minDistance: 0,
  defaultValue: 0,
  orientation: 'horizontal',
  className: 'slider',
  thumbClassName: 'thumb',
  thumbActiveClassName: 'active',
  trackClassName: 'track',
  markClassName: 'mark',
  withTracks: true,
  pearling: false,
  disabled: false,
  snapDragDisabled: false,
  invert: false,
  marks: [],
  renderThumb: function renderThumb(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, props, {
      __self: ReactSlider,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 31
      }
    }));
  },
  renderTrack: function renderTrack(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, props, {
      __self: ReactSlider,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 31
      }
    }));
  },
  renderMark: function renderMark(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, props, {
      __self: ReactSlider,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 30
      }
    }));
  }
};
ReactSlider.propTypes =  true ? {
  /**
   * The minimum value of the slider.
   */
  min: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * The maximum value of the slider.
   */
  max: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Value to be added or subtracted on each step the slider makes.
   * Must be greater than zero.
   * `max - min` should be evenly divisible by the step value.
   */
  step: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * The result of the function is the value to be added or subtracted
   * when the `Page Up` or `Page Down` keys are pressed.
   *
   * The current `step` value will be passed as the only argument.
   * By default, paging will modify `step` by a factor of 10.
   */
  pageFn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * The minimal distance between any pair of thumbs.
   * Must be positive, but zero means they can sit on top of each other.
   */
  minDistance: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),

  /**
   * Determines the initial positions of the thumbs and the number of thumbs.
   *
   * If a number is passed a slider with one thumb will be rendered.
   * If an array is passed each value will determine the position of one thumb.
   * The values in the array must be sorted.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().number))]),

  /**
   * Like `defaultValue` but for
   * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
   */
  // eslint-disable-next-line zillow/react/require-default-props
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().number))]),

  /**
   * Determines whether the slider moves horizontally (from left to right)
   * or vertically (from top to bottom).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['horizontal', 'vertical']),

  /**
   * The css class set on the slider node.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * The css class set on each thumb node.
   *
   * In addition each thumb will receive a numbered css class of the form
   * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
   */
  thumbClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * The css class set on the thumb that is currently being moved.
   */
  thumbActiveClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * If `true` tracks between the thumbs will be rendered.
   */
  withTracks: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * The css class set on the tracks between the thumbs.
   * In addition track fragment will receive a numbered css class of the form
   * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
   */
  trackClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * If `true` the active thumb will push other thumbs
   * within the constraints of `min`, `max`, `step` and `minDistance`.
   */
  pearling: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * If `true` the thumbs can't be moved.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Disables thumb move when clicking the slider track
   */
  snapDragDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Inverts the slider.
   */
  invert: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /**
   * Shows passed marks on the track, if true it shows all the marks,
   * if an array of numbers it shows just the passed marks, if a number is passed
   * it shows just the marks in that steps: like passing 3 shows the marks 3, 6, 9
   */
  marks: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),

  /**
   * The css class set on the marks.
   */
  markClassName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /**
   * Callback called before starting to move a thumb. The callback will only be called if the
   * action will result in a change. The function will be called with two arguments, the first
   * being the initial value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onBeforeChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Callback called on every value change.
   * The function will be called with two arguments, the first being the new value(s)
   * the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Callback called only after moving a thumb has ended. The callback will only be called if
   * the action resulted in a change. The function will be called with two arguments, the
   * first being the result value(s) the second being thumb index.
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line zillow/react/require-default-props, zillow/react/no-unused-prop-types
  onAfterChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Callback called when the the slider is clicked (thumb or tracks).
   * Receives the value at the clicked position as argument.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  onSliderClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * aria-label for screen-readers to apply to the thumbs.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))]),

  /**
   * aria-labelledby for screen-readers to apply to the thumbs.
   * Used when slider rendered with separate label.
   * Use an array for more than one thumb.
   * The length of the array must match the number of thumbs in the value array.
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaLabelledby: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))]),

  /**
   * aria-valuetext for screen-readers.
   * Can be a static string, or a function that returns a string.
   * The function will be passed a single argument,
   * an object with the following properties:
   *
   *     state => `Value: ${state.value}`
   *
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  ariaValuetext: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)]),

  /**
   * Provide a custom render function for the track node.
   * The render function will be passed two arguments,
   * an object with props that should be added to your handle node,
   * and an object with track and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   * - `state.index` {`number`} the index of the track
   * - `state.value` {`number` | `array`} the current value state
   */
  renderTrack: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Provide a custom render function for dynamic thumb content.
   * The render function will be passed two arguments,
   * an object with props that should be added to your thumb node,
   * and an object with thumb and slider state:
   *
   *     (props, state) => <div {...props} />
   *
   * - `props` {`object`} props to be spread into your thumb node
   * - `state.index` {`number`} the index of the thumb
   * - `state.value` {`number` | `array`} the current value state
   * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
   */
  // eslint-disable-next-line zillow/react/require-default-props
  renderThumb: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /**
   * Provide a custom render function for the mark node.
   * The render function will be passed one argument,
   * an object with props that should be added to your handle node
   *
   *     (props) => <span {...props} />
   *
   * - `props` {`object`} props to be spread into your track node
   */
  renderMark: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (ReactSlider);

/***/ }),

/***/ "./node_modules/react-switch/dist/react-switch.dev.js":
/*!************************************************************!*\
  !*** ./node_modules/react-switch/dist/react-switch.dev.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/*
The MIT License (MIT)

Copyright (c) 2015 instructure-react

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var uncheckedIcon = React.createElement('svg', {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
  fill: "#fff",
  fillRule: "evenodd"
}));
var checkedIcon = React.createElement('svg', {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  }
}, React.createElement('path', {
  d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
  fill: "#fff",
  fillRule: "evenodd"
}));

function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

  if (relativePos === 0) {
    return offColor;
  }

  if (relativePos === 1) {
    return onColor;
  }

  var newColor = "#";

  for (var i = 1; i < 6; i += 2) {
    var offComponent = parseInt(offColor.substr(i, 2), 16);
    var onComponent = parseInt(onColor.substr(i, 2), 16);
    var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
    var newComponent = weightedValue.toString(16);

    if (newComponent.length === 1) {
      newComponent = "0" + newComponent;
    }

    newColor += newComponent;
  }

  return newColor;
}

function convertShorthandColor(color) {
  if (color.length === 7) {
    return color;
  }

  var sixDigitColor = "#";

  for (var i = 1; i < 4; i += 1) {
    sixDigitColor += color[i] + color[i];
  }

  return sixDigitColor;
}

function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
  var sixDigitOffColor = convertShorthandColor(offColor);
  var sixDigitOnColor = convertShorthandColor(onColor);
  return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
}

// Make sure color props are strings that start with "#" since other ways to write colors are not supported.
var hexColorPropType = function (props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
    return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
  }

  return null;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var ReactSwitch = /*@__PURE__*/function (Component) {
  function ReactSwitch(props) {
    Component.call(this, props);
    var height = props.height;
    var width = props.width;
    var handleDiameter = props.handleDiameter;
    var checked = props.checked;
    this.$handleDiameter = handleDiameter || height - 2;
    this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
    this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
    this.state = {
      $pos: checked ? this.$checkedPos : this.$uncheckedPos
    };
    this.$lastDragAt = 0;
    this.$lastKeyUpAt = 0;
    this.$onMouseDown = this.$onMouseDown.bind(this);
    this.$onMouseMove = this.$onMouseMove.bind(this);
    this.$onMouseUp = this.$onMouseUp.bind(this);
    this.$onTouchStart = this.$onTouchStart.bind(this);
    this.$onTouchMove = this.$onTouchMove.bind(this);
    this.$onTouchEnd = this.$onTouchEnd.bind(this);
    this.$onClick = this.$onClick.bind(this);
    this.$onInputChange = this.$onInputChange.bind(this);
    this.$onKeyUp = this.$onKeyUp.bind(this);
    this.$setHasOutline = this.$setHasOutline.bind(this);
    this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
    this.$getInputRef = this.$getInputRef.bind(this);
  }

  if (Component) ReactSwitch.__proto__ = Component;
  ReactSwitch.prototype = Object.create(Component && Component.prototype);
  ReactSwitch.prototype.constructor = ReactSwitch;

  ReactSwitch.prototype.componentDidMount = function componentDidMount() {
    this.$isMounted = true;
  };

  ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.checked === this.props.checked) {
      return;
    }

    var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: $pos
    });
  };

  ReactSwitch.prototype.componentWillUnmount = function componentWillUnmount() {
    this.$isMounted = false;
  };

  ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
    this.$inputRef.focus();
    this.setState({
      $startX: clientX,
      $hasOutline: true,
      $dragStartingTime: Date.now()
    });
  };

  ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
    var ref = this.state;
    var $startX = ref.$startX;
    var $isDragging = ref.$isDragging;
    var $pos = ref.$pos;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
    var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

    if (!$isDragging && clientX !== $startX) {
      this.setState({
        $isDragging: true
      });
    }

    var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

    if (newPos !== $pos) {
      this.setState({
        $pos: newPos
      });
    }
  };

  ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
    var ref = this.state;
    var $pos = ref.$pos;
    var $isDragging = ref.$isDragging;
    var $dragStartingTime = ref.$dragStartingTime;
    var ref$1 = this.props;
    var checked = ref$1.checked;
    var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2;
    /*
      Set position state back to the previous position even if user drags the switch with intention to change the state.
      This is to prevent the switch from getting stuck in the middle if the event isn't handled in the onChange callback.
    */

    var prevPos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
    this.setState({
      $pos: prevPos
    }); // Act as if the user clicked the handle if they didn't drag it _or_ the dragged it for less than 250ms

    var timeSinceStart = Date.now() - $dragStartingTime;
    var isSimulatedClick = !$isDragging || timeSinceStart < 250; // Handle when the user has dragged the switch more than halfway from either side

    var isDraggedHalfway = checked && $pos <= halfwayCheckpoint || !checked && $pos >= halfwayCheckpoint;

    if (isSimulatedClick || isDraggedHalfway) {
      this.$onChange(event);
    }

    if (this.$isMounted) {
      this.setState({
        $isDragging: false,
        $hasOutline: false
      });
    }

    this.$lastDragAt = Date.now();
  };

  ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
    event.preventDefault(); // Ignore right click and scroll

    if (typeof event.button === "number" && event.button !== 0) {
      return;
    }

    this.$onDragStart(event.clientX);
    window.addEventListener("mousemove", this.$onMouseMove);
    window.addEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
    event.preventDefault();
    this.$onDrag(event.clientX);
  };

  ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
    this.$onDragStop(event);
    window.removeEventListener("mousemove", this.$onMouseMove);
    window.removeEventListener("mouseup", this.$onMouseUp);
  };

  ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
    this.$checkedStateFromDragging = null;
    this.$onDragStart(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
    this.$onDrag(event.touches[0].clientX);
  };

  ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
    event.preventDefault();
    this.$onDragStop(event);
  };

  ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
    // This condition is unfortunately needed in some browsers where the input's change event might get triggered
    // right after the dragstop event is triggered (occurs when dropping over a label element)
    if (Date.now() - this.$lastDragAt > 50) {
      this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

      if (Date.now() - this.$lastKeyUpAt > 50) {
        if (this.$isMounted) {
          this.setState({
            $hasOutline: false
          });
        }
      }
    }
  };

  ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
    this.$lastKeyUpAt = Date.now();
  };

  ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
    this.setState({
      $hasOutline: true
    });
  };

  ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
    this.setState({
      $hasOutline: false
    });
  };

  ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
    this.$inputRef = el;
  };

  ReactSwitch.prototype.$onClick = function $onClick(event) {
    event.preventDefault();
    this.$inputRef.focus();
    this.$onChange(event);

    if (this.$isMounted) {
      this.setState({
        $hasOutline: false
      });
    }
  };

  ReactSwitch.prototype.$onChange = function $onChange(event) {
    var ref = this.props;
    var checked = ref.checked;
    var onChange = ref.onChange;
    var id = ref.id;
    onChange(!checked, event, id);
  };

  ReactSwitch.prototype.render = function render() {
    var ref = this.props;
    var checked = ref.checked;
    var disabled = ref.disabled;
    var className = ref.className;
    var offColor = ref.offColor;
    var onColor = ref.onColor;
    var offHandleColor = ref.offHandleColor;
    var onHandleColor = ref.onHandleColor;
    var checkedIcon = ref.checkedIcon;
    var uncheckedIcon = ref.uncheckedIcon;
    var checkedHandleIcon = ref.checkedHandleIcon;
    var uncheckedHandleIcon = ref.uncheckedHandleIcon;
    var boxShadow = ref.boxShadow;
    var activeBoxShadow = ref.activeBoxShadow;
    var height = ref.height;
    var width = ref.width;
    var borderRadius = ref.borderRadius;
    var handleDiameter = ref.handleDiameter;
    var rest$1 = objectWithoutProperties(ref, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]);
    var rest = rest$1;
    var ref$1 = this.state;
    var $pos = ref$1.$pos;
    var $isDragging = ref$1.$isDragging;
    var $hasOutline = ref$1.$hasOutline;
    var rootStyle = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: disabled ? 0.5 : 1,
      direction: "ltr",
      borderRadius: height / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var backgroundStyle = {
      height: height,
      width: width,
      margin: Math.max(0, (this.$handleDiameter - height) / 2),
      position: "relative",
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
      borderRadius: typeof borderRadius === "number" ? borderRadius : height / 2,
      cursor: disabled ? "default" : "pointer",
      WebkitTransition: $isDragging ? null : "background 0.25s",
      MozTransition: $isDragging ? null : "background 0.25s",
      transition: $isDragging ? null : "background 0.25s"
    };
    var checkedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "relative",
      opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var uncheckedIconStyle = {
      height: height,
      width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
      position: "absolute",
      opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var handleStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
      display: "inline-block",
      cursor: disabled ? "default" : "pointer",
      borderRadius: typeof borderRadius === "number" ? borderRadius - 1 : "50%",
      position: "absolute",
      transform: "translateX(" + $pos + "px)",
      top: Math.max(0, (height - this.$handleDiameter) / 2),
      outline: 0,
      boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
      border: 0,
      WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    };
    var uncheckedHandleIconStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      opacity: Math.max((1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos) - 0.5) * 2, 0),
      position: "absolute",
      left: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var checkedHandleIconStyle = {
      height: this.$handleDiameter,
      width: this.$handleDiameter,
      opacity: Math.max((($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos) - 0.5) * 2, 0),
      position: "absolute",
      left: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: $isDragging ? null : "opacity 0.25s",
      MozTransition: $isDragging ? null : "opacity 0.25s",
      transition: $isDragging ? null : "opacity 0.25s"
    };
    var inputStyle = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1
    };
    return React.createElement('div', {
      className: className,
      style: rootStyle
    }, React.createElement('div', {
      className: "react-switch-bg",
      style: backgroundStyle,
      onClick: disabled ? null : this.$onClick,
      onMouseDown: function (e) {
        return e.preventDefault();
      }
    }, checkedIcon && React.createElement('div', {
      style: checkedIconStyle
    }, checkedIcon), uncheckedIcon && React.createElement('div', {
      style: uncheckedIconStyle
    }, uncheckedIcon)), React.createElement('div', {
      className: "react-switch-handle",
      style: handleStyle,
      onClick: function (e) {
        return e.preventDefault();
      },
      onMouseDown: disabled ? null : this.$onMouseDown,
      onTouchStart: disabled ? null : this.$onTouchStart,
      onTouchMove: disabled ? null : this.$onTouchMove,
      onTouchEnd: disabled ? null : this.$onTouchEnd,
      onTouchCancel: disabled ? null : this.$unsetHasOutline
    }, uncheckedHandleIcon && React.createElement('div', {
      style: uncheckedHandleIconStyle
    }, uncheckedHandleIcon), checkedHandleIcon && React.createElement('div', {
      style: checkedHandleIconStyle
    }, checkedHandleIcon)), React.createElement('input', _extends({}, {
      type: "checkbox",
      role: "switch",
      'aria-checked': checked,
      checked: checked,
      disabled: disabled,
      style: inputStyle
    }, rest, {
      ref: this.$getInputRef,
      onFocus: this.$setHasOutline,
      onBlur: this.$unsetHasOutline,
      onKeyUp: this.$onKeyUp,
      onChange: this.$onInputChange
    })));
  };

  return ReactSwitch;
}(React.Component);

ReactSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  offColor: hexColorPropType,
  onColor: hexColorPropType,
  offHandleColor: hexColorPropType,
  onHandleColor: hexColorPropType,
  handleDiameter: PropTypes.number,
  uncheckedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  checkedIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  boxShadow: PropTypes.string,
  borderRadius: PropTypes.number,
  activeBoxShadow: PropTypes.string,
  uncheckedHandleIcon: PropTypes.element,
  checkedHandleIcon: PropTypes.element,
  height: PropTypes.number,
  width: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string
};
ReactSwitch.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: uncheckedIcon,
  checkedIcon: checkedIcon,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
};

exports["default"] = ReactSwitch;


/***/ }),

/***/ "./node_modules/react-switch/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-switch/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-switch.dev.js */ "./node_modules/react-switch/dist/react-switch.dev.js");
}


/***/ }),

/***/ "./src/assets/img_logo.png":
/*!*********************************!*\
  !*** ./src/assets/img_logo.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/img_logo.4f15490d.png";

/***/ }),

/***/ "./src/assets/img_vent_background.png":
/*!********************************************!*\
  !*** ./src/assets/img_vent_background.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/img_vent_background.cc04b1db.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhoot_ubix_premium"] = self["webpackChunkhoot_ubix_premium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map