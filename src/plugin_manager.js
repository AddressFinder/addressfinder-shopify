import FormHelper from "./form_helper"
import MutationHelper from "./mutation_helper"

export default class PluginManager {
  constructor({addressFormConfigurations, widgetConfig, eventToDispatch}) {
    this.formHelpers = []
    this.addressFormConfigurations = addressFormConfigurations
    this.widgetConfig = widgetConfig
    this.eventToDispatch = eventToDispatch
    this.loadFormHelpers()

    new MutationHelper({
      mutationEventHandler: this.loadFormHelpers.bind(this),
      ignoredClass: "af_list"
    })
  }

  loadFormHelpers() {
    this.formHelpers.forEach(formHelper => formHelper.destroy())
    this.identifiedAddressFormConfigurations = []
    this.formHelpers = []
    
    this._identifyAddressForms()

    console.log('loading form helpers')
    this.identifiedAddressFormConfigurations.forEach(this._initialiseFormHelper.bind(this))
  }

  _identifyAddressForms(){
    for (const addressFormConfig of this.addressFormConfigurations) {
      let identifyingElement = document.querySelector(`[id^="${addressFormConfig.layoutSelector}"]`)

      if (identifyingElement) {
        this.log(`Identified layout named: ${addressFormConfig.label}`)

        this.identifiedAddressFormConfigurations.push(addressFormConfig)
      }
    }
  }

  _initialiseFormHelper(addressFormConfig){
    console.log('init', addressFormConfig)
    let searchElement = document.querySelector(addressFormConfig.searchIdentifier) 

    if (searchElement) {
      let formHelperConfig = {
        countryElement: document.querySelector(addressFormConfig.countryIdentifier),
        searchElement: document.querySelector(addressFormConfig.searchIdentifier),
        label: addressFormConfig.label,
        layoutSelector: addressFormConfig.layoutSelector,
        nz: {
          countryValue: addressFormConfig.nz.countryValue,
          elements: {
            address_line_1_and_2: document.querySelector(addressFormConfig.nz.elements.address1and2),
            address_line_1: document.querySelector(addressFormConfig.nz.elements.address1),
            address_line_2: document.querySelector(addressFormConfig.nz.elements.address2),
            suburb: document.querySelector(addressFormConfig.nz.elements.suburb),
            city: document.querySelector(addressFormConfig.nz.elements.city),
            region: document.querySelector(addressFormConfig.nz.elements.region),
            postcode: document.querySelector(addressFormConfig.nz.elements.postcode)
          },
          regionMappings: addressFormConfig.nz.regionMappings
        },
        au: {
          countryValue: addressFormConfig.au.countryValue,
          elements: {
            address_line_1_and_2: document.querySelector(addressFormConfig.au.elements.address1and2),
            address_line_1: document.querySelector(addressFormConfig.au.elements.address1),
            address_line_2: document.querySelector(addressFormConfig.au.elements.address2),
            locality_name: document.querySelector(addressFormConfig.au.elements.suburb),
            city: null,
            state_territory: document.querySelector(addressFormConfig.au.elements.state),
            postcode: document.querySelector(addressFormConfig.au.elements.postcode)
          },
          stateMappings: addressFormConfig.au.stateMappings
        }
      }

      let helper = new FormHelper(this.widgetConfig, formHelperConfig, this.eventToDispatch)
      this.formHelpers.push(helper)
    }
  }

  log(message, data=undefined){
    if (this.widgetConfig.debug && window.console) {
      if (data != undefined) {
        console.log(`${message}`, data)
      }
      else {
        console.log(`${message}`)
      }
    }
  }
}