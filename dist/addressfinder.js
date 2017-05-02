/*
 - AF only supports AU and NZ address types for now
 - Provinces contain a list of Shopify field-value mappings
 - Each of the keys within the `countries` object become:
   - Instances of a widget
   - Watch values for the Country form field
*/
(function(w){
  var countries = {
    au: {
      iso: 'AU',
      title: 'Australia',
      provinces: {
        'ACT': 'Australian Capital Territory',
        'NSW': 'New South Wales',
        'NT' : 'Northern Territory',
        'QLD': 'Queensland',
        'SA' : 'South Australia',
        'TAS': 'Tasmania',
        'VIC': 'Victoria',
        'WA' : 'Western Australia'
      },
      fieldAPIMappngs: {
        address_1: {
          name: 'address_line_1',
          type: 'field'
        },
        address_2: {
          name: 'address_line_2',
          type: 'field'
        },
        city: {
          name: 'locality_name',
          type: 'field'
        },
        postcode: {
          name: 'postcode',
          type: 'field'
        },
        state:     {
          name: 'state_territory',
          type: 'field'
        }
      }
    },
    nz: {
      iso: 'NZ',
      title: 'New Zealand',
      provinces: {
        'Auckland Region': 'Auckland',
        'Bay of Plenty Region': 'Bay of Plenty',
        'Canterbury Region': 'Canterbury',
        'Gisborne Region': 'Gisborne',
        'Hawke’s Bay Region': 'Hawke’s Bay',
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
        'West Coast Region': 'West Coast'
      },
      fieldAPIMappngs: {
        address_1: {
          name: 'address_line_1_and_2',
          type: 'function'
        },
        address_2: {
          name: 'suburb',
          type: 'function'
        },
        city: {
          name: 'city',
          type: 'function'
        },
        postcode: {
          name: 'postcode',
          type: 'function'
        },
        state:     {
          name: 'region',
          type: 'field'
        }
      }
    }
  };
  w.AF ? w.AF.CountryMappings = countries : w.AF = {CountryMappings: countries};
})(window);

/**
 * An AF.FormField is a helper for each address-like element in the Shopify Form.
 * It contains:
 *  - a reference to the affected element
 *  - an associated mapping to the API / Metadata
 *  - a method for updating the form field value
 */
(function(w){
  function FormField(id, mapping){
    var f = this;
    f.id = id;
    f.element = document.getElementById(id);
    f.mapping = mapping;
    f.setValue = function(value) {
      if (value === undefined) value = '';
      f.element.value = value;
    };

    return f;
  }
  w.AF ? w.AF.FormField = FormField : w.AF = {FormField: FormField};
})(window);

/**
 * Shopify address forms can be run in many differnt situations:
 *  - Billing or Shipping mode
 *  - Situations: Shopify Plus Checkout, Standard Shopify Checkout, and Shopify User Registration
 *
 * The fields used are consistent enough to contain…
 *  - address_1
 *  - address_2
 *  - city
 *  - state
 *  - country
 *  - zip
 * … for each form instance.
 *
 * Each form situation and mode will use different prefixes and/or suffixes as field identifiers.
 * E.g. the registration address line 1 field is: `address_` + `address_1` + `_new`
 *
 * Once the appropriate form has been identified based on the matching `address1` field,
 * this util will set the form in scope, see: `m.currentForm`.
 */
(function(w){
  var fieldTypeMappings = {
      address_1: 'address1',
      address_2: 'address2',
      city: 'city',
      state: 'province',
      postcode: 'zip'
    },
    formMappings = {
      billing_plus: {
        type: 'billing',
        platform: 'plus',
        prefix: 'checkout_billing_address_attributes_'
      },
      shipping_plus: {
        type: 'shipping',
        platform: 'plus',
        prefix: 'checkout_shipping_address_attributes_'
      },
      billing_standard: {
        type: 'billing',
        platform: 'standard',
        prefix: 'checkout_billing_address_'
      },
      shipping_standard: {
        type: 'shipping',
        platform: 'standard',
        prefix: 'checkout_shipping_address_'
      },
      shipping_registration: {
        type: 'shipping',
        platform: 'registration',
        prefix: 'address_',
        suffix: '_new'
      }
    };

  function mappings(){
    var m = this;
    m.currentForm = null;
    function _getFieldName(fieldName) {
      return fieldTypeMappings[fieldName];
    }
    function _getFieldIDString(field, currentForm){
      if (currentForm === undefined) currentForm = m.currentForm;
      var fieldString = '';
      if (currentForm.prefix) fieldString += currentForm.prefix;
      fieldString += (field === 'country' ? 'country' : _getFieldName(field));
      if (currentForm.suffix) fieldString += currentForm.suffix;
      return fieldString;
    }
    function _getFormFields() {
      var formFieldsObj = {};
      for (var keyName in fieldTypeMappings) {
        var id = _getFieldIDString(keyName);
        var mapping = fieldTypeMappings[keyName];
        var field = new w.AF.FormField(id, mapping);
        formFieldsObj[keyName] = field;
      }
      return formFieldsObj;
    }
    function _setForm(formIdentifier){
      m.currentForm = formMappings[formIdentifier];
      m.currentForm.countryField = _getFieldIDString('country');
      m.currentForm.name = formIdentifier;
      m.currentForm.fields = _getFormFields();
      return m.currentForm;
    }
    function _findMatchingForm(){
      var firstFieldKeyName = Object.keys(fieldTypeMappings)[0],
        formMappingsKeys = Object.keys(formMappings);
      formMappingsKeys.forEach(function(keyName){
        var stringID = _getFieldIDString(firstFieldKeyName, formMappings[keyName]);
        if (document.getElementById(stringID)) {
          _setForm(keyName);
          return;
        }
      });
      return (m.currentForm) ? true : false;
    }
    m.init = function(){
      _findMatchingForm();
    };
    return m;
  }
  w.AF ? w.AF.FormFieldMappings = mappings : w.AF = {FormFieldMappings: mappings};
})(window);

/**
 * Shopify uses requireJS in specific implementations, most notably: Shopify Plus.
 * This script makes sure that the AddressFinder widget is loaded on the global scope,
 * depending whether the target shopify form uses requireJS or not.
 * Once the library is loaded and AF is on the window scope, the callback function is called.
 * This script also makes sure that AF widget script isn't loaded more than once.
 */
(function(d, w){

  function _traditionalLoad(f) {
    var s = d.createElement('script');
    s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    s.async = 1;
    if (f !== undefined) s.onload = f;
    d.body.appendChild(s);
  }

  function _requireLoad(f) {
    var af = w.require.config({
      context: 'af',
      baseUrl: '',
      paths: {
        addressfinder: 'https://api.addressfinder.io/assets/v3/core',
        reqwest:       'https://files-abletech-nz.s3.amazonaws.com/addressfinder/reqwest',
        neat_complete: 'https://files-abletech-nz.s3.amazonaws.com/addressfinder/neat-complete'
      }
    });
    af(w.require(['addressfinder'], function(AddressFinder){
      if (f !== undefined) f(AddressFinder);
      w.console.log('AddressFinder', AddressFinder);
    }));
  }

  function _addScript(f) {
    if (w.define && w.define.amd && typeof w.define == 'function') {
      _requireLoad(f);
    } else {
      _traditionalLoad(f);
    }
  }

  function _checkIfAFIsLoaded() {
    return (window.AF && window.AF.Widget);
  }

  function loadAF(){
    this.loadScript = function(callback){
      if (_checkIfAFIsLoaded()) {
        callback();
      } else {
        _addScript(callback);
      }
    };
    return this;
  }

  w.AF ? w.AF.ScriptLoader = loadAF : w.AF = {ScriptLoader: loadAF};

})(document, window);



/*
 - Widgets are invoked after:
   - a list of countries are available within the window.AF namespace.
   - the AF-widget script is loaded
 - All widgets are tied to a unique AF Token or Key, as set in the Shopify GA instructions: https://addressfinder.nz/docs/shopify/
 - A widget is tied to a country (AU or NZ)
 - Only one widget should be visible at a time
 - Widgets become enabled when their corresponding country is selected. Other widgets become disabled.
 - If neither of the corresponding countries are selected, all widgets become disabled.
 - All widgets are tied to a corresponding addressfield
*/
(function(w){

  function Widget(){

    var widget = this;
    widget.instance = null;

    function _create(){
      widget.instance = new w.AddressFinder.Widget(widget.field, widget.AFKey, widget.country.iso);
    }

    widget.setStateByCountry = function(countryISO){
      widget.country.iso == countryISO ? widget.instance.enable() : widget.instance.disable();
    };

    widget.init = function(targetField, countryISO){
      widget.AFKey = w.AddressFinderPlugin.key;
      if (targetField) widget.field = targetField;
      if (countryISO) widget.country = w.AF.CountryMappings[countryISO.toLowerCase()];
      if (w.AddressFinder && w.AddressFinder.Widget) _create();
    };
    return widget;
  }

  w.AF ? w.AF.ShopifyWidget = Widget : w.AF = {ShopifyWidget: Widget};

})(window);

(function(d, w){

  function bootUp(){
    var f = new w.AF.FormFieldMappings();
    f.init();

    var currentFormFields = f.currentForm.fields;
    var widgets = [];
    function _createWidget(countryISO) {
      var widget = new w.AF.ShopifyWidget();
      var addressField = currentFormFields[Object.keys(currentFormFields)[0]].element;
      widget.init(addressField, countryISO);
      widgets.push(widget);
    }

    function _setFieldValueByMetaData(){

    }

    function _setFieldValues(address, metaData){
      w.console.log('address', address);
      w.console.log('metaData', metaData);
      var mappings = widget.country.fieldAPIMappngs;
      Object.keys(mappings).forEach(function(fieldName){
        w.console.log('fieldName', fieldName);
        if (widget.country.iso == 'NZ' && mappings[fieldName].type == 'function') {
          w.console.log('use AF formatting functions');
          return;
        }
        _setFieldValueByMetaData(metaData[mappings[fieldName].name]);
        w.console.log('use AF API Mapping in metaData: ', metaData[mappings[fieldName].name]);
      });
    }

    function _setWidgetHandlers(){
      widgets.forEach(function(widget){
        widget.instance.on('result:select', _setFieldValues);
      });
    }

    function _setWidgetStatus(countryISO){
      widgets.forEach(function(widget){
        widget.setStateByCountry(countryISO);
      });
    }

    function _formChangeHandler(event){
      var targetElem = event.target;
      if (targetElem.getAttribute('id') == f.currentForm.countryField && targetElem.value) {
        _setWidgetStatus(targetElem.value);
      }
    }

    if (currentFormFields) {
      Object.keys(w.AF.CountryMappings).forEach(_createWidget);

      d.body.addEventListener('change', _formChangeHandler);

      _setWidgetStatus(d.getElementById(f.currentForm.countryField).value);
      _setWidgetHandlers();
    }
  }

  function testForReadiness(){
    var errorOccured = false,
      checkArray = [
        {objName:'AddressFinderPlugin', message:'No AddressFinder Key found. See: https://addressfinder.nz/docs/shopify/'},
        {objName:'AddressFinder',       message:'The AddressFinder Widget Script failed to load'},
        {objName:'AF',                  message:''}
      ];
    checkArray.forEach(function(item){
      if (!w[item['objName']]) {
        w.console.warn(item['message']);
        errorOccured = true;
        return;
      }
    });
    if (!errorOccured) bootUp();
  }

  var scriptLoader = new w.AF.ScriptLoader();
  scriptLoader.loadScript(testForReadiness);

})(document, window);
