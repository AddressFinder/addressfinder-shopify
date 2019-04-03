export default {
  label: "Address book (Blueprint)",
  layoutSelector: "#AddressEditForm",
  countryIdentifier: 'FormField_11',
  searchIdentifier: "FormField_8",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'FormField_8',
      suburb: 'FormField_9',
      city: 'FormField_10',
      region: 'FormField_12',
      postcode: 'FormField_13',
    },
    regionMappings: null
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'FormField_8',
      address2: 'FormField_9',
      suburb: 'FormField_10',
      state: 'FormField_12',
      postcode: 'FormField_13',
    },
    stateMappings: defaultStateMappings
  }
}