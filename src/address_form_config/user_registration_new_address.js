
import defaultRegionMappings from './default_region_mappings'
import defaultStateMappings from './default_state_mappings'

export default {
  label: "User Registration Address Form",
  layoutSelector: "AddressNewForm",
  countryIdentifier: '[name="address[country]"]',
  searchIdentifier: '[name="address[address1]"]',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1and2: '[name="address[address1]"]',
      address1: null,
      address2: null,
      suburb: '[name="address[address2]"]',
      city: '[name="address[city]"]',
      region: '[name="address[province]"]',
      postcode: '[name="address[zip]"]',
    },
    regionMappings: defaultRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1and2: null,
      address1: '[name="address[address1]"]',
      address2: '[name="address[address2]"]',
      suburb: '[name="address[city]"]',
      state: '[name="address[province]"]',
      postcode: '[name="address[zip]"]',
    },
    stateMappings: defaultStateMappings
  }
}

// edit user registration adds an id to these fields.