# Development

Follow the setup instructions in [BUILD.md](BUILD.md), and then:

# Developing JS

1. `npm install -g live-server`
1. `npm install -g live-server-https`
2. `live-server --https=/usr/local/lib/node_modules/live-server-https dist/`

This will open up a browser window (https://127.0.0.1:8080) with the `dist` directory contents displayed.

To develop and test this plugin, you should:

1. Visit the Abletech Shopify test server. You can find url and the credentials [here](https://sites.google.com/a/abletech.co.nz/wiki/addressfinder/plugins)

# Live reload

In a separate window, run:

1. `npm run watch`

Then whenever a file is edited, it will be re-compiled and available for reloading.

# Developing PHP or JS
Another way to test changes is to login to the WooCommerce server and copy and paste your local files into their WooCommerce counterparts. You will need to do this if you want to make changes the the php code.

1. To login to the WooCommerce server your public ssh key has to be added. Ask Nigel about this.

2. If you are using the Woocommerce 2 test server, Run ssh root@45.55.11.166 in the terminal. For WooCommerce 3 run ssh root@45.77.50.98

3. Find the file that you want to update. From the root the path to WooCommerce files is: /var/www/html/wp-content/plugins/addressfinder-woo

4. To update the files you'll need to use vim in the terminal. Beginners Guide to Vim may be helpful: https://sites.google.com/a/abletech.co.nz/wiki/technology-tips/beginners-guide-to-vim

5. When you save the files they update on the WooCommerce store.