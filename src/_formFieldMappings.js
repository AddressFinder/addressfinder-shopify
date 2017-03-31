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
