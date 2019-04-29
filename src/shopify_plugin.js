import ConfigManager from './config_manager'
import { PageManager, MutationManager } from '@addressfinder/addressfinder-webpage-tools'

(function(d, w) {
  class ShopifyPlugin {
    constructor() {

      this.version = "1.3.0"
      // Manages the mapping of the form configurations to the DOM. 
      this.PageManager = null

      // Manages the form configuraions, and creates any dynamic forms
      this.ConfigManager = new ConfigManager()

      // Watches for any mutations to the DOM, so we can reload our configurations when something changes.
      new MutationManager({
        mutationEventHandler: this.mutationEventHandler.bind(this),
        ignoredClass: "af_list"
      })

      this._initPlugin()
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

    _initPlugin(){
      this._disableGoogleAutocomplete(5);
    
      const widgetConfig = {
        nzKey: w.AddressFinderPlugin.key,
        auKey: w.AddressFinderPlugin.key,
        nzWidgetOptions: w.AddressFinderPlugin.nzWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
        auWidgetOptions: w.AddressFinderPlugin.auWidgetOptions || w.AddressFinderPlugin.widgetOptions || {},
        debug: w.AddressFinderPlugin.debug || false
      }

      this.PageManager = new PageManager({
        addressFormConfigurations: this.ConfigManager.load(),
        widgetConfig,
        eventToDispatch: 'input' 
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