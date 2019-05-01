import regionMappings from './region_mappings'

export default {
  label: "Billing Checkout",
  layoutSelectors: ["#section--billing-address__different"],
  countryIdentifier: '#checkout_billing_address_country',
  searchIdentifier: "#checkout_billing_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#checkout_billing_address_address1',
      address2: '#checkout_billing_address_address2',
      suburb: null,
      city: '#checkout_billing_address_city',
      region: '#checkout_billing_address_province',
      postcode: '#checkout_billing_address_zip',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#checkout_billing_address_address1',
      address2: '#checkout_billing_address_address2',
      suburb: '#checkout_billing_address_city',
      state: '#checkout_billing_address_province',
      postcode: '#checkout_billing_address_zip',
    },
    stateMappings: null
  }
}