# AddressFinder-Shopify Plugin

## Description
The AddressFinder plugin for Shopify adds an autocomplete capability to the billing and shipping address fields for New Zealand
and Australian Shopify Stores.

* ***Get verified addresses*** – No more mistakes. Save addresses straight from your
  webform to your database.
* ***Access the latest addresses*** – Access addresses frequently refreshed from
  multiple sources.
* ***No software required*** – AddressFinder is a JavaScript widget and API. This
  plugin requires ZERO programming experience.

#### Supported Countries

* [Australia](https://addressfinder.com.au/)
* [New Zealand](https://addressfinder.nz/)

#### Compatibility
AddressFinder-Shopify supports all modern browsers. Versions of Internet Explorer are supported from version 9 to current.

## Installation
If you already have Google Analytics installed, please start at Step 4.

1. Log into the admin panel for your Shopify site, and navigate to Online Store -> Preferences.
2. Scroll down to the Google Analytics section. To complete this section you must have a Google Analytics account. If you do not have one, please read the following article: https://help.shopify.com/manual/reports-and-analytics/google-analytics. You will need to enter your Google Analytics Tracking Code(this will be in the format: "UA-XXXXXXXX-XX")
3. Click Save
4. Reopen your Shopify Online Store Preferences and go to the Google Analytics section. Your Tracking Code should appear here.
5. Copy the following script into the "Additional Google Analytics Javascript" textbox that is displayed. However if there is already text present in this textbox, then append the following text:

  ```
  (function(d,w){
    w.AddressFinderPlugin = {
      key: "ADDRESSFINDER_NZ_DEMO_KEY"
    };
      var s = d.createElement("script");
      s.src = "https://api.addressfinder.io/assets/shopify/v1/boot.js";
      s.async = 1;
      d.body.appendChild(s);
  })(document, window);
  ```
6. Tick the "Use Enhanced Ecommerce" checkbox at the bottom of the Google Analytics section.
7. Replace the `ADDRESSFINDER_NZ_DEMO_KEY` placeholder in the snippet you added in step 5 with your own AddressFinder key

  ![Shopify Install](/assets/shopify-install.png)

#### Obtaining a licence key

New users can register for a free AddressFinder account at one of these links:
* [Free Account for Australia](https://portal.addressfinder.io/signup/au/free)
* [Free Account for New Zealand](https://portal.addressfinder.io/signup/nz/free)

Existing users can obtain their API key from the
[AddressFinder Portal](https://portal.addressfinder.io/).

### Adjustments to comply with NZ specific Address Formatting
Here in New Zealand we have different rules and regulations when it comes to the way we set out our addresses. In order to capture all of the correct address information we suggest you make a couple of adjustments to the billing/shipping page layout. These adjustments are 1) inclusion of the 'Address Line 2' field and 2) renaming of the 'Address line 2' and 'City' fields.

1. Go into your Shopify settings>Checkout and scroll down to Form Options. (https://addressfinder.myshopify.com/admin/settings/checkout) As per below, make 'Address line 2 (apartment,unit etc)' Optional. You may want to make 'Company Name' and 'Phone Number' optional also. Then Save.

  ![Including the Address Line 2 Field - NZ](/assets/nz-enable-address-fields.png)

2. Remain in the Shopify Settings>Checkout page and scroll down further to the 'Checkout Language' section.

Click on 'Manage Checkout Language'.

Scroll all the way down to 'Checkout Contact' and then further to the 'Optional address2 label' field. Populate this with "Address 2 (optional)". Also populate the 'City Label' field with "Town/City". Then Save.

  ![Renaming Fields - NZ](/assets/nz-rename-fields.png)

Depending on your theme your shipping page should look something like this...

  ![Complete Shipping Page - NZ](/assets/nz-complete-shipping-page.png)

### Adjustments to comply with AU specific Address Formatting
Here in Australia, we have different rules and regulations when it comes to the way we set out our addresses. In order to capture all of the correct address information we suggest you make a couple of adjustments to the billing/shipping page layout. These adjustments are 1) inclusion of the 'Address Line 2' field and 2) renaming of the 'Address line 2' and 'City' fields.

1) Go into your shopify settings>Checkout and scroll down to Form Options. (https://addressfinder.myshopify.com/admin/settings/checkout) As per below, make 'Address line 2 (apartment,unit etc)' Optional. You may want to make 'Company Name' and 'Phone Number' optional also. Then Save.

  ![Including the Address Line 2 Field - AU](/assets/au-enable-address-fields.png)

2) Remain in the Shopify Settings>Checkout page and scroll down further to the 'Checkout Language' section.

Click on 'Manage Checkout Language'.

Scroll all the way down to 'Checkout Contact' and then further to the 'Optional address2 label' field. Populate this with "Address 2 (optional)". Also populate the 'City Label' field with "Suburb/Locality". Then save.

  ![Renaming Fields - AU](/assets/au-rename-fields.png)

Depending on your theme, your checkout page should look something like this...

  ![Complete Shipping Page - AU](/assets/au-complete-shipping-page.png)

## Software License

The AddressFinder plugin for Shopify is released under the permissive free software [MIT License](https://github.com/AbleTech/addressfinder-shopify/blob/master/LICENCE.md).
