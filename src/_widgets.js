/*
 - Widgets are invoked after:
   - a list of countries are available within the window.AF namespace.
   - the AF-widget script is loaded
 - All widgets are tied to a unique AF Token
 - A widget is tied to a country (AU or NZ)
 - Only one widget should be visible at a time
 - Widgets become enabled when their corresponding country is selected. Other widgets become disabled.
 - If neither of the corresponding countries are selected, all widgets become disabled.
 - All widgets are tied to a corresponding addressfield
*/
(function(w){

  function Widget(){
    function _setFieldValues(address, metaData){
      Object.keys(widget.country.fieldAPIMappngs).forEach(function(field){
        w.console.log('field', field);
        if (widget.country.iso == 'NZ' && field.type == 'function') {
          w.console.log('use AF formatting functions');
          return;
        }
        w.console.log('use AF API Mapping in metaData: ', metaData);
      });
    }

    var widget = this;

    widget.create = function(){
      widget.instance = new w.AddressFinder.Widget(widget.field, widget.AFKey, widget.country);
      widget.instance.on('results:select', _setFieldValues);
    };

    widget.init = function(targetField, AFKey, countryISO){
      if (targetField) widget.field = targetField;
      widget.AFKey = (AFKey ? AFKey : w.AddressFinderPlugin.key);
      if (countryISO) widget.country = w.AF.CountryMappings[countryISO.toDownCase()];
      if (w.AddressFinder && w.AddressFinder.Widget) widget.create();
    };
    return widget;
  }

  w.AF ? w.AF.ShopifyWidget = Widget : w.AF = {ShopifyWidget: Widget};

})(window);
