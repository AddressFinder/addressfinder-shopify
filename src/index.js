import standardBillingCheckout from './address_form_config/standard_billing_checkout'
import standardShippingCheckout from './address_form_config/standard_shipping_checkout'
import PluginManager from "./plugin_manager";

window.AF = window.AF || {}

let _disableGoogleAutocomplete = function(repetitions) {
  var iframe = document.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');

  if (iframe) {
    iframe.src = '';
  }

  if (repetitions > 0) {
    setTimeout(disableGoogleAutocomplete, 1000, repetitions - 1);
  }
}

let _initPlugin = function(){

  _disableGoogleAutocomplete()

  const addressFormConfigurations = [
    standardBillingCheckout,
    standardShippingCheckout
  ]

  const widgetConfig = {
    nzKey: w.AddressFinderPlugin.key,
    auKey: w.AddressFinderPlugin.key,
    nzWidgetOptions: w.AddressFinderPlugin.nzWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
    auWidgetOptions: w.AddressFinderPlugin.auWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
    debug: w.AddressFinderPlugin.debug || false
  }

  window.AF._shopifyPlugin = new PluginManager(
    addressFormConfigurations,
    widgetConfig
  )
}

let s = document.createElement('script')
s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
s.async = 1
s.onload = _initPlugin
document.body.appendChild(s)
