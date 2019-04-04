import standardBillingCheckout from './address_form_config/standard_billing_checkout'
import standardShippingCheckout from './address_form_config/standard_shipping_checkout'
import userRegistrationNewAddress from './address_form_config/user_registration_new_address'
import dynamicFormConfig from './address_form_config/user_registration_edit_address'
import PluginManager from "./plugin_manager";

window.AF = window.AF || {}



function _configureDynamicForms(dynamicFormConfig) {
  let dynamicForms = []
  let identifyingElements = document.querySelectorAll(`[id^="${dynamicFormConfig.layoutSelector}"]`)

  identifyingElements.forEach((identifyingElement) => {
    dynamicForms.push(configureDynamicForm(identifyingElement))
  })


  debugger
  return dynamicForms
}

function configureDynamicForm(identifyingElement) {
  console.log('configureDynamicForm')
  if (identifyingElement) {
    var id = identifyingElement['id'].split('_')[1]
     var formConfig = {
      label: "Edit Address Form",
      layoutSelector: `EditAddress_${id}`,
      countryIdentifier: `#AddressCountry_${id}`,
      searchIdentifier: `#AddressAddress1_${id}`,
      nz: {
        countryValue: "New Zealand",
        elements: {
          address1and2: `#AddressAddress1_${id}`,
          address1: null,
          address2: null,
          suburb: `#AddressAddress2_${id}`,
          city: `#AddressCity_${id}`,
          region: `#AddressProvince_${id}`,
          postcode: `#AddressZip_${id}`,
        },
        regionMappings: null
      },
      au: {
        countryValue: "Australia",
        elements: {
          address1and2: null,
          address1: `#AddressAddress1_${id}`,
          address2: `#AddressAddress2_${id}`,
          suburb: `#AddressCity_${id}`,
          state: `#AddressProvince_${id}`,
          postcode: `#AddressZip_${id}`,
        },
        stateMappings: null
      }
    }
    return formConfig
  }
}




let _initPlugin = function(){

  _disableGoogleAutocomplete(5);
  let dynamicForms = _configureDynamicForms(dynamicFormConfig)

  const addressFormConfigurations = [
    standardBillingCheckout,
    standardShippingCheckout,
    userRegistrationNewAddress,
    ...dynamicForms
  ]

  console.log(dynamicForms)

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