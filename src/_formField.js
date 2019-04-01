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
     f.setValue = function(value) {
       if (value === undefined || value === null) value = '';
       if (f.element() === null) return;
       f.element().value = value;
       _dispatchInputEvent();
     };

     function _dispatchInputEvent() {
      // document.createEvent is deprecated in most modern browsers, with the exception of IE
       var event;
       switch (typeof (Event)) {
       case 'function':
         event = new Event('input', {'bubbles':true});
         break;
       default:
         event = document.createEvent('Event');
         event.initEvent('input', true);
       }

       f.element().dispatchEvent(event);
     }

     return f;
   }
   w.AF ? w.AF.FormField = FormField : w.AF = {FormField: FormField};
 })(window);
