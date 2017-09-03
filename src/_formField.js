/**
 * An AF.FormField is a helper for each address-like element in the Shopify Form.
 * It contains:
 *  - a reference to the affected element
 *  - an associated mapping to the API / Metadata
 *  - a method for updating the form field value
 */
(function(w){

  function FormField(selector, mappingId){
    var f = this;
    f.mappingId = mappingId;
    f.selector = selector;
    f.element = function(){
      return document.querySelector(f.selector);
    };

    f.addressLine1 = function() {
      var checkoutTypes = ['shipping', 'billing'];
      for (var i = 0; i < checkoutTypes.length; i++) {
        var element = document.getElementById('checkout_' + checkoutTypes[i] + '_address_address1');
        if (element) return element;
      }
    };

    f.setValue = function(value) {
      if (value === undefined || value === null) {
        value = '';
      }

      if (value !== '' && f.element() === null) {
        var formattedValue = ', ' + value;
        f.addressLine1().value += formattedValue;
      } else if (f.element() === null) {
        return;
      } else {
        f.element().value = value;
      }
    };

    return f;
  }
  w.AF ? w.AF.FormField = FormField : w.AF = {FormField: FormField};
})(window);
