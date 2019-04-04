import standardBillingCheckout from './address_form_config/standard_billing_checkout'
import standardShippingCheckout from './address_form_config/standard_shipping_checkout'
import userRegistration from './address_form_config/user_registration'
import PluginManager from "./plugin_manager";

window.AF = window.AF || {}

let _initPlugin = function(){

  _disableGoogleAutocomplete(5);

  const addressFormConfigurations = [
    standardBillingCheckout,
    standardShippingCheckout,
    userRegistration
  ]

  const widgetConfig = {
    nzKey: window.AddressFinderPlugin.key,
    auKey: window.AddressFinderPlugin.key,
    nzWidgetOptions: window.AddressFinderPlugin.nzWidgetOptions || window.AddressFinderPlugin.widgetOptions || {},
    auWidgetOptions: window.AddressFinderPlugin.auWidgetOptions || window.AddressFinderPlugin.widgetOptions || {},
    debug: window.AddressFinderPlugin.debug || false
  }

  window.AF._shopifyPlugin = new PluginManager({
    addressFormConfigurations,
    widgetConfig,
    eventToDispatch: 'input'
  })
}

let _disableGoogleAutocomplete = function(repetitions) {
  var iframe = document.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');

  if (iframe) {
    iframe.src = '';
  }

  if (repetitions > 0) {
    setTimeout(_disableGoogleAutocomplete, 1000, repetitions - 1);
  }
}

function _addScript() {
  var s = document.createElement('script');
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
  s.async = 1;
  s.onload = _initPlugin;
  document.body.appendChild(s);
}

function loadAF(){
  if ( window.AF && window.AF.Widget ) {
    _initPlugin();
  } else {
    _addScript();
  }
};

loadAF()