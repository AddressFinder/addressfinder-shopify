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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(19);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(28) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(29);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'Auckland Region': 'Auckland',
  'Bay of Plenty Region': 'Bay of Plenty',
  'Canterbury Region': 'Canterbury',
  'Gisborne Region': 'Gisborne',
  'Hawke\'s Bay Region': 'Hawke\'s Bay',
  'Manawatu-Wanganui Region': 'Manawatu-Wanganui',
  'Marlborough Region': 'Marlborough',
  'Nelson Region': 'Nelson',
  'Northland Region': 'Northland',
  'Otago Region': 'Otago',
  'Southland Region': 'Southland',
  'Taranaki Region': 'Taranaki',
  'Tasman Region': 'Tasman',
  'Waikato Region': 'Waikato',
  'Wellington Region': 'Wellington',
  'West Coast Region': 'West Coast',
  'Other Region': null
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'ACT': 'Australian Capital Territory',
  'NSW': 'New South Wales',
  'NT': 'Northern Territory',
  'QLD': 'Queensland',
  'SA': 'South Australia',
  'TAS': 'Tasmania',
  'VIC': 'Victoria',
  'WA': 'Western Australia'
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  'Auckland Region': 'AUK',
  'Bay of Plenty Region': 'BOP',
  'Canterbury Region': 'CAN',
  'Gisborne Region': 'GIS',
  'Hawke\'s Bay Region': 'HKB',
  'Manawatu-Wanganui Region': 'MWT',
  'Marlborough Region': 'MBH',
  'Nelson Region': 'NSN',
  'Northland Region': 'NTL',
  'Otago Region': 'OTA',
  'Southland Region': 'STL',
  'Taranaki Region': 'TKI',
  'Tasman Region': 'TAS',
  'Waikato Region': 'WKO',
  'Wellington Region': 'WGN',
  'West Coast Region': 'WTC',
  'Other Region': null
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_manager__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addressfinder_addressfinder_webpage_tools__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addressfinder_addressfinder_webpage_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__addressfinder_addressfinder_webpage_tools__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




(function (d, w) {
  var ShopifyPlugin =
  /*#__PURE__*/
  function () {
    function ShopifyPlugin() {
      _classCallCheck(this, ShopifyPlugin);

      this.version = "1.3.0"; // Manages the mapping of the form configurations to the DOM. 

      this.PageManager = null; // Manages the form configuraions, and creates any dynamic forms

      this.ConfigManager = null;

      this._initPlugin();
    }

    _createClass(ShopifyPlugin, [{
      key: "mutationEventHandler",
      value: function mutationEventHandler() {
        // When the form mutates, reload our form configurations, and reload the form helpers in the page manager.
        var addressFormConfigurations = this.ConfigManager.load();

        if (this.PageManager) {
          this.PageManager.reload(addressFormConfigurations);
        }
      }
    }, {
      key: "_disableGoogleAutocomplete",
      value: function _disableGoogleAutocomplete(repetitions) {
        // Attempt to find the google autocomplete iframe. If it is found disable it, otherwise continue trying for 5 repetitions.
        var iframe = d.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');

        if (iframe) {
          iframe.src = '';
        }

        if (repetitions > 0) {
          setTimeout(this._disableGoogleAutocomplete, 1000, repetitions - 1);
        }
      }
    }, {
      key: "_initPlugin",
      value: function _initPlugin() {
        this._disableGoogleAutocomplete(5);

        var widgetConfig = {
          nzKey: w.AddressFinderPlugin.key,
          auKey: w.AddressFinderPlugin.key,
          nzWidgetOptions: w.AddressFinderPlugin.nzWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
          auWidgetOptions: w.AddressFinderPlugin.auWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
          debug: w.AddressFinderPlugin.debug || false
        };
        this.ConfigManager = new __WEBPACK_IMPORTED_MODULE_0__config_manager__["a" /* default */](); // Watches for any mutations to the DOM, so we can reload our configurations when something changes.

        new __WEBPACK_IMPORTED_MODULE_1__addressfinder_addressfinder_webpage_tools__["MutationManager"]({
          mutationEventHandler: this.mutationEventHandler.bind(this),
          ignoredClass: "af_list"
        });
        this.PageManager = new __WEBPACK_IMPORTED_MODULE_1__addressfinder_addressfinder_webpage_tools__["PageManager"]({
          addressFormConfigurations: this.ConfigManager.load(),
          widgetConfig: widgetConfig,
          // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
          formFieldChangeEventToDispatch: 'input',
          // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
          countryChangeEventToListenFor: 'change'
        });
        w.AddressFinderPlugin._shopifyPlugin = this.PageManager;
      }
    }]);

    return ShopifyPlugin;
  }();

  var s = d.createElement('script');
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
  s.async = 1;

  s.onload = function () {
    new ShopifyPlugin();
  };

  d.body.appendChild(s);
})(document, window);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_for_each__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_for_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_array_for_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_form_config_user_registration_region_mappings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_form_config_user_registration_state_mappings__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_form_config_billing_checkout__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__address_form_config_shipping_checkout__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_form_config_user_registration_new_address__ = __webpack_require__(43);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ConfigManager =
/*#__PURE__*/
function () {
  function ConfigManager() {
    _classCallCheck(this, ConfigManager);
  }

  _createClass(ConfigManager, [{
    key: "load",
    value: function load() {
      // This function is called when the page mutates and adds any dynamic configurations we may be missing
      var dynamicForms = this.generateDynamicForms();
      var addressFormConfigurations = [__WEBPACK_IMPORTED_MODULE_3__address_form_config_billing_checkout__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__address_form_config_shipping_checkout__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__address_form_config_user_registration_new_address__["a" /* default */]].concat(_toConsumableArray(dynamicForms));
      return addressFormConfigurations;
    }
  }, {
    key: "generateDynamicForms",
    value: function generateDynamicForms() {
      var _this = this;

      var dynamicForms = []; // find all elements with an ID starting with EditAddress. For example id="EditAddress_345987345"

      var identifyingElements = Array.from(document.querySelectorAll('[id^="EditAddress"]')); // create a new form configuration for each EditAddress form we find

      identifyingElements.forEach(function (identifyingElement, index) {
        dynamicForms.push(_this._configureDynamicForm(identifyingElement, index));
      });
      return dynamicForms;
    }
  }, {
    key: "_configureDynamicForm",
    value: function _configureDynamicForm(identifyingElement, index) {
      if (identifyingElement) {
        // Shopify appends a unique identifier to each of the form elements in an EditAddress form.
        // We split this identifier off the id of our identifying element, and add it to our address field ids to find the correct fields
        var id = identifyingElement['id'].split('_')[1];
        var formConfig = {
          label: "Edit Address Form ".concat(index),
          layoutSelectors: ["#EditAddress_".concat(id)],
          countryIdentifier: "#AddressCountry_".concat(id),
          searchIdentifier: "#AddressAddress1_".concat(id),
          nz: {
            countryValue: "New Zealand",
            elements: {
              address1: "#AddressAddress1_".concat(id),
              suburb: "#AddressAddress2_".concat(id),
              city: "#AddressCity_".concat(id),
              region: "#AddressProvince_".concat(id),
              postcode: "#AddressZip_".concat(id)
            },
            regionMappings: __WEBPACK_IMPORTED_MODULE_1__address_form_config_user_registration_region_mappings__["a" /* default */]
          },
          au: {
            countryValue: "Australia",
            elements: {
              address1: "#AddressAddress1_".concat(id),
              address2: "#AddressAddress2_".concat(id),
              suburb: "#AddressCity_".concat(id),
              state: "#AddressProvince_".concat(id),
              postcode: "#AddressZip_".concat(id)
            },
            stateMappings: __WEBPACK_IMPORTED_MODULE_2__address_form_config_user_registration_state_mappings__["a" /* default */]
          }
        };
        return formConfig;
      }
    }
  }]);

  return ConfigManager;
}();



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(1).Array.forEach;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(18);
var $forEach = __webpack_require__(30)(0);
var STRICT = __webpack_require__(40)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(1);
var hide = __webpack_require__(5);
var redefine = __webpack_require__(25);
var ctx = __webpack_require__(8);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var has = __webpack_require__(26);
var SRC = __webpack_require__(6)('src');
var $toString = __webpack_require__(27);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(1).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7)('native-function-to-string', Function.toString);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(8);
var IObject = __webpack_require__(31);
var toObject = __webpack_require__(32);
var toLength = __webpack_require__(34);
var asc = __webpack_require__(36);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(9);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(37);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var isArray = __webpack_require__(38);
var SPECIES = __webpack_require__(39)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(9);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(7)('wks');
var uid = __webpack_require__(6);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(4);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__region_mappings__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = ({
  label: "Billing Checkout",
  layoutSelectors: ["#section--billing-address__different"],
  countryIdentifier: '#checkout_billing_address_country',
  searchIdentifier: "#checkout_billing_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#checkout_billing_address_address1',
      suburb: '#checkout_billing_address_address2',
      city: '#checkout_billing_address_city',
      region: '#checkout_billing_address_province',
      postcode: '#checkout_billing_address_zip'
    },
    regionMappings: __WEBPACK_IMPORTED_MODULE_0__region_mappings__["a" /* default */]
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#checkout_billing_address_address1',
      address2: '#checkout_billing_address_address2',
      suburb: '#checkout_billing_address_city',
      state: '#checkout_billing_address_province',
      postcode: '#checkout_billing_address_zip'
    },
    stateMappings: null
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__region_mappings__ = __webpack_require__(12);

/* harmony default export */ __webpack_exports__["a"] = ({
  label: "Shipping Checkout",
  layoutSelectors: [".section--shipping-address"],
  countryIdentifier: '#checkout_shipping_address_country',
  searchIdentifier: "#checkout_shipping_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#checkout_shipping_address_address1',
      suburb: '#checkout_shipping_address_address2',
      city: '#checkout_shipping_address_city',
      region: '#checkout_shipping_address_province',
      postcode: '#checkout_shipping_address_zip'
    },
    regionMappings: __WEBPACK_IMPORTED_MODULE_0__region_mappings__["a" /* default */]
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#checkout_shipping_address_address1',
      address2: '#checkout_shipping_address_address2',
      suburb: '#checkout_shipping_address_city',
      state: '#checkout_shipping_address_province',
      postcode: '#checkout_shipping_address_zip'
    },
    stateMappings: null
  }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_registration_region_mappings__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_registration_state_mappings__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = ({
  label: "User Registration Address Form",
  layoutSelectors: ["#AddressNewForm"],
  countryIdentifier: '#AddressCountryNew',
  searchIdentifier: '#AddressAddress1New',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressAddress2New',
      city: '#AddressCityNew',
      region: '#AddressProvinceNew',
      postcode: '#AddressZipNew'
    },
    regionMappings: __WEBPACK_IMPORTED_MODULE_0__user_registration_region_mappings__["a" /* default */]
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressCityNew',
      state: '#AddressProvinceNew',
      postcode: '#AddressZipNew'
    },
    stateMappings: __WEBPACK_IMPORTED_MODULE_1__user_registration_state_mappings__["a" /* default */]
  }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=48)}([function(t,e,n){var r=n(17)("wks"),o=n(14),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(2),o=n(1),i=n(5),u=n(13),s=n(23),a=function(t,e,n){var c,f,l,d,p=t&a.F,y=t&a.G,h=t&a.S,v=t&a.P,m=t&a.B,g=y?r:h?r[e]||(r[e]={}):(r[e]||{}).prototype,b=y?o:o[e]||(o[e]={}),_=b.prototype||(b.prototype={});y&&(n=e);for(c in n)f=!p&&g&&void 0!==g[c],l=(f?g:n)[c],d=m&&f?s(l,r):v&&"function"==typeof l?s(Function.call,l):l,g&&u(g,c,l,t&a.U),b[c]!=l&&i(b,c,d),v&&_[c]!=l&&(_[c]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(6),o=n(12);t.exports=n(9)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(11),o=n(34),i=n(22),u=Object.defineProperty;e.f=n(9)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(37),o=n(20);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o=n(5),i=n(4),u=n(14)("src"),s=n(52),a=(""+s).split("toString");n(1).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,u)||o(n,u,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||s.call(this)})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(36),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports={}},function(t,e,n){var r=n(1),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(6).f,o=n(4),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(0)},function(t,e,n){var r=n(2),o=n(1),i=n(18),u=n(25),s=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){var r=n(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(20);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;void 0==o[r]&&n(5)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){var r=n(23),o=n(37),i=n(31),u=n(27),s=n(81);t.exports=function(t,e){var n=1==t,a=2==t,c=3==t,f=4==t,l=6==t,d=5==t||l,p=e||s;return function(e,s,y){for(var h,v,m=i(e),g=o(m),b=r(s,y,3),_=u(g.length),w=0,E=n?p(e,_):a?p(e,0):void 0;_>w;w++)if((d||w in g)&&(h=g[w],v=b(h,w,m),t))if(n)E[w]=v;else if(v)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:E.push(h)}else if(f)return!1;return l?-1:c||f?f:E}}},function(t,e,n){t.exports=!n(9)&&!n(10)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(4),o=n(8),i=n(38)(!1),u=n(29)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(8),o=n(27),i=n(56);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(11),o=n(57),i=n(30),u=n(29)("IE_PROTO"),s=function(){},a=function(){var t,e=n(35)("iframe"),r=i.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(36),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(19),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){"use strict";var r=n(65)(!0);n(45)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(18),o=n(3),i=n(13),u=n(5),s=n(16),a=n(66),c=n(24),f=n(67),l=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,y,h,v,m){a(n,e,y);var g,b,_,w=function(t){if(!d&&t in x)return x[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",S="values"==h,C=!1,x=t.prototype,O=x[l]||x["@@iterator"]||h&&x[h],A=O||w(h),F=h?S?w("entries"):A:void 0,j="Array"==e?x.entries||O:O;if(j&&(_=f(j.call(new t)))!==Object.prototype&&_.next&&(c(_,E,!0),r||"function"==typeof _[l]||u(_,l,p)),S&&O&&"values"!==O.name&&(C=!0,A=function(){return O.call(this)}),r&&!m||!d&&!C&&x[l]||u(x,l,A),s[e]=A,s[E]=p,h)if(g={values:S?A:w("values"),keys:v?A:w("keys"),entries:F},m)for(b in g)b in x||i(x,b,g[b]);else o(o.P+o.F*(d||C),e,g);return g}},function(t,e,n){"use strict";var r=n(10);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return s(t)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}function s(t){if(Array.isArray(t))return t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}n.d(e,"a",function(){return l});var l=function(){function t(e,n,r,o){a(this,t),this.widgetConfig=e,this.formHelperConfig=n,this.formFieldChangeEventToDispatch=r,this.countryChangeEventToListenFor=o,this.widgets={},this.countryCodes=["au","nz"],this._bindToForm()}return f(t,[{key:"destroy",value:function(){this._log("Destroying widget",this.formHelperConfig.label);for(var t in this.widgets)this.widgets[t].disable(),this.widgets[t].destroy();this.widgets=null,this.formHelperConfig.countryElement.removeEventListener(this.countryChangeEventToListenFor,this.boundCountryChangedListener)}},{key:"_bindToForm",value:function(){var t=new window.AddressFinder.Widget(this.formHelperConfig.searchElement,this.widgetConfig.nzKey,"nz",this.widgetConfig.nzWidgetOptions);t.on("result:select",this._nzAddressSelected.bind(this)),this.widgets.nz=t;var e=new window.AddressFinder.Widget(this.formHelperConfig.searchElement,this.widgetConfig.auKey,"au",this.widgetConfig.auWidgetOptions);e.on("result:select",this._auAddressSelected.bind(this)),this.widgets.au=e,this.widgets.null={enable:function(){},disable:function(){},destroy:function(){}},this.boundCountryChangedListener=this._countryChanged.bind(this),this.formHelperConfig.countryElement?(this.formHelperConfig.countryElement.addEventListener(this.countryChangeEventToListenFor,this.boundCountryChangedListener),this.boundCountryChangedListener(null,!0)):this.widgetConfig.defaultCountry&&this._setActiveCountry(this.widgetConfig.defaultCountry)}},{key:"_countryChanged",value:function(t,e){var n;switch(this.formHelperConfig.countryElement.value){case this.formHelperConfig.nz.countryValue:n="nz";break;case this.formHelperConfig.au.countryValue:n="au";break;default:n="null"}if(this._setActiveCountry(n),!e){var r=function(t){return t!=n};this.countryCodes.filter(r).forEach(this._clearElementValues.bind(this))}}},{key:"_clearElementValues",value:function(t){var e=this,n=this.formHelperConfig[t].elements;Object.entries(n).forEach(function(t){var n=o(t,2),r=n[0],i=n[1];i&&e._setElementValue(i,"",r)})}},{key:"_setActiveCountry",value:function(t){this._log("Setting active country",t),Object.values(this.widgets).forEach(function(t){return t.disable()}),this.widgets[t].enable()}},{key:"_combineAddressElements",value:function(t){var e=function(t){return null!=t&&""!=t},n=t.filter(e);return n.length>1?n.join(", "):n[0]}},{key:"_nzAddressSelected",value:function(t,e){var n=this.formHelperConfig.nz.elements,r=new AddressFinder.NZSelectedAddress(t,e);if(n.address_line_2||n.suburb)!n.address_line_2&&n.suburb?(this._setElementValue(n.address_line_1,r.address_line_1_and_2(),"address_line_1"),this._setElementValue(n.suburb,r.suburb(),"suburb")):(this._setElementValue(n.address_line_1,r.address_line_1(),"address_line_1"),this._setElementValue(n.address_line_2,r.address_line_2(),"address_line_2"),this._setElementValue(n.suburb,r.suburb(),"suburb"));else{var o=this._combineAddressElements([r.address_line_1_and_2(),r.suburb()]);this._setElementValue(n.address_line_1,o,"address_line_1")}if(this._setElementValue(n.city,r.city(),"city"),this._setElementValue(n.postcode,r.postcode(),"postcode"),this.formHelperConfig.nz.regionMappings){var i=this.formHelperConfig.nz.regionMappings[e.region];this._setElementValue(n.region,i,"region")}else this._setElementValue(n.region,e.region,"region")}},{key:"_auAddressSelected",value:function(t,e){var n=this.formHelperConfig.au.elements;if(n.address_line_2){this._setElementValue(n.address_line_1,e.address_line_1,"address_line_1");var r=e.address_line_2||"";this._setElementValue(n.address_line_2,r,"address_line_2")}else{var o=this._combineAddressElements([e.address_line_1,e.address_line_2]);this._setElementValue(n.address_line_1,o,"address_line_1")}if(this._setElementValue(n.locality_name,e.locality_name,"suburb"),this._setElementValue(n.postcode,e.postcode,"postcode"),this.formHelperConfig.au.stateMappings){var i=this.formHelperConfig.au.stateMappings[e.state_territory];this._setElementValue(n.state_territory,i,"state_territory")}else this._setElementValue(n.state_territory,e.state_territory,"state_territory")}},{key:"_setElementValue",value:function(t,e,n){if(!t){var r="AddressFinder Error: Attempted to update value for element that could not be found.\n\nElement: "+n+"\nValue: "+e;return void(window.console&&console.warn(r))}t.value=e,this._dispatchEvent(t)}},{key:"_dispatchEvent",value:function(t){var e;switch("undefined"==typeof Event?"undefined":r(Event)){case"function":e=new Event(this.formFieldChangeEventToDispatch,{bubbles:!0,cancelable:!1});break;default:e=document.createEvent("Event"),e.initEvent(this.formFieldChangeEventToDispatch,!0,!1)}t.dispatchEvent(e)}},{key:"_log",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.widgetConfig.debug&&window.console&&(void 0!=e?console.log("FormHelper for layout ".concat(this.formHelperConfig.label,": ").concat(t),e):console.log("FormHelper for layout ".concat(this.formHelperConfig.label,": ").concat(t)))}}]),t}()},function(t,e,n){t.exports=n(49)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(50),o=(n.n(r),n(64)),i=(n.n(o),n(71)),u=(n.n(i),n(76)),s=(n.n(u),n(79)),a=(n.n(s),n(83)),c=(n.n(a),n(90)),f=(n.n(c),n(92)),l=(n.n(f),n(94)),d=(n.n(l),n(96)),p=n(47),y=n(97);n.d(e,"PageManager",function(){return d.a}),n.d(e,"FormManager",function(){return p.a}),n.d(e,"MutationManager",function(){return y.a})},function(t,e,n){n(51),n(61),n(62),n(63),t.exports=n(1).Symbol},function(t,e,n){"use strict";var r=n(2),o=n(4),i=n(9),u=n(3),s=n(13),a=n(54).KEY,c=n(10),f=n(17),l=n(24),d=n(14),p=n(0),y=n(25),h=n(26),v=n(55),m=n(40),g=n(11),b=n(7),_=n(8),w=n(22),E=n(12),S=n(41),C=n(59),x=n(60),O=n(6),A=n(15),F=x.f,j=O.f,T=C.f,M=r.Symbol,P=r.JSON,k=P&&P.stringify,L=p("_hidden"),H=p("toPrimitive"),V={}.propertyIsEnumerable,N=f("symbol-registry"),z=f("symbols"),I=f("op-symbols"),D=Object.prototype,q="function"==typeof M,R=r.QObject,G=!R||!R.prototype||!R.prototype.findChild,W=i&&c(function(){return 7!=S(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=F(D,e);r&&delete D[e],j(t,e,n),r&&t!==D&&j(D,e,r)}:j,K=function(t){var e=z[t]=S(M.prototype);return e._k=t,e},J=q&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},B=function(t,e,n){return t===D&&B(I,e,n),g(t),e=w(e,!0),g(n),o(z,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=S(n,{enumerable:E(0,!1)})):(o(t,L)||j(t,L,E(1,{})),t[L][e]=!0),W(t,e,n)):j(t,e,n)},U=function(t,e){g(t);for(var n,r=v(e=_(e)),o=0,i=r.length;i>o;)B(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?S(t):U(S(t),e)},Q=function(t){var e=V.call(this,t=w(t,!0));return!(this===D&&o(z,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(z,t)||o(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=_(t),e=w(e,!0),t!==D||!o(z,e)||o(I,e)){var n=F(t,e);return!n||!o(z,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=T(_(t)),r=[],i=0;n.length>i;)o(z,e=n[i++])||e==L||e==a||r.push(e);return r},$=function(t){for(var e,n=t===D,r=T(n?I:_(t)),i=[],u=0;r.length>u;)!o(z,e=r[u++])||n&&!o(D,e)||i.push(z[e]);return i};q||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(I,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),W(this,t,E(1,n))};return i&&G&&W(D,t,{configurable:!0,set:e}),K(t)},s(M.prototype,"toString",function(){return this._k}),x.f=Z,O.f=B,n(42).f=C.f=X,n(21).f=Q,n(39).f=$,i&&!n(18)&&s(D,"propertyIsEnumerable",Q,!0),y.f=function(t){return K(p(t))}),u(u.G+u.W+u.F*!q,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)p(tt[et++]);for(var nt=A(p.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=M(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!q,"Object",{create:Y,defineProperty:B,defineProperties:U,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:$}),P&&u(u.S+u.F*(!q||c(function(){var t=M();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!J(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,k.apply(P,r)}}),M.prototype[H]||n(5)(M.prototype,H,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){t.exports=n(17)("native-function-to-string",Function.toString)},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(14)("meta"),o=n(7),i=n(4),u=n(6).f,s=0,a=Object.isExtensible||function(){return!0},c=!n(10)(function(){return a(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return c&&y.NEED&&a(t)&&!i(t,r)&&f(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(15),o=n(39),i=n(21);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),a=i.f,c=0;s.length>c;)a.call(t,u=s[c++])&&e.push(u);return e}},function(t,e,n){var r=n(28),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(6),o=n(11),i=n(15);t.exports=n(9)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(8),o=n(42).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(21),o=n(12),i=n(8),u=n(22),s=n(4),a=n(34),c=Object.getOwnPropertyDescriptor;e.f=n(9)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r=n(43),o={};o[n(0)("toStringTag")]="z",o+""!="[object z]"&&n(13)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(44),n(68),t.exports=n(25).f("iterator")},function(t,e,n){var r=n(28),o=n(20);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(41),o=n(12),i=n(24),u={};n(5)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(31),i=n(29)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){for(var r=n(69),o=n(15),i=n(13),u=n(2),s=n(5),a=n(16),c=n(0),f=c("iterator"),l=c("toStringTag"),d=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=o(p),h=0;h<y.length;h++){var v,m=y[h],g=p[m],b=u[m],_=b&&b.prototype;if(_&&(_[f]||s(_,f,d),_[l]||s(_,l,m),a[m]=d,g))for(v in r)_[v]||i(_,v,r[v],!0)}},function(t,e,n){"use strict";var r=n(32),o=n(70),i=n(16),u=n(8);t.exports=n(45)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){n(72),t.exports=n(1).String.includes},function(t,e,n){"use strict";var r=n(3),o=n(73);r(r.P+r.F*n(75)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(74),o=n(20);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},function(t,e,n){var r=n(7),o=n(19),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){n(77),t.exports=n(1).Object.values},function(t,e,n){var r=n(3),o=n(78)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},function(t,e,n){var r=n(15),o=n(8),i=n(21).f;t.exports=function(t){return function(e){for(var n,u=o(e),s=r(u),a=s.length,c=0,f=[];a>c;)i.call(u,n=s[c++])&&f.push(t?[n,u[n]]:u[n]);return f}}},function(t,e,n){n(80),t.exports=n(1).Array.find},function(t,e,n){"use strict";var r=n(3),o=n(33)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(32)("find")},function(t,e,n){var r=n(82);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(7),o=n(40),i=n(0)("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){n(44),n(84),t.exports=n(1).Array.from},function(t,e,n){"use strict";var r=n(23),o=n(3),i=n(31),u=n(85),s=n(86),a=n(27),c=n(87),f=n(88);o(o.S+o.F*!n(89)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,d=i(t),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,m=0,g=f(d);if(v&&(h=r(h,y>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=a(d.length),n=new p(e);e>m;m++)c(n,m,v?h(d[m],m):d[m]);else for(l=g.call(d),n=new p;!(o=l.next()).done;m++)c(n,m,v?u(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(11);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(16),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(6),o=n(12);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(43),o=n(0)("iterator"),i=n(16);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){n(91),t.exports=n(1).Array.includes},function(t,e,n){"use strict";var r=n(3),o=n(38)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(32)("includes")},function(t,e,n){n(93),t.exports=n(1).Array.map},function(t,e,n){"use strict";var r=n(3),o=n(33)(1);r(r.P+r.F*!n(46)([].map,!0),"Array",{map:function(t){return o(this,t,arguments[1])}})},function(t,e,n){n(95),t.exports=n(1).Array.filter},function(t,e,n){"use strict";var r=n(3),o=n(33)(2);r(r.P+r.F*!n(46)([].filter,!0),"Array",{filter:function(t){return o(this,t,arguments[1])}})},function(t,e,n){"use strict";function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}n.d(e,"a",function(){return c});var a=n(47),c=function(){function t(e){var n=e.addressFormConfigurations,r=e.widgetConfig,o=e.formFieldChangeEventToDispatch,u=e.countryChangeEventToListenFor;i(this,t),this.version="1.4.6",this.formHelpers=[],this.addressFormConfigurations=n,this.widgetConfig=r,this.formFieldChangeEventToDispatch=o,this.countryChangeEventToListenFor=u,this.identifiedFormHelperConfig=[],this.reload=this.reload.bind(this),this.loadFormHelpers()}return s(t,[{key:"reload",value:function(t){this._areAllElementsStillInTheDOM()||(this.identifiedFormHelperConfig=[],this.addressFormConfigurations=t,this.loadFormHelpers())}},{key:"loadFormHelpers",value:function(){this.formHelpers.forEach(function(t){return t.destroy()}),this.identifiedAddressFormConfigurations=[],this.formHelpers=[],this._identifyAddressForms(),this.identifiedAddressFormConfigurations.forEach(this._initialiseFormHelper.bind(this))}},{key:"_getCurrentCountryValue",value:function(t){var e=null;return["nz","au"].forEach(function(n){t.countryElement.value===t[n].countryValue&&(e=n)}),e}},{key:"_areAllElementsStillInTheDOM",value:function(){var t=this;return 0!==this.identifiedFormHelperConfig.length&&this.identifiedFormHelperConfig.every(function(e){if(!t._identifyingElementsPresentAndVisible(e))return!1;if(!document.body.contains(e.countryElement))return!1;var n=t._getCurrentCountryValue(e);return!!t._areAllElementsStillInTheDOMForCountryCode(e,n)})}},{key:"_areAllElementsStillInTheDOMForCountryCode",value:function(t,e){return!!e&&Object.values(t[e].elements).every(function(t){return null!==t&&document.body.contains(t)})}},{key:"_identifyingElementsPresentAndVisible",value:function(t){return t.layoutSelectors.every(function(t){var e=document.querySelector(t);return null!==e&&"none"!==e.style.display})}},{key:"_identifyAddressForms",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,o=this.addressFormConfigurations[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;this._identifyingElementsPresentAndVisible(i)&&(this.log("Identified layout named: ".concat(i.label)),this.identifiedAddressFormConfigurations.push(i))}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}}},{key:"_initialiseFormHelper",value:function(t){if(document.querySelector(t.searchIdentifier)){var e={countryElement:document.querySelector(t.countryIdentifier),searchElement:document.querySelector(t.searchIdentifier),label:t.label,layoutSelectors:t.layoutSelectors,nz:{countryValue:t.nz.countryValue,elements:{address_line_1:document.querySelector(t.nz.elements.address1),suburb:document.querySelector(t.nz.elements.suburb),city:document.querySelector(t.nz.elements.city),region:document.querySelector(t.nz.elements.region),postcode:document.querySelector(t.nz.elements.postcode)},regionMappings:t.nz.regionMappings},au:{countryValue:t.au.countryValue,elements:{address_line_1:document.querySelector(t.au.elements.address1),address_line_2:document.querySelector(t.au.elements.address2),locality_name:document.querySelector(t.au.elements.suburb),state_territory:document.querySelector(t.au.elements.state),postcode:document.querySelector(t.au.elements.postcode)},stateMappings:t.au.stateMappings}};t.nz.elements.address2&&(e.nz.elements=r({address_line_2:document.querySelector(t.nz.elements.address2)},e.nz.elements)),this.identifiedFormHelperConfig.push(e);var n=new a.a(this.widgetConfig,e,this.formFieldChangeEventToDispatch,this.countryChangeEventToListenFor);this.formHelpers.push(n)}}},{key:"log",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.widgetConfig.debug&&window.console&&(void 0!=e?console.log("".concat(t),e):console.log("".concat(t)))}}]),t}()},function(t,e,n){"use strict";function r(t){return u(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",function(){return f});var f=function(){function t(e){var n=e.mutationEventHandler,r=e.ignoredClass;s(this,t),this.mutationEventHandler=n,this.millisecondsToIgnoreMutations=750,this.ignoredClass=r,this.monitorMutations()}return c(t,[{key:"monitorMutations",value:function(){if(window.MutationObserver){new MutationObserver(this._mutationHandler.bind(this)).observe(document.body,{childList:!0,subtree:!0})}else window.addEventListener?(document.body.addEventListener("DOMNodeInserted",this._domNodeModifiedHandler.bind(this),!1),document.body.addEventListener("DOMNodeRemoved",this._domNodeModifiedHandler.bind(this),!1)):window.console&&console.info("AddressFinder Error - please use a more modern browser")}},{key:"_mutationHandler",value:function(t){var e=this;t.reduce(function(t,n){return n.target&&n.target.classList&&n.target.classList.contains(e.ignoredClass)?t:t.concat(r(n.addedNodes)).concat(r(n.removedNodes))},[]).find(function(t){return!(t.classList&&t.classList.contains(e.ignoredClass))})&&this._setMutationTimeout()}},{key:"_domNodeModifiedHandler",value:function(t){t.target.className&&t.target.className.includes(this.ignoredClass)||t.relatedNode&&t.relatedNode.className&&t.relatedNode.className.includes(this.ignoredClass)||this._setMutationTimeout()}},{key:"_setMutationTimeout",value:function(){this._mutationTimeout&&clearTimeout(this._mutationTimeout),this._mutationTimeout=setTimeout(this.mutationEventHandler,this.millisecondsToIgnoreMutations)}}]),t}()}])});

/***/ })
/******/ ]);
//# sourceMappingURL=shopify-v1-boot.js.map