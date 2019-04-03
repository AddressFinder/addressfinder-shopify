export default {
  label: "Standard Shipping Checkout",
  layoutSelector: ".section section--shipping-address",
  countryIdentifier: 'checkout_shipping_address_country',
  searchIdentifier: "checkout_shipping_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: 'checkout_shipping_address_address1',
      suburb: null,
      city: 'checkout_shipping_address_city',
      region: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    regionMappings: null
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: 'checkout_shipping_address_address1',
      address2: null,
      suburb: 'checkout_shipping_address_city',
      state: 'checkout_shipping_address_province',
      postcode: 'checkout_shipping_address_zip',
    },
    stateMappings: null
  }
}