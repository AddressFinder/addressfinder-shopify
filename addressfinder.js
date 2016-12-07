



// (function(){
//   var widget, initAF = function(){
//     widget = new AddressFinder.Widget(
//       document.getElementById('checkout_shipping_address_address1'),
//       'ADDRESSFINDER_NZ_DEMO_KEY',
//       'NZ',
//       {
//       }
//     );
//
//     widget.on("result:select", function(fullAddress, metaData) {
//       var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
//       document.getElementById('address_line_1').value = selected.address_line_1()
//       document.getElementById('address_line_2').value = selected.address_line_2()
//
//       // If you only have one address line
//       // document.getElementById('address_line').value = selected.address_line_1_and_2()
//
//       document.getElementById('suburb').value = selected.suburb()
//       document.getElementById('city').value = selected.city()
//       document.getElementById('postcode').value = selected.postcode()
//     });
//     };
//
//   function downloadAF(f){
//     var script = document.createElement('script');
//     script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
//     script.async = true;
//     script.onload=f;
//     document.body.appendChild(script);
//   };
//
//     downloadAF(initAF);
// })();
//
//

(function(d, w) {
  w.AddressFinderConfig = w.AddressFinderConfig || {};

  w.AddressFinderConfig.fieldsForAddressType = {
    billing: {
      address_1: "checkout_billing_address_address1",
      address_2: "checkout_billing_address_address2",
      city: "checkout_billing_address_city",
      state: "checkout_billing_address_province",
      country: "checkout_billing_address_country",
      postcode: "checkout_billing_address_zip"
    },
    shipping: {
      address_1: "checkout_shipping_address_address1",
      address_2: "checkout_shipping_address_address2",
      city: "checkout_shipping_address_city",
      state: "checkout_shipping_address_province",
      country: "checkout_shipping_address_country",
      postcode: "checkout_shipping_address_zip"
    }
  }

  var logError = function(message){
    if (w.console) {
      console.log(message);
    }
  }

  /*
   * Sets the value of the input field corresponding to a given element id.
   * If the corresponding field is not found an error message is logged to
   * console.
   */
  var _setFieldValue = function(elementId, value) {
    var field = d.getElementById(elementId);

    if (field) {
      field.value = value;

      var options = field.options;

      if (options) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, false);
        field.dispatchEvent(event);

        for (var i = 0; i < options.length; i++) {
          if (field.options[i].value === value) {
            field.dispatchEvent(event);
            break;
          }
        }
      }

      return;
    }

    var errorMessage = "AddressFinder Error: "
                       + "Attempted to update value for field that could not be found.\n"
                       + "\nField ID: " + elementId
                       + "\nValue: " + value;

    logError(errorMessage);
  };

  var _setAuState = function(elementId, value) {
    var statesByCode = {
      "ACT": "Australian Capital Territory",
      "NSW": "New South Wales",
      "NT" : "Northern Territory",
      "QLD": "Queensland",
      "SA" : "South Australia",
      "TAS": "Tasmania",
      "VIC": "Victoria",
      "WA" : "Western Australia"
    }
    var state = statesByCode[value];
    _setFieldValue(elementId, state);
  };

  var _setNzRegion = function(elementId, value) {
    var regionMappings = {
      "Auckland Region": "Auckland",
      "Bay of Plenty Region": "Bay of Plenty",
      "Canterbury Region": "Canterbury",
      "Gisborne Region": "Gisborne",
      "Hawke's Bay Region": "Hawke's Bay",
      "Manawatu-Wanganui Region": "Manawatu-Wanganui",
      "Marlborough Region": "Marlborough",
      "Nelson Region": "Nelson",
      "Northland Region": "Northland",
      "Otago Region": "Otago",
      "Southland Region": "Southland",
      "Taranaki Region": "Taranaki",
      "Tasman Region": "Tasman",
      "Waikato Region": "Waikato",
      "Wellington Region": "Wellington",
      "West Coast Region": "West Coast"
    }
    var region = regionMappings[value];
    _setFieldValue(elementId, region);
  };

  var _selectNewZealand = function(fullAddress, metaData) {
    var fieldMappings = this.fieldMappings;

    var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
    _setFieldValue(fieldMappings.address_1, selected.address_line_1_and_2());
    _setFieldValue(fieldMappings.address_2, selected.suburb());
    _setFieldValue(fieldMappings.city, selected.city());
    _setFieldValue(fieldMappings.postcode, selected.postcode());
    _setNzRegion(fieldMappings.state, metaData.region);
  }

  var _bindAF = function(addressType){
    var addressField = document.getElementById(w.AddressFinderConfig.fieldsForAddressType[addressType].address_1);

    if(!addressField){
      logError("Unable to find address field with ID " + w.AddressFinderConfig.fieldsForAddressType[addressType].address_1);
      return;
    }

    var widgets = {};

    widgets.nz = new AddressFinder.Widget(addressField, w.AddressFinderConfig.key, 'NZ');
    widgets.nz.fieldMappings = w.AddressFinderConfig.fieldsForAddressType[addressType];
    widgets.nz.on("result:select", _selectNewZealand);

    // widgets.au = new AddressFinder.Widget(addressField, w.AddressFinderConfig.key, 'AU');
    // widgets.au.cfieldMappings = w.AddressFinderConfig.fieldsForAddressType[addressType];
    // widgets.au.on("result:select", _selectAustralia);

    /* ensure results are displayed */
    var addresses = d.getElementsByClassName("af_list");
    for (var i = 0; i < addresses.length; i++) {
      addresses[i].style.zIndex = 999;
    }
  };

  /*
   * This callback function invokes the AF widget
   */
  var _initPlugin = function() {
    if(d.getElementById(w.AddressFinderConfig.fieldsForAddressType.billing.address_1)){
      _bindAF("billing");
    }
    if(d.getElementById(w.AddressFinderConfig.fieldsForAddressType.shipping.address_1)){
      _bindAF("shipping");
    }
  };

  /*
   * This function is called when the window DOMContentLoaded event fires.
   * It adds the AddressFinder widget script, and when it loads, calls _initAF().
   */
  var _addScript = function() {
    var s = d.createElement("script");
    s.src = "https://api.addressfinder.io/assets/v3/widget.js";
    s.async = 1;
    s.onload = _initPlugin;
    d.body.appendChild(s);
  };

  var billing_address_1 = d.getElementById(w.AddressFinderConfig.fieldsForAddressType.billing.address_1);
  var shipping_address_1 = d.getElementById(w.AddressFinderConfig.fieldsForAddressType.shipping.address_1);

  if(billing_address_1 || shipping_address_1){
    _addScript();
  }
})(document, window);
