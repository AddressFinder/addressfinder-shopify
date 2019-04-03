// /**
//  * Shopify uses requireJS in specific implementations, most notably: Shopify Plus.
//  * This script makes sure that the AddressFinder widget is loaded on the global scope,
//  * depending whether the target shopify form uses requireJS or not.
//  * Once the library is loaded and AF is on the window scope, the callback function is called.
//  * This script also makes sure that AF widget script isn't loaded more than once.
//  */
// (function(d, w){

//   function _addScript(f) {
//     var s = d.createElement('script');
//     s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
//     s.async = 1;
//     if (f !== undefined) s.onload = f;
//     d.body.appendChild(s);
//   }

//   function _checkIfAFIsLoaded() {
//     return (window.AF && window.AF.Widget);
//   }

//   function loadAF(){
//     this.loadScript = function(callback){
//       if (_checkIfAFIsLoaded()) {
//         callback();
//       } else {
//         _addScript(callback);
//       }
//     };
//     return this;
//   }

//   w.AF ? w.AF.ScriptLoader = loadAF : w.AF = {ScriptLoader: loadAF};

// })(document, window);


