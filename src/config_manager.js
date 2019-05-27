
import "core-js/fn/array/for-each"

import userRegistrationRegionMappings from './address_form_config/user_registration_region_mappings'
import userRegistrationStateMappings from './address_form_config/user_registration_state_mappings'

import BillingCheckout from './address_form_config/billing_checkout'
import ShippingCheckout from './address_form_config/shipping_checkout'
export default class ConfigManager {

   load() {
     // This function is called when the page mutates and adds any dynamic configurations we may be missing
    let dynamicForms = this.generateDynamicForms()

    const addressFormConfigurations = [
      ...BillingCheckout,
      ...ShippingCheckout,
      ...dynamicForms
    ]

    return addressFormConfigurations
  }

  generateDynamicForms() {
    let dynamicForms = []
    // find all elements with an ID starting with EditAddress. For example id="EditAddress_345987345"
    let identifyingElements = Array.from(document.querySelectorAll('[id^="address_form_"]'))
  
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
      var formConfig = {
        label: `Edit Address Form ${index}`,
        layoutSelectors: [`#${identifyingElement.id} input[name='address[address1]']`],
        countryIdentifier: `#${identifyingElement.id} select[name='address[country]']`,
        searchIdentifier: `#${identifyingElement.id} input[name='address[address1]']`,
        nz: {
          countryValue: "New Zealand",
          elements: {
            address1: `#${identifyingElement.id} input[name='address[address1]']`,
            suburb: `#${identifyingElement.id} input[name='address[address2]']`,
            city: `#${identifyingElement.id} input[name='address[city]']`,
            region: `#${identifyingElement.id} select[name='address[province]']`,
            postcode: `#${identifyingElement.id} input[name='address[zip]']`,
          },
          regionMappings: userRegistrationRegionMappings
        },
        au: {
          countryValue: "Australia",
          elements: {
            address1: `#${identifyingElement.id} input[name='address[address1]']`,
            address2: `#${identifyingElement.id} input[name='address[address2]']`,
            suburb: `#${identifyingElement.id} input[name='address[city]']`,
            state: `#${identifyingElement.id} select[name='address[province]']`,
            postcode: `#${identifyingElement.id} input[name='address[zip]']`,
          },
          stateMappings: userRegistrationStateMappings
        }
      }
      return formConfig
    }
  }
}