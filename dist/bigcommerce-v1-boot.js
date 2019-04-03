/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _standard_billing_checkout = __webpack_require__(2);

var _standard_billing_checkout2 = _interopRequireDefault(_standard_billing_checkout);

var _standard_shipping_checkout = __webpack_require__(3);

var _standard_shipping_checkout2 = _interopRequireDefault(_standard_shipping_checkout);

var _plugin_manager = __webpack_require__(4);

var _plugin_manager2 = _interopRequireDefault(_plugin_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.AF = window.AF || {};

var _disableGoogleAutocomplete = function _disableGoogleAutocomplete(repetitions) {
  var iframe = document.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');

  if (iframe) {
    iframe.src = '';
  }

  if (repetitions > 0) {
    setTimeout(disableGoogleAutocomplete, 1000, repetitions - 1);
  }
};

var _initPlugin = function _initPlugin() {

  _disableGoogleAutocomplete();

  var addressFormConfigurations = [_standard_billing_checkout2.default, _standard_shipping_checkout2.default];

  var widgetConfig = {
    nzKey: w.AddressFinderPlugin.key,
    auKey: w.AddressFinderPlugin.key,
    nzWidgetOptions: w.AddressFinderPlugin.nzWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
    auWidgetOptions: w.AddressFinderPlugin.auWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
    debug: w.AddressFinderPlugin.debug || false
  };

  window.AF._shopifyPlugin = new _plugin_manager2.default(addressFormConfigurations, widgetConfig);
};

var s = document.createElement('script');
s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
s.async = 1;
s.onload = _initPlugin;
document.body.appendChild(s);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  label: "Standard Billing Checkout",
  layoutSelector: "#section--billing-address__different",
  countryIdentifier: 'checkout_billing_address_country',
  searchIdentifier: "checkout_billing_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'checkout_billing_address_address1',
      suburb: null,
      city: 'checkout_billing_address_city',
      region: 'checkout_billing_address_province',
      postcode: 'checkout_billing_address_zip'
    },
    regionMappings: null
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'checkout_billing_address_address1',
      address2: null,
      suburb: 'checkout_billing_address_city',
      state: 'checkout_billing_address_province',
      postcode: 'checkout_billing_address_zip'
    },
    stateMappings: null
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  label: "Standard Shipping Checkout",
  layoutSelector: ".section section--shipping-address",
  countryIdentifier: 'checkout_shipping_address_country',
  searchIdentifier: "checkout_shipping_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'checkout_shipping_address_address1',
      suburb: null,
      city: 'checkout_shipping_address_city',
      region: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip'
    },
    regionMappings: null
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'checkout_shipping_address_address1',
      address2: null,
      suburb: 'checkout_shipping_address_city',
      state: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip'
    },
    stateMappings: null
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _form_helper = __webpack_require__(5);

var _form_helper2 = _interopRequireDefault(_form_helper);

var _mutation_helper = __webpack_require__(6);

var _mutation_helper2 = _interopRequireDefault(_mutation_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager(addressFormConfigurations, widgetConfig) {
    _classCallCheck(this, PluginManager);

    this.formHelpers = [];
    this.addressFormConfigurations = addressFormConfigurations;
    this.widgetConfig = widgetConfig;

    this.loadFormHelpers();

    new _mutation_helper2.default({
      mutationEventHandler: this.loadFormHelpers.bind(this),
      ignoredClass: "af_list"
    });
  }

  _createClass(PluginManager, [{
    key: "loadFormHelpers",
    value: function loadFormHelpers() {
      this.formHelpers.forEach(function (formHelper) {
        return formHelper.destroy();
      });
      this.identifiedAddressFormConfigurations = [];
      this.formHelpers = [];

      this._identifyAddressForms();

      this.identifiedAddressFormConfigurations.forEach(this._initialiseFormHelper.bind(this));
    }
  }, {
    key: "_identifyAddressForms",
    value: function _identifyAddressForms() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.addressFormConfigurations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var addressFormConfig = _step.value;

          var identifyingElement = document.querySelector(addressFormConfig.layoutSelector);

          if (identifyingElement) {
            this.log("Identified layout named: " + addressFormConfig.label);
            this.identifiedAddressFormConfigurations.push(addressFormConfig);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_initialiseFormHelper",
    value: function _initialiseFormHelper(addressFormConfig) {
      var searchElement = document.getElementById(addressFormConfig.searchIdentifier);

      if (searchElement) {
        var formHelperConfig = {
          countryElement: document.getElementById(addressFormConfig.countryIdentifier),
          label: addressFormConfig.label,
          layoutSelector: addressFormConfig.layoutSelector,
          nz: {
            countryValue: addressFormConfig.nz.countryValue,
            searchElement: document.getElementById(addressFormConfig.nz.elements.address1),
            elements: {
              address_line_1_and_2: document.getElementById(addressFormConfig.nz.elements.address1),
              address_line_1: null,
              address_line_2: null,
              suburb: document.getElementById(addressFormConfig.nz.elements.suburb),
              city: document.getElementById(addressFormConfig.nz.elements.city),
              region: document.getElementById(addressFormConfig.nz.elements.region),
              postcode: document.getElementById(addressFormConfig.nz.elements.postcode)
            },
            regionMappings: null
          },
          au: {
            countryValue: addressFormConfig.au.countryValue,
            searchElement: document.getElementById(addressFormConfig.au.elements.address1),
            elements: {
              address_line_1_and_2: null,
              address_line_1: document.getElementById(addressFormConfig.au.elements.address1),
              address_line_2: document.getElementById(addressFormConfig.au.elements.address2),
              locality_name: document.getElementById(addressFormConfig.au.elements.suburb),
              city: null,
              state_territory: document.getElementById(addressFormConfig.au.elements.state),
              postcode: document.getElementById(addressFormConfig.au.elements.postcode)
            },
            stateMappings: addressFormConfig.au.stateMappings
          }
        };

        var helper = new _form_helper2.default(this.widgetConfig, formHelperConfig);
        this.formHelpers.push(helper);
      }
    }
  }, {
    key: "log",
    value: function log(message) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (this.widgetConfig.debug && window.console) {
        if (data != undefined) {
          console.log("" + message, data);
        } else {
          console.log("" + message);
        }
      }
    }
  }]);

  return PluginManager;
}();

exports.default = PluginManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormHelper = function () {
  function FormHelper(widgetConfig, formHelperConfig) {
    _classCallCheck(this, FormHelper);

    this.widgetConfig = widgetConfig;
    this.formHelperConfig = formHelperConfig;
    this.widgets = {};
    this.countryCodes = ["au", "nz"];

    this._bindToForm();
  }

  // Shuts down this form_helper by disabling the widget and any callback handlers.


  _createClass(FormHelper, [{
    key: "destroy",
    value: function destroy() {
      this._log("Destroying widget", this.formHelperConfig.label);

      for (var widgetCountryCode in this.widgets) {
        this.widgets[widgetCountryCode].disable();
        this.widgets[widgetCountryCode].destroy();
      }

      this.widgets = null;

      this.formHelperConfig.countryElement.removeEventListener("change", this.boundCountryChangedListener);
    }
  }, {
    key: "_bindToForm",
    value: function _bindToForm() {
      this.boundCountryChangedListener = this._countryChanged.bind(this); // save this so we can unbind in the destroy() method
      this.formHelperConfig.countryElement.addEventListener("change", this.boundCountryChangedListener);

      var nzWidget = new window.AddressFinder.Widget(this.formHelperConfig.nz.searchElement, this.widgetConfig.nzKey, "nz", this.widgetConfig.nzWidgetOptions);
      nzWidget.on("result:select", this._nzAddressSelected.bind(this));
      this.widgets["nz"] = nzWidget;

      var auWidget = new window.AddressFinder.Widget(this.formHelperConfig.au.searchElement, this.widgetConfig.auKey, "au", this.widgetConfig.auWidgetOptions);
      auWidget.on("result:select", this._auAddressSelected.bind(this));
      this.widgets["au"] = auWidget;

      this.widgets["null"] = {
        enable: function enable() {},
        disable: function disable() {},
        destroy: function destroy() {}
      };

      this._countryChanged(null, true);
    }
  }, {
    key: "_countryChanged",
    value: function _countryChanged(event, preserveValues) {
      var activeCountry;
      switch (this.formHelperConfig.countryElement.value) {
        case this.formHelperConfig.nz.countryValue:
          activeCountry = "nz";
          break;
        case this.formHelperConfig.au.countryValue:
          activeCountry = "au";
          break;
        default:
          activeCountry = "null";
      }

      this._setActiveCountry(activeCountry);
      if (!preserveValues) {
        var isInactiveCountry = function isInactiveCountry(countryCode) {
          return countryCode != activeCountry;
        };
        this.countryCodes.filter(isInactiveCountry).forEach(this._clearElementValues.bind(this));
      }
    }
  }, {
    key: "_clearElementValues",
    value: function _clearElementValues(countryCode) {
      var _this = this;

      var elements = this.formHelperConfig[countryCode].elements;
      Object.entries(elements).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            element = _ref2[1];

        if (element) _this._setElementValue(element, "", name);
      });
    }
  }, {
    key: "_setActiveCountry",
    value: function _setActiveCountry(countryCode) {
      this._log("Setting active country", countryCode);

      Object.values(this.widgets).forEach(function (widget) {
        return widget.disable();
      });
      this.widgets[countryCode].enable();
    }
  }, {
    key: "_nzAddressSelected",
    value: function _nzAddressSelected(fullAddress, metaData) {
      var elements = this.formHelperConfig.nz.elements;
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);

      if (elements.address_line_1_and_2) {
        this._setElementValue(elements.address_line_1_and_2, selected.address_line_1_and_2(), "address_line_1_and_2");
      } else {
        this._setElementValue(elements.address_line_1, selected.address_line_1(), "address_line_1");
        this._setElementValue(elements.address_line_2, selected.address_line_2(), "address_line_2");
      }

      this._setElementValue(elements.suburb, selected.suburb(), "suburb");
      this._setElementValue(elements.city, selected.city(), "city");
      this._setElementValue(elements.postcode, selected.postcode(), "postcode");

      if (this.formHelperConfig.nz.regionMappings) {
        var translatedRegionValue = this.formHelperConfig.nz.regionMappings[metaData.region];
        this._setElementValue(elements.region, translatedRegionValue, "region");
      } else {
        this._setElementValue(elements.region, metaData.region, "region");
      }
    }
  }, {
    key: "_auAddressSelected",
    value: function _auAddressSelected(fullAddress, metaData) {
      var elements = this.formHelperConfig.au.elements;

      if (elements.address_line_1_and_2) {
        var addressIsPresent = function addressIsPresent(array) {
          return array != null;
        };
        var combined = [metaData.address_line_1, metaData.address_line_2].filter(addressIsPresent).join(", ");
        this._setElementValue(elements.address_line_1_and_2, combined, "address_line_1_and_2");
      } else {
        this._setElementValue(elements.address_line_1, metaData.address_line_1, "address_line_1");
        var address_line_2 = metaData.address_line_2 || "";
        this._setElementValue(elements.address_line_2, address_line_2, "address_line_2");
      }

      this._setElementValue(elements.locality_name, metaData.locality_name, "suburb");
      this._setElementValue(elements.postcode, metaData.postcode, "postcode");

      if (this.formHelperConfig.au.stateMappings) {
        var translatedStateValue = this.formHelperConfig.au.stateMappings[metaData.state_territory];
        this._setElementValue(elements.state_territory, translatedStateValue, "state_territory");
      } else {
        this._setElementValue(elements.state_territory, metaData.state_territory, "state_territory");
      }
    }
  }, {
    key: "_setElementValue",
    value: function _setElementValue(element, value, elementName) {
      if (!element) {
        var errorMessage = 'AddressFinder Error: ' + 'Attempted to update value for element that could not be found.\n' + '\nElement: ' + elementName + '\nValue: ' + value;

        if (window.console) {
          console.warn(errorMessage);
        }

        return;
      }

      element.value = value;
      this._dispatchChangeEvent(element);
    }
  }, {
    key: "_dispatchChangeEvent",
    value: function _dispatchChangeEvent(element) {
      var event;
      switch (typeof Event === "undefined" ? "undefined" : _typeof(Event)) {
        case 'function':
          event = new Event('change', { 'bubbles': true, "cancelable": false });
          break;
        default:
          event = document.createEvent('Event');
          event.initEvent('change', true, false);
      }
      element.dispatchEvent(event);
    }
  }, {
    key: "_log",
    value: function _log(message) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (this.widgetConfig.debug && window.console) {
        if (data != undefined) {
          console.log("FormHelper for layout " + this.formHelperConfig.label + ": " + message, data);
        } else {
          console.log("FormHelper for layout " + this.formHelperConfig.label + ": " + message);
        }
      }
    }
  }]);

  return FormHelper;
}();

exports.default = FormHelper;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MutationsHelper = function () {
  function MutationsHelper(_ref) {
    var mutationEventHandler = _ref.mutationEventHandler,
        ignoredClass = _ref.ignoredClass;

    _classCallCheck(this, MutationsHelper);

    this.mutationEventHandler = mutationEventHandler;
    // Mutation events emitted by elements with this class are ignored.
    this.ignoredClass = ignoredClass;
    this.monitorMutations();
  }

  _createClass(MutationsHelper, [{
    key: 'monitorMutations',
    value: function monitorMutations() {
      if (window.MutationObserver) {
        /* for modern browsers */
        var observer = new MutationObserver(this._mutationHandler.bind(this));
        observer.observe(document.body, { childList: true, subtree: true });
      } else if (window.addEventListener) {
        /* for IE 9 and 10 */
        document.body.addEventListener('DOMNodeInserted', this._domNodeModifiedHandler.bind(this), false);
        document.body.addEventListener('DOMNodeRemoved', this._domNodeModifiedHandler.bind(this), false);
      } else {
        if (window.console) {
          console.info('AddressFinder Error - please use a more modern browser');
        }
      }
    }
  }, {
    key: '_mutationHandler',
    value: function _mutationHandler(mutations) {
      var _this = this;

      var changedNodes = mutations.reduce(function (nodes, mutation) {
        // ignore this mutation if the target is the AddressFinder UL element
        if (mutation.target && mutation.target.classList && mutation.target.classList.contains(_this.ignoredClass)) {
          return nodes;
        }

        return nodes.concat([].concat(_toConsumableArray(mutation.addedNodes))).concat([].concat(_toConsumableArray(mutation.removedNodes)));
      }, []);

      var anyBigCommerceChanges = changedNodes.find(function (node) {
        return !(node.classList && node.classList.contains(_this.ignoredClass));
      });

      if (!anyBigCommerceChanges) {
        return; // ignore AddressFinder changes
      }

      this._setMutationTimeout();
    }
  }, {
    key: '_domNodeModifiedHandler',
    value: function _domNodeModifiedHandler(event) {
      if (event.target.className && event.target.className.includes(this.ignoredClass) || event.relatedNode && event.relatedNode.className && event.relatedNode.className.includes(this.ignoredClass)) {
        return; // ignore AddressFinder changes
      }

      _setMutationTimeout();
    }
  }, {
    key: '_setMutationTimeout',
    value: function _setMutationTimeout() {
      if (this._mutationTimeout) {
        clearTimeout(this._mutationTimeout); // reset previous timeout
      }

      // ignore any further changes for the next 750 mS
      this._mutationTimeout = setTimeout(this.mutationEventHandler, 750);
    }
  }]);

  return MutationsHelper;
}();

exports.default = MutationsHelper;

/***/ })
/******/ ]);
//# sourceMappingURL=bigcommerce-v1-boot.js.map