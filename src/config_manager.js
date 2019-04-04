import standardBillingCheckout from './address_form_config/standard_billing_checkout'
import standardShippingCheckout from './address_form_config/standard_shipping_checkout'
import userRegistrationNewAddress from './address_form_config/user_registration_new_address'
import dynamicFormConfig from './address_form_config/dynamic_edit_address'

export default class ShopifyConfigurationManager {

   load() {
    let dynamicForms = this.generateDynamicForms()

    const addressFormConfigurations = [
      standardBillingCheckout,
      standardShippingCheckout,
      userRegistrationNewAddress,
      ...dynamicForms
    ]

    return addressFormConfigurations
  }

  generateDynamicForms() {
    let dynamicForms = []
    let identifyingElements = document.querySelectorAll(`[id^="${dynamicFormConfig.layoutSelector}"]`)
  
    identifyingElements.forEach((identifyingElement, index) => {
      dynamicForms.push(this._configureDynamicForm(identifyingElement, index))
    })

    return dynamicForms
  }
  
  _configureDynamicForm(identifyingElement, index) {
    if (identifyingElement) {
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
          regionMappings: null
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