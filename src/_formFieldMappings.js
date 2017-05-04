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
