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
