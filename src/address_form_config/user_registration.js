export default {
  label: "You Addresses",
  layoutSelector: "#address_form_new",
  countryIdentifier: 'AddressCountryNew',
  searchIdentifier: "AddressAddress1New",
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
    regionMappings: {
      "Auckland Region": "Auckland Region",
      "Bay Of Plenty Region": "Bay of Plenty",
      "Canterbury Region": "Canterbury",
      "Gisborne Region": "Gisborne Region",
      "Hawke's Bay Region": "Hawke's Bay",
      "Manawatu-Wanganui Region": "Manawatu-Wanganui Region",
      "Marlborough Region": "Marlborough",
      "Nelson Region": "Nelson Region",
      "Northland Region": "Northland",
      "Otago Region": "Otago",
      "Southland Region": "Southland",
      "Taranaki Region": "Taranaki",
      "Tasman Region": "Tasman",
      "Waikato Region": "Waikato",
      "Wellington Region": "Wellington Region",
      "West Coast Region": "West Coast",
      "No Region": "Chatham Islands"
    }
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

// edit user registration adds an id to these fields.