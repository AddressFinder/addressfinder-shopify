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
      fieldAPIMappings: {
        address1: {
          name: 'address_line_1',
          type: 'field'
        },
        address2: {
          name: 'address_line_2',
          type: 'field'
        },
        city: {
          name: 'locality_name',
          type: 'field'
        },
        province: {
          name: 'state_territory',
          type: 'lookup'
        },
        zip: {
          name: 'postcode',
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
        'West Coast Region': 'West Coast'
      },
      fieldAPIMappings: {
        address1: {
          name: 'address_line_1_and_2',
          type: 'function'
        },
        address2: {
          name: 'suburb',
          type: 'function'
        },
        city: {
          name: 'city',
          type: 'function'
        },
        province: {
          name: 'region',
          type: 'lookup'
        },
        zip: {
          name: 'postcode',
          type: 'function'
        }
      }
    }
  };
  w.AF ? w.AF.CountryMappings = countries : w.AF = {CountryMappings: countries};
})(window);

(function(d,w){
  function Form(){
    var f = this;

    f.mappings = null;
    f.currentForm = null;
    f.activeCountryISO = null;
    f.activeWidget = null;
    f.widgets = [];

    function _createWidget(countryISO) {
      var widget = new w.AF.ShopifyWidget();
      var addressField = f.currentForm.fields[Object.keys(f.currentForm.fields)[0]].element;
      widget.init(addressField, countryISO);
      f.widgets.push(widget);
    }

    function _setFieldValues(address, metaData){
      w.console.log('address', address);
      w.console.log('metaData', metaData);
      Object.keys(f.currentForm.fields).forEach(function(fieldKeyName){
        var fieldItem = f.currentForm.fields[fieldKeyName];
        var fieldAPIMapping = f.activeWidget.country.fieldAPIMappings[fieldItem.mappingId];
        if (f.activeWidget.country.iso == 'NZ' && fieldAPIMapping.type == 'function') {
          var selected = new w.AddressFinder.NZSelectedAddress(address, metaData);
          w.console.log('use AF formatting functions');
          fieldItem.setValue(selected[fieldAPIMapping.name]());
          return;
        } else if (fieldAPIMapping.type == 'lookup') {
          w.console.log('use AF province lookup', f.activeWidget.country.provinces[metaData[fieldAPIMapping.name]]);
          fieldItem.setValue(f.activeWidget.country.provinces[metaData[fieldAPIMapping.name]]);
          return;
        } else {
          w.console.log('use AF API Mapping in metaData: ', metaData[fieldAPIMapping.name]);
          fieldItem.setValue(metaData[fieldAPIMapping.name]);
        }
      });
    }

    function _setWidgetHandlers(){
      f.widgets.forEach(function(widget){
        widget.instance.on('result:select', _setFieldValues);
      });
    }

    function _clearFields(){
      Object.keys(f.currentForm.fields).forEach(function(field){
        f.currentForm.fields[field].setValue();
      });
    }

    function _setWidgetStatus(countryISO){
      f.activeCountryISO = countryISO;
      f.activeWidget = null;
      f.widgets.forEach(function(widget){
        // Set widget state and return a boolean at the same time
        if (widget.setStateByCountry(countryISO)) f.activeWidget = widget;
      });
    }

    function _formChangeHandler(event){
      var targetElem = event.target;
      if (targetElem.getAttribute('id') == f.currentForm.countryField && targetElem.value) {
        if (f.activeWidget) _clearFields();
        _setWidgetStatus(targetElem.value);
      }
    }

    f.init = function(){
      var ffm = new w.AF.FormFieldMappings();
      ffm.init();

      f.currentForm = ffm.currentForm;
      if (f.currentForm && f.currentForm.fields) {
        Object.keys(w.AF.CountryMappings).forEach(_createWidget);

        d.body.addEventListener('change', _formChangeHandler);

        _setWidgetStatus(d.getElementById(f.currentForm.countryField).value);
        _setWidgetHandlers();
      }
    };

    return f;
  }

  w.AF ? w.AF.Form = Form : w.AF = {Form: Form};

})(document, window);

/**
 * An AF.FormField is a helper for each address-like element in the Shopify Form.
 * It contains:
 *  - a reference to the affected element
 *  - an associated mapping to the API / Metadata
 *  - a method for updating the form field value
 */
(function(w){

  function FormField(id, mappingId){
    var f = this;
    f.mappingId = mappingId;
    f.element = document.getElementById(id);
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
  var fieldTypeMappings = [
      'address1',
      'address2',
      'city',
      'province',
      'zip'
    ],
    formMappings = [
      {
        // type: 'billing',
        // platform: 'plus',
        prefix: 'checkout_billing_address_attributes_'
      },
      {
        // type: 'shipping',
        // platform: 'plus',
        prefix: 'checkout_shipping_address_attributes_'
      },
      {
        // type: 'billing',
        // platform: 'standard',
        prefix: 'checkout_billing_address_'
      },
      {
        // type: 'shipping',
        // platform: 'standard',
        prefix: 'checkout_shipping_address_'
      },
      {
        // type: 'shipping',
        // platform: 'registration',
        prefix: 'address_',
        suffix: '_new'
      }
    ];

  function mappings(){
    var m = this;
    m.currentForm = null;

    function _getFieldIDString(index, currentForm){
      if (currentForm === undefined) currentForm = m.currentForm;
      var fieldString = '';
      if (currentForm.prefix) fieldString += currentForm.prefix;
      fieldString += (index === 'country' ? 'country' : fieldTypeMappings[index]);
      if (currentForm.suffix) fieldString += currentForm.suffix;
      return fieldString;
    }
    function _getFormFields() {
      var formFieldsObj = {};
      fieldTypeMappings.forEach(function(item, index){
        var id = _getFieldIDString(index);
        var field = new w.AF.FormField(id, item);
        formFieldsObj[id] = field;
      });
      return formFieldsObj;
    }
    function _setForm(index){
      m.currentForm = formMappings[index];
      m.currentForm.countryField = _getFieldIDString('country');
      m.currentForm.fields = _getFormFields();
      return m.currentForm;
    }
    function _findMatchingForm(){
      formMappings.forEach(function(item, index){
        var stringID = _getFieldIDString(0, formMappings[index]);
        if (document.getElementById(stringID)) {
          _setForm(index);
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
    widget.AFKey = null;
    widget.field = null;
    widget.country = null;
    widget.instance = null;

    function _create(){
      widget.instance = new w.AddressFinder.Widget(widget.field, widget.AFKey, widget.country.iso);
    }

    widget.setStateByCountry = function(countryISO){
      var isCurrentCountry = widget.country.iso == countryISO;
      isCurrentCountry ? widget.instance.enable() : widget.instance.disable();
      return isCurrentCountry;
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
    var f = new w.AF.Form();
    f.init();
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
