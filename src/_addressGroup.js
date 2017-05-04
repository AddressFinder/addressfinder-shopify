(function(d,w){
  function AddressGroup(){
    var f = this;

    f.activeAddressGroup = null;
    f.activeCountryISO = null;
    f.activeWidget = null;
    f.widgets = [];

    function _createWidget(countryISO) {
      // Only create widgets for matching countries
      var widget = new w.AF.ShopifyWidget();
      var addressField = f.activeAddressGroup.fields[Object.keys(f.activeAddressGroup.fields)[0]].element;
      widget.init(addressField, countryISO);
      f.widgets.push(widget);
    }

    function _setFieldValues(address, metaData){
      Object.keys(f.activeAddressGroup.fields).forEach(function(fieldKeyName){
        var fieldItem = f.activeAddressGroup.fields[fieldKeyName];
        var fieldAPIMapping = f.activeWidget.country.fieldAPIMappings[fieldItem.mappingId];
        if (f.activeWidget.country.iso == 'NZ' && fieldAPIMapping.type == 'function') {
          var selected = new w.AddressFinder.NZSelectedAddress(address, metaData);
          fieldItem.setValue(selected[fieldAPIMapping.name]());
          return;
        } else if (fieldAPIMapping.type == 'lookup') {
          fieldItem.setValue(f.activeWidget.country.provinces[metaData[fieldAPIMapping.name]]);
          return;
        } else {
          fieldItem.setValue(metaData[fieldAPIMapping.name]);
        }
      });
    }

    function _setWidgetHandlers(){
      f.widgets.forEach(function(widget){
        widget.instance.on('result:select', _setFieldValues);
      });
    }

    function _clearFields(){
      Object.keys(f.activeAddressGroup.fields).forEach(function(field){
        f.activeAddressGroup.fields[field].setValue();
      });
    }

    function _setCountry(countryISO){
      f.activeCountryISO = countryISO;
      f.activeWidget = null;
      f.widgets.forEach(function(widget){
        // Set widget state and return a boolean at the same time
        if (widget.setStateByCountry(countryISO)) f.activeWidget = widget;
      });
    }

    function _countryChangeHandler(event){
      var targetElemValue = event.target.value;
      if (targetElemValue != f.activeCountryISO) {
        if (f.activeWidget) _clearFields();
        _setCountry(targetElemValue);
      }
    }

    f.init = function(formObj){
      f.activeAddressGroup = formObj;
      if (f.activeAddressGroup && f.activeAddressGroup.fields) {
        Object.keys(w.AF.CountryMappings).forEach(_createWidget);
        d.querySelector(f.activeAddressGroup.countryField).addEventListener('change', _countryChangeHandler);
        _setCountry(d.querySelector(f.activeAddressGroup.countryField).value);
        _setWidgetHandlers();
      }
    };

    return f;
  }

  w.AF ? w.AF.AddressGroup = AddressGroup : w.AF = {AddressGroup: AddressGroup};

})(document, window);
