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
     
     // This function triggers an 'input' event when the form fields are set, so Shopify knows that form fields have been changed.
     // Typically we would use a 'change' event here, but Shopify is listening for the 'input' event specifically.
     // It is also important to set 'bubbles' to true, as Shopify is listening for an 'input' event on the document, rather than
     // the input field itself. This allows the event to move up the tree, triggering the event on both the input element and the document.
     function _dispatchInputEvent() {
      // document.createEvent is deprecated in most modern browsers, with the exception of IE. This plugin does not explicitly support IE,
      // but we still want to avoid throwing errors.
       var event;
       switch (typeof (Event)) {
       case 'function':
         event = new Event('input', {'bubbles':true});
         break;
       default:
         event = document.createEvent('Event');
         event.initEvent('input', true, false);
       }

       f.element().dispatchEvent(event);
     }


     return f;
   }
   w.AF ? w.AF.FormField = FormField : w.AF = {FormField: FormField};
 })(window);
