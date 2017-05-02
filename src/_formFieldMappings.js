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
