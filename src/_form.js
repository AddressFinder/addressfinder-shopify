(function(d,w){
  function Form(){
    var f = this;

    f.mappings = null;
    f.currentForm = null;
    f.activeCountryISO = null;
    f.activeWidget = null;
    f.widgets = [];

    function _createWidget(countryISO) {
      var widget = new w.AF.ShopifyWidget();
      var addressField = f.currentForm.fields[Object.keys(f.currentForm.fields)[0]].element;
      widget.init(addressField, countryISO);
      f.widgets.push(widget);
    }

    function _setFieldValues(address, metaData){
      w.console.log('address', address);
      w.console.log('metaData', metaData);
      Object.keys(f.currentForm.fields).forEach(function(fieldKeyName){
        var fieldItem = f.currentForm.fields[fieldKeyName];
        var fieldAPIMapping = f.activeWidget.country.fieldAPIMappings[fieldItem.mappingId];
        if (f.activeWidget.country.iso == 'NZ' && fieldAPIMapping.type == 'function') {
          var selected = new w.AddressFinder.NZSelectedAddress(address, metaData);
          w.console.log('use AF formatting functions');
          fieldItem.setValue(selected[fieldAPIMapping.name]());
          return;
        } else if (fieldAPIMapping.type == 'lookup') {
          w.console.log('use AF province lookup', f.activeWidget.country.provinces[metaData[fieldAPIMapping.name]]);
          fieldItem.setValue(f.activeWidget.country.provinces[metaData[fieldAPIMapping.name]]);
          return;
        } else {
          w.console.log('use AF API Mapping in metaData: ', metaData[fieldAPIMapping.name]);
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
      Object.keys(f.currentForm.fields).forEach(function(field){
        f.currentForm.fields[field].setValue();
      });
    }

    function _setWidgetStatus(countryISO){
      f.activeCountryISO = countryISO;
      f.activeWidget = null;
      f.widgets.forEach(function(widget){
        // Set widget state and return a boolean at the same time
        if (widget.setStateByCountry(countryISO)) f.activeWidget = widget;
      });
    }

    function _formChangeHandler(event){
      var targetElem = event.target;
      if (targetElem.getAttribute('id') == f.currentForm.countryField && targetElem.value) {
        if (f.activeWidget) _clearFields();
        _setWidgetStatus(targetElem.value);
      }
    }

    f.init = function(){
      var ffm = new w.AF.FormFieldMappings();
      ffm.init();

      f.currentForm = ffm.currentForm;
      if (f.currentForm && f.currentForm.fields) {
        Object.keys(w.AF.CountryMappings).forEach(_createWidget);

        d.body.addEventListener('change', _formChangeHandler);

        _setWidgetStatus(d.getElementById(f.currentForm.countryField).value);
        _setWidgetHandlers();
      }
    };

    return f;
  }

  w.AF ? w.AF.Form = Form : w.AF = {Form: Form};

})(document, window);
