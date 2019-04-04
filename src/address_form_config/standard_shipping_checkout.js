import defaultRegionMappings from './default_region_mappings'
import defaultStateMappings from './default_state_mappings'

export default {
  label: "Standard Shipping Checkout",
  layoutSelector: ".section--shipping-address",
  countryIdentifier: 'checkout_shipping_address_country',
  searchIdentifier: "checkout_shipping_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1and2: 'checkout_shipping_address_address1',
      address1: null,
      address2: null,
      suburb: null,
      city: 'checkout_shipping_address_city',
      region: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    regionMappings: defaultRegionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1and2: 'checkout_shipping_address_address1',
      address1: null,
      address2: null,
      suburb: 'checkout_shipping_address_city',
      state: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    stateMappings: defaultStateMappings
  }
}