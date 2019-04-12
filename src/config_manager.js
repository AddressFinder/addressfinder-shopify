
import "core-js/fn/array/for-each"

import BillingCheckout from './address_form_config/billing_checkout'
import ShippingCheckout from './address_form_config/shipping_checkout'
import userRegistrationNewAddress from './address_form_config/user_registration_new_address'
import regionMappings from './address_form_config/region_mappings'
export default class ConfigManager {

   load() {
     // This function is called when the page mutates and adds any dynamic configurations we may be missing
    let dynamicForms = this.generateDynamicForms()

    const addressFormConfigurations = [
      BillingCheckout,
      ShippingCheckout,
      userRegistrationNewAddress,
      ...dynamicForms
    ]

    return addressFormConfigurations
  }

  generateDynamicForms() {
    let dynamicForms = []
    // find all elements with an ID starting with EditAddress. For example id="EditAddress_345987345"
    let identifyingElements = document.querySelectorAll('[id^="EditAddress"]')
  
    // create a new form configuration for each EditAddress form we find
    identifyingElements.forEach((identifyingElement, index) => {
      dynamicForms.push(this._configureDynamicForm(identifyingElement, index))
    })

    return dynamicForms
  }
  
  _configureDynamicForm(identifyingElement, index) {
    if (identifyingElement) {

      // Shopify appends a unique identifier to each of the form elements in an EditAddress form.
      // We split this identifier off the id of our identifying element, and add it to our address field ids to find the correct fields

      var id = identifyingElement['id'].split('_')[1]
       var formConfig = {
        label: `Edit Address Form ${index}`,
        layoutSelector: `#EditAddress_${id}`,
        countryIdentifier: `AddressCountry_${id}`,
        searchIdentifier: `AddressAddress1_${id}`,
        nz: {
          countryValue: "New Zealand",
          elements: {
            address1and2: `AddressAddress1_${id}`,
            address1: null,
            address2: null,
            suburb: `AddressAddress2_${id}`,
            city: `AddressCity_${id}`,
            region: `AddressProvince_${id}`,
            postcode: `AddressZip_${id}`,
          },
          regionMappings: regionMappings
        },
        au: {
          countryValue: "Australia",
          elements: {
            address1and2: null,
            address1: `AddressAddress1_${id}`,
            address2: `AddressAddress2_${id}`,
            suburb: `AddressCity_${id}`,
            state: `AddressProvince_${id}`,
            postcode: `AddressZip_${id}`,
          },
          stateMappings: null
        }
      }
      return formConfig
    }
  }
}