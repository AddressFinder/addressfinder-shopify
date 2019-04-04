import PluginManager from "./plugin_manager";
import MutationHelper from "./mutation_helper"
import ConfigManager from "./config_manager"
export default class ShopifyPlugin {
  constructor() {
    this.loadAF()

    window.AF = window.AF || {}
    this.PluginManager = null
    this.ConfigManager = new ConfigManager()

    new MutationHelper({
      mutationEventHandler: this.mutationEventHandler.bind(this),
      ignoredClass: "af_list"
    })
  }

  mutationEventHandler() {
    let addressFormConfigurations = this.ConfigManager.load()
    if (this.PluginManager) {
      this.PluginManager.reload(addressFormConfigurations)
    }
  }

  _disableGoogleAutocomplete(repetitions) {
    var iframe = document.querySelector('#google-autocomplete-iframe, #autocomplete-service-iframe');
  
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
      nzKey: window.AddressFinderPlugin.key,
      auKey: window.AddressFinderPlugin.key,
      nzWidgetOptions: window.AddressFinderPlugin.nzWidgetOptions || window.AddressFinderPlugin.widgetOptions || {},
      auWidgetOptions: window.AddressFinderPlugin.auWidgetOptions || window.AddressFinderPlugin.widgetOptions || {},
      debug: window.AddressFinderPlugin.debug || false
    }

    this.PluginManager = new PluginManager({
      addressFormConfigurations: this.ConfigManager.load(),
      widgetConfig,
      eventToDispatch: 'input' 
    })
  
    window.AF._shopifyPlugin = this.PluginManager
  }

   _addScript() {
    var s = document.createElement('script')
    s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
    s.async = 1
    s.onload = this._initPlugin.bind(this)
    document.body.appendChild(s)
  }

  loadAF(){
    if ( window.AF && window.AF.Widget ) {
      this._initPlugin();
    } else {
      this._addScript();
    }
  }
}

new ShopifyPlugin