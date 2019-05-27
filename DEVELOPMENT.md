# Development

Follow the setup instructions in [BUILD.md](BUILD.md), and then:

# Developing JS

1. `npm install -g live-server`
1. `npm install -g live-server-https`
2. `live-server --https=/usr/local/lib/node_modules/live-server-https dist/`

This will open up a browser window (https://127.0.0.1:8080) with the `dist` directory contents displayed.

To develop and test this plugin, you should:

1. Visit the abletech wiki to find credentials to our Shopify test account
1. Follow the installation instructions from the [README.md](README.md) file
1. Adjust the path of the script to the live server version. It is probably at: https://127.0.0.1:8080/shopify-v1-boot.js
1. Save

Now you can visit the store and trial your plugin changes by selecting an item to purchase and
visiting the checkout.

# Live reload

In a separate window, run:

1. `npm run watch`

Then whenever a file is edited, it will be re-compiled and available for reloading.

### Debugging
  If you are debugging a customer site, you can type `addressfinderDebugMode()` into the javascript console. This will reinitialise the widget, with the debug flag set to true, so you can see console logs from the addressfinder-webpage-tools npm package.
