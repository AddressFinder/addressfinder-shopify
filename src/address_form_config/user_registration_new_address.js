
import regionMappings from './region_mappings'

export default {
  label: "User Registration Address Form",
  layoutSelector: "#AddressNewForm",
  countryIdentifier: 'AddressCountryNew',
  searchIdentifier: 'AddressAddress1New',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'AddressAddress1New',
      address2: 'AddressAddress2New',
      suburb: 'AddressAddress2New',
      city: 'AddressCityNew',
      region: 'AddressProvinceNew',
      postcode: 'AddressZipNew',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'AddressAddress1New',
      address2: 'AddressAddress2New',
      suburb: 'AddressCityNew',
      state: 'AddressProvinceNew',
      postcode: 'AddressZipNew',
    },
    stateMappings: null
  }
}