import ConfigManager from './config_manager'
import { PageManager, MutationManager } from './addressfinder-webpage-tools'

(function(d, w) {

  /*
  * When addressfinderDebugMode() is typed into the Javascript console the plugin will be reinitialised with debug set to true.
  * This allows us to debug more easily on customer sites.
  */
  function addressfinderDebugMode() {
    if (w.AddressFinder.initPlugin) {
      w.AddressFinderPlugin.debug = true
      w.AddressFinder.initPlugin()
    }
  }
  w.addressfinderDebugMode = addressfinderDebugMode
  class ShopifyPlugin {
    constructor() {

      this.version = "1.3.0"
      
      // Manages the mapping of the form configurations to the DOM. 
      this.PageManager = null

      // Manages the form configuraions, and creates any dynamic forms
      this.ConfigManager = null

      this._disableGoogleAutocomplete(5);
      this.initPlugin()
      // Create a reference to the initPlugin function so we can call it from the javascript console.
      w.AddressFinder.initPlugin = this.initPlugin
    }

    mutationEventHandler() {
      // When the form mutates, reload our form configurations, and reload the form helpers in the page manager.
      let addressFormConfigurations = this.ConfigManager.load()
      if (this.PageManager) {
        this.PageManager.reload(addressFormConfigurations)
      }
    }

    _disableGoogleAutocomplete(repetitions) {
      // Attempt to find the google autocomplete iframe. If it is found disable it, otherwise continue trying for 5 repetitions.
      var iframe = d.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');
    
      if (iframe) {
        iframe.src = '';
      }
    
      if (repetitions > 0) {
        setTimeout(this._disableGoogleAutocomplete, 1000, repetitions - 1);
      }
    }

    initPlugin(){
    
      const widgetConfig = {
        nzKey: w.AddressFinderPlugin.key,
        auKey: w.AddressFinderPlugin.key,
        nzWidgetOptions: w.AddressFinderPlugin.nzWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
        auWidgetOptions: w.AddressFinderPlugin.auWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
        debug: w.AddressFinderPlugin.debug || false
      }

      this.ConfigManager = new ConfigManager()

      // Watches for any mutations to the DOM, so we can reload our configurations when something changes.
      new MutationManager({
        widgetConfig: widgetConfig,
        mutationEventHandler: this.mutationEventHandler.bind(this),
        ignoredClass: "af_list"
      })

      this.PageManager = new PageManager({
        addressFormConfigurations: this.ConfigManager.load(),
        widgetConfig,
        // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
        formFieldChangeEventToDispatch: 'input',
        // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
        countryChangeEventToListenFor: 'change'
      })
    
      w.AddressFinderPlugin._shopifyPlugin = this.PageManager
    }
  }

  var s = d.createElement('script')
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
  s.async = 1
  s.onload = function() { new ShopifyPlugin }
  d.body.appendChild(s)

})(document, window)