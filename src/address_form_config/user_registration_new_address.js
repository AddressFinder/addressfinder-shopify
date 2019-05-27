
// We also have a config for editing addresses in the users account. This is dynamically generated in config_manager.js

import userRegistrationRegionMappings from './user_registration_region_mappings'
import userRegistrationStateMappings from './user_registration_state_mappings'

export default [{
  label: "User Registration Address Form",
  layoutSelectors: ["input[name='address[address1]']", "input[name='address[address2]']"],
  countryIdentifier: "select[name='address[country]']",
  searchIdentifier: "input[name='address[address1]']",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: "input[name='address[address1]']",
      suburb: "input[name='address[address2]']",
      city: "input[name='address[city]']",
      region: "select[name='address[province]']",
      postcode: "input[name='address[zip]']",
    },
    regionMappings: userRegistrationRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: "input[name='address[address1]']",
      address2: "input[name='address[address2]']",
      suburb: "input[name='address[city]']",
      state: "select[name='address[province]']",
      postcode: "input[name='address[zip]']",
    },
    stateMappings: userRegistrationStateMappings
  }
}]