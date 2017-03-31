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
    function _getFieldName(fieldName) {
      return fieldTypeMappings[fieldName];
    }
    function _getFieldIDString(field, currentForm){
      if (currentForm === undefined) currentForm = this.currentForm;
      var fieldString = '';
      if (currentForm.prefix) fieldString += currentForm.prefix;
      fieldString += _getFieldName(field);
      if (currentForm.suffix) fieldString += currentForm.suffix;
      return fieldString;
    }
    function _getFormFields() {
      var formFieldsObj = {};
      for (var keyName in fieldTypeMappings) {
        formFieldsObj[keyName] = _getFieldIDString(keyName, this.currentForm);
      }
      return formFieldsObj;
    }
    this.currentForm = null;
    this.setForm = function(formIdentifier){
      this.currentForm = formMappings[formIdentifier];
      this.currentForm.name = formIdentifier;
      this.currentForm.fields = _getFormFields();
      return this.currentForm;
    };
    this.findMatchingForm = function(){
      var firstFieldKeyName = Object.keys(fieldTypeMappings)[0];
      for (var keyName in formMappings) {
        var stringID = _getFieldIDString(firstFieldKeyName, formMappings[keyName]);
        if (document.getElementById(stringID)) {
          this.setForm(keyName);
          return true;
        }
      }
      return false;
    };
    this.init = function(){
      this.findMatchingForm();
    };
    this.init();
    return this;
  }
  w.AF ? w.AF.FormFieldMappings = mappings : w.AF = {FormFieldMappings: mappings};
})(window);
