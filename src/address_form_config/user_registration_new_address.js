
// We also have a config for editing addresses in the users account. This is dynamically generated in config_manager.js

import userRegistrationRegionMappings from './user_registration_region_mappings'
import userRegistrationStateMappings from './user_registration_state_mappings'

export default [{
  label: "User Registration Address Form",
  layoutSelectors: ["#AddressNewForm"],
  countryIdentifier: '#AddressCountryNew',
  searchIdentifier: '#AddressAddress1New',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressAddress2New',
      city: '#AddressCityNew',
      region: '#AddressProvinceNew',
      postcode: '#AddressZipNew',
    },
    regionMappings: userRegistrationRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressCityNew',
      state: '#AddressProvinceNew',
      postcode: '#AddressZipNew',
    },
    stateMappings: userRegistrationStateMappings
  }
},
{
  label: "User Registration Address Form Alternate",
  layoutSelectors: ["#AddAddress"],
  countryIdentifier: '#AddressCountryNew',
  searchIdentifier: '#AddressAddress1New',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressAddress2New',
      city: '#AddressCityNew',
      region: '#AddressProvinceNew',
      postcode: '#AddressZipNew',
    },
    regionMappings: userRegistrationRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#AddressAddress1New',
      address2: '#AddressAddress2New',
      suburb: '#AddressCityNew',
      state: '#AddressProvinceNew',
      postcode: '#AddressZipNew',
    },
    stateMappings: userRegistrationStateMappings
  }
}]