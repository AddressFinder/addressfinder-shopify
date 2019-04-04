
import defaultRegionMappings from './default_region_mappings'

export default {
  label: "User Registration Address Form",
  layoutSelector: "#AddressNewForm",
  countryIdentifier: 'AddressCountryNew',
  searchIdentifier: 'AddressAddress1New',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1and2: 'AddressAddress1New',
      address1: null,
      address2: null,
      suburb: 'AddressAddress2New',
      city: 'AddressCityNew',
      region: 'AddressProvinceNew',
      postcode: 'AddressZipNew',
    },
    regionMappings: defaultRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1and2: null,
      address1: 'AddressAddress1New',
      address2: 'AddressAddress2New',
      suburb: 'AddressCityNew',
      state: 'AddressProvinceNew',
      postcode: 'AddressZipNew',
    },
    stateMappings: null
  }
}