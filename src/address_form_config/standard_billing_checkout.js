export default {
  label: "Standard Billing Checkout",
  layoutSelector: "#section--billing-address__different",
  countryIdentifier: 'checkout_billing_address_country',
  searchIdentifier: "checkout_billing_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1and2: 'checkout_billing_address_address1',
      address1: null,
      address2: null,
      suburb: null,
      city: 'checkout_billing_address_city',
      region: 'checkout_billing_address_province',
      postcode: 'checkout_billing_address_zip',
    },
    regionMappings: null
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1and2: 'checkout_billing_address_address1',
      address1: null,
      address2: null,
      suburb: 'checkout_billing_address_city',
      state: 'checkout_billing_address_province',
      postcode: 'checkout_billing_address_zip',
    },
    stateMappings: null
  }
}