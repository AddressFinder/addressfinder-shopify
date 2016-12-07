# AddressFinder-Shopify Plugin

## Description
The AddressFinder plugin for Shopify adds an autocomplete capability to the billing and shipping address fields for New Zealand
and Australian Shopify Stores.

* ***Get verified addresses*** – No more mistakes. Save addresses straight from your
  webform to your database.
* ***Access the latest addresses*** – Access addresses frequently refreshed from
  multiple sources.
* ***No software required*** – AddressFinder is a JavaScript widget and API. This
  plugin requires ZERO programming ability.

#### Supported Countries

* [Australia](https://addressfinder.com.au/)
* [New Zealand](https://addressfinder.nz/)

#### Compatibility

AddressFinder-Shopify requires IE11, Chrome, Safari, or Firefox.

## Installation

1. Log into the admin panel for your Shopify site, and navigate to Online Store -> Preferences.
2. Scroll down to the Google Analytics section. To complete this section you must have a Google Analytics account. If you do not have one, please read the following article: https://help.shopify.com/manual/reports-and-analytics/google-analytics. You will need to enter your Google Analytics Tracking Code(this will be in the format: "UA-XXXXXXXX-XX")
3. Click Save
4. Reopen the Online Store Preferences and go to the Google Analytics section. Your Tracking Code should appear here.
5. Copy the following script into the "Additional Google Analytics Javascript" textbox that is displayed:
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

## Software License

The AddressFinder plugin for Shopify is released under the permissive free software [MIT License](https://github.com/AbleTech/addressfinder-shopify/blob/master/LICENCE.md).
