/*
 - AF only supports AU and NZ address types for now
 - Provinces contain a list of Shopify field-value mappings
 - Each of the keys within the `countries` object become:
   - Instances of a widget
   - Watch values for the Country form field
*/
(function(w){
  var countries = {
    au: {
      iso: 'AU',
      title: 'Australia',
      provinces: {
        'ACT': 'Australian Capital Territory',
        'NSW': 'New South Wales',
        'NT' : 'Northern Territory',
        'QLD': 'Queensland',
        'SA' : 'South Australia',
        'TAS': 'Tasmania',
        'VIC': 'Victoria',
        'WA' : 'Western Australia'
      },
      fieldAPIMappings: {
        address1: {
          name: 'address_line_1',
          type: 'field'
        },
        address2: {
          name: 'address_line_2',
          type: 'field'
        },
        city: {
          name: 'locality_name',
          type: 'field'
        },
        province: {
          name: 'state_territory',
          type: 'lookup'
        },
        zip: {
          name: 'postcode',
          type: 'field'
        }
      }
    },
    nz: {
      iso: 'NZ',
      title: 'New Zealand',
      provinces: {
        'Auckland Region': 'Auckland',
        'Bay of Plenty Region': 'Bay of Plenty',
        'Canterbury Region': 'Canterbury',
        'Gisborne Region': 'Gisborne',
        'Hawke\'s Bay Region': 'Hawke\'s Bay',
        'Manawatu-Wanganui Region': 'Manawatu-Wanganui',
        'Marlborough Region': 'Marlborough',
        'Nelson Region': 'Nelson',
        'Northland Region': 'Northland',
        'Otago Region': 'Otago',
        'Southland Region': 'Southland',
        'Taranaki Region': 'Taranaki',
        'Tasman Region': 'Tasman',
        'Waikato Region': 'Waikato',
        'Wellington Region': 'Wellington',
        'West Coast Region': 'West Coast'
      },
      fieldAPIMappings: {
        address1: {
          name: 'address_line_1_and_2',
          type: 'function'
        },
        address2: {
          name: 'suburb',
          type: 'function'
        },
        city: {
          name: 'city',
          type: 'function'
        },
        province: {
          name: 'region',
          type: 'lookup'
        },
        zip: {
          name: 'postcode',
          type: 'function'
        }
      }
    }
  };
  w.AF ? w.AF.CountryMappings = countries : w.AF = {CountryMappings: countries};
})(window);
