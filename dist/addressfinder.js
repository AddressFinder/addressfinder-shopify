(function(w){
  var countries = {
    au: {
      provinces: {
        'ACT': 'Australian Capital Territory',
        'NSW': 'New South Wales',
        'NT' : 'Northern Territory',
        'QLD': 'Queensland',
        'SA' : 'South Australia',
        'TAS': 'Tasmania',
        'VIC': 'Victoria',
        'WA' : 'Western Australia'
      }
    },
    nz: {
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
      }
    }
  };
  w.AF ? w.AF.CountryMappings = countries : w.AF = {CountryMappings: countries};
})(window);

(function(w){
  var fieldTypeMappings = {
      address_1: 'address1',
      address_2: 'address2',
      city: 'city',
      state: 'province',
      country: 'country',
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
      fieldString += _getFieldName(field);
      if (currentForm.suffix) fieldString += currentForm.suffix;
      return fieldString;
    }
    function _getFormFields() {
      var formFieldsObj = {};
      for (var keyName in fieldTypeMappings) {
        formFieldsObj[keyName] = _getFieldIDString(keyName);
      }
      return formFieldsObj;
    }
    m.setForm = function(formIdentifier){
      m.currentForm = formMappings[formIdentifier];
      m.currentForm.name = formIdentifier;
      m.currentForm.fields = _getFormFields();
      return m.currentForm;
    };
    m.findMatchingForm = function(){
      var firstFieldKeyName = Object.keys(fieldTypeMappings)[0];
      for (var keyName in formMappings) {
        var stringID = _getFieldIDString(firstFieldKeyName, formMappings[keyName]);
        if (document.getElementById(stringID)) {
          m.setForm(keyName);
          break;
        }
      }
      return (m.currentForm) ? true : false;
    };
    m.init = function(){
      m.findMatchingForm();
    };
    return m;
  }
  w.AF ? w.AF.FormFieldMappings = mappings : w.AF = {FormFieldMappings: mappings};
})(window);

(function(d, w){

  function _traditionalLoad(f) {
    w.console.log('in traditionalLoad');
    var s = d.createElement('script');
    s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    s.async = 1;
    if (f !== undefined) s.onload = f;
    d.body.appendChild(s);
  }

  function _requireLoad(f) {
    w.console.log('in requireLoad');
    var af = w.require.config({
      context: 'af',
      baseUrl: '',
      paths: {
        addressfinder: 'https://api.addressfinder.io/assets/v3/core',
        reqwest:       'https://files-abletech-nz.s3.amazonaws.com/addressfinder/reqwest',
        neat_complete: 'https://files-abletech-nz.s3.amazonaws.com/addressfinder/neat-complete'
      }
    });
    w.console.log('af', af);
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



(function(d, w){
  function init(){
    function ready(afRequire){
      w.console.log('afRequire', afRequire);
      var f = new w.AF.FormFieldMappings();
      f.init();
      var currentForm = f.currentForm;
      if (w.console) w.console.log(currentForm);
    }

    var scriptLoader = new w.AF.ScriptLoader();
    scriptLoader.loadScript(ready);
  }
  init();
})(document, window);
