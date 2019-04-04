export default class FormManager {
  constructor(widgetConfig, formHelperConfig, eventToDispatch){
    this.widgetConfig = widgetConfig
    this.formHelperConfig = formHelperConfig
    this.eventToDispatch = eventToDispatch
    this.widgets = {}
    this.countryCodes = ["au", "nz"]

    this._bindToForm()
  }

  // Shuts down this form_helper by disabling the widget and any callback handlers.
  destroy(){
    this._log("Destroying widget", this.formHelperConfig.label)

    for (var widgetCountryCode in this.widgets) {
      this.widgets[widgetCountryCode].disable()
      this.widgets[widgetCountryCode].destroy()
    }

    this.widgets = null

    this.formHelperConfig.countryElement.removeEventListener("change", this.boundCountryChangedListener)
  }

  _bindToForm(){
    this.boundCountryChangedListener = this._countryChanged.bind(this) // save this so we can unbind in the destroy() method
    this.formHelperConfig.countryElement.addEventListener("change", this.boundCountryChangedListener);

    let nzWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.nzKey, "nz", this.widgetConfig.nzWidgetOptions);
    nzWidget.on("result:select", this._nzAddressSelected.bind(this))
    this.widgets["nz"] = nzWidget

    let auWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.auKey, "au", this.widgetConfig.auWidgetOptions);
    auWidget.on("result:select", this._auAddressSelected.bind(this))
    this.widgets["au"] = auWidget

    // Prevents the widget from throwing errors if the activeCountry is not 'nz' or 'au'
    this.widgets["null"] = {
      enable: function(){},
      disable: function(){},
      destroy: function(){}
    }

    this._countryChanged(null, true)
  }

  _countryChanged(event, preserveValues){
    var activeCountry;
    switch (this.formHelperConfig.countryElement.value) {
      case this.formHelperConfig.nz.countryValue:
      activeCountry = "nz"
      break;
    case this.formHelperConfig.au.countryValue:
      activeCountry = "au"
      break;
    default:
      activeCountry = "null";
    }

    this._setActiveCountry(activeCountry)

    // Usually, preserveValues should be true, as this prevents the users saved addresses being cleared on page load.
    // Setting preverseValues to false clears the address fields on country change, which is useful for testing.  
    if(!preserveValues) {
      const isInactiveCountry = countryCode => countryCode != activeCountry
      this.countryCodes.filter(isInactiveCountry)
                       .forEach(this._clearElementValues.bind(this))
    }
  }

  _clearElementValues(countryCode){
    const elements = this.formHelperConfig[countryCode].elements
    Object.entries(elements).forEach(([name, element]) => {
      if (element) this._setElementValue(element, "", name);
    })
  }

  _setActiveCountry(countryCode){
    this._log("Setting active country", countryCode)

    Object.values(this.widgets).forEach(widget => widget.disable())
    this.widgets[countryCode].enable()
  }

  _combineAddressElements(elements) {
    // If we have two valid address elements, connect the string with a comma in between, otherwise just use the first.
    // For example: 
    // ['65 Beauchamp Street', 'Karori'] becomes '65 Beauchamp Street, Karori'
    // ['34 Arapuni Road', ""] becomes '34 Arapuni Road'

    const addressIsPresent = element => element != null && element != ""
    const combined = elements.filter(addressIsPresent)
    return combined.length > 1 ? combined.join(", ") : combined[0]
  }

  _nzAddressSelected(fullAddress, metaData){
    let elements = this.formHelperConfig.nz.elements
    let selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);

    if (!elements.address_line_2 && !elements.suburb) {
      // If we only have address_line_1, the address line 1, 2 and suburb values are populated in that field.
      const combined = this._combineAddressElements([selected.address_line_1_and_2(), selected.suburb()])
      this._setElementValue(elements.address_line_1, combined, "address_line_1")
    } else if (!elements.address_line_2 && elements.suburb) {
      // If we have address_line_1 and a suburb field, put address 1 and 2 into address line 1, and suburb into the suburb field.
      this._setElementValue(elements.address_line_1, selected.address_line_1_and_2(), "address_line_1")
      this._setElementValue(elements.suburb, selected.suburb(), "suburb")
    } else {
      // If we have all 3 fields populate each one.
      this._setElementValue(elements.address_line_1, selected.address_line_1(), "address_line_1")
      this._setElementValue(elements.address_line_2, selected.address_line_2(), "address_line_2")
      this._setElementValue(elements.suburb, selected.suburb(), "suburb")
    }

    this._setElementValue(elements.city, selected.city(), "city")
    this._setElementValue(elements.postcode, selected.postcode(), "postcode")

    if (this.formHelperConfig.nz.regionMappings) {
      // matches the region returned by the api with the region values in the select field 
      const translatedRegionValue = this.formHelperConfig.nz.regionMappings[metaData.region]
      this._setElementValue(elements.region, translatedRegionValue, "region")
    }
    else {
      this._setElementValue(elements.region, metaData.region, "region")
    }
  }

  _auAddressSelected(fullAddress, metaData){
    let elements = this.formHelperConfig.au.elements

    if (!elements.address_line_2) {
      // If we only have address_line_1, put both address 1 and 2 into this line
      const combined = this._combineAddressElements([metaData.address_line_1, metaData.address_line_2])
      this._setElementValue(elements.address_line_1, combined, "address_line_1")
    } else {
      this._setElementValue(elements.address_line_1, metaData.address_line_1, "address_line_1")
      // metaData.address_line_2 could be undefined, in which case we replace it with an empty string
      const address_line_2 = metaData.address_line_2 || ""
      this._setElementValue(elements.address_line_2, address_line_2, "address_line_2")
    }

    this._setElementValue(elements.locality_name, metaData.locality_name, "suburb")
    this._setElementValue(elements.postcode, metaData.postcode, "postcode")

    if (this.formHelperConfig.au.stateMappings) {
      // matches the state returned by the api with the region values in the select field 
      const translatedStateValue = this.formHelperConfig.au.stateMappings[metaData.state_territory]
      this._setElementValue(elements.state_territory, translatedStateValue, "state_territory")
    }
    else {
      this._setElementValue(elements.state_territory, metaData.state_territory, "state_territory")
    }
  }

  _setElementValue(element, value, elementName){
    if (!element) {
      var errorMessage = 'AddressFinder Error: '
                         + 'Attempted to update value for element that could not be found.\n'
                         + '\nElement: ' + elementName
                         + '\nValue: ' + value;

      if (window.console) {
        console.warn(errorMessage);
      }

      return
    }

    element.value = value;
    this._dispatchEvent(element)
  }

  _dispatchEvent(element) {
    // This function dispatches an event when the form fields are set, so the store knows the fields have changed. This can affect form validation.
    // Typically we would use a 'change' event here, but Shopify is listening for the 'input' event specifically, so we pass the eventToDispatch as a param.
    // It is also important to set 'bubbles' to true, as the store may listen for the event on the document, rather than	
    // the input field itself. This allows the event to move up the tree, triggering the event on both the input element and the document.	
    var event;
    switch (typeof (Event)) {
    case 'function':
      event = new Event(this.eventToDispatch, {'bubbles':true, "cancelable": false});
      break;
    default:
      event = document.createEvent('Event');
      event.initEvent(this.eventToDispatch, true, false);
    }
    element.dispatchEvent(event);
  }

  _log(message, data=undefined){
    if (this.widgetConfig.debug && window.console) {
      if (data != undefined) {
        console.log(`FormHelper for layout ${this.formHelperConfig.label}: ${message}`, data)
      }
      else {
        console.log(`FormHelper for layout ${this.formHelperConfig.label}: ${message}`)
      }
    }
  }
}
