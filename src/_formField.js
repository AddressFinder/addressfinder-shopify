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
    console.log(f.selector)
    f.element = function(){
      return document.querySelector(f.selector);
    };
    f.setValue = function(value) {
      for (key in value) {
        
        if ( value[key] !== undefined && !f.element() ) {
          var el = document.getElementById("checkout_shipping_address_address1")
          var newValue = ', ' + value[key]
          el.value += newValue
        } else if (value[key] === undefined) {
            value[key] = '';
        } else {
          console.log(key, value, value[key])
          f.element().value = value[key];
        }
      }
    };

    return f;
  }
  w.AF ? w.AF.FormField = FormField : w.AF = {FormField: FormField};
})(window);
