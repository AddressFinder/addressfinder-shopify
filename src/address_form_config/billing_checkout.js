import regionMappings from './region_mappings'

export default [{
  label: "Billing Checkout",
  layoutSelectors: ["#section--billing-address__different"],
  countryIdentifier: '#checkout_billing_address_country',
  searchIdentifier: "#checkout_billing_address_address1",
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#checkout_billing_address_address1',
      suburb: '#checkout_billing_address_address2',
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
},
{
  label: "Billing Checkout 2",
  layoutSelectors: [".fieldset--billing-address, #address1_billing"],
  countryIdentifier: '#checkout_billing_address_country',
  searchIdentifier: "#address1_billing",
  nz: {
    countryValue: "NZ",
    elements: {
      address1: '#address1_billing',
      suburb: '#address2_billing',
      city: '#city_billing',
      region: '.address_info_billing select[name=province_billing]',
      postcode: '#checkout_billing_address_zip',
    },
    regionMappings: regionMappings
  },
  au: {
    countryValue: "AU",
    elements: {
      address1: '#address1_billing',
      address2: '#address2_billing',
      suburb: '#city_billing',
       region: '.address_info_billing select[name=province_billing]', 
      postcode: '#checkout_billing_address_zip',
    },
    stateMappings: null
  }
}]