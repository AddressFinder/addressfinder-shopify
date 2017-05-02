(function(d, w){

  function bootUp(){
    var f = new w.AF.FormFieldMappings();
    f.init();

    var currentFormFields = f.currentForm.fields;
    var widgets = [];
    function _createWidget(countryISO) {
      var widget = new w.AF.ShopifyWidget();
      var addressField = currentFormFields[Object.keys(currentFormFields)[0]].element;
      widget.init(addressField, countryISO);
      widgets.push(widget);
    }

    function _setFieldValueByMetaData(){

    }

    function _setFieldValues(address, metaData){
      w.console.log('address', address);
      w.console.log('metaData', metaData);
      var mappings = widget.country.fieldAPIMappngs;
      Object.keys(mappings).forEach(function(fieldName){
        w.console.log('fieldName', fieldName);
        if (widget.country.iso == 'NZ' && mappings[fieldName].type == 'function') {
          w.console.log('use AF formatting functions');
          return;
        }
        _setFieldValueByMetaData(metaData[mappings[fieldName].name]);
        w.console.log('use AF API Mapping in metaData: ', metaData[mappings[fieldName].name]);
      });
    }

    function _setWidgetHandlers(){
      widgets.forEach(function(widget){
        widget.instance.on('result:select', _setFieldValues);
      });
    }

    function _setWidgetStatus(countryISO){
      widgets.forEach(function(widget){
        widget.setStateByCountry(countryISO);
      });
    }

    function _formChangeHandler(event){
      var targetElem = event.target;
      if (targetElem.getAttribute('id') == f.currentForm.countryField && targetElem.value) {
        _setWidgetStatus(targetElem.value);
      }
    }

    if (currentFormFields) {
      Object.keys(w.AF.CountryMappings).forEach(_createWidget);

      d.body.addEventListener('change', _formChangeHandler);

      _setWidgetStatus(d.getElementById(f.currentForm.countryField).value);
      _setWidgetHandlers();
    }
  }

  function testForReadiness(){
    var errorOccured = false,
      checkArray = [
        {objName:'AddressFinderPlugin', message:'No AddressFinder Key found. See: https://addressfinder.nz/docs/shopify/'},
        {objName:'AddressFinder',       message:'The AddressFinder Widget Script failed to load'},
        {objName:'AF',                  message:''}
      ];
    checkArray.forEach(function(item){
      if (!w[item['objName']]) {
        w.console.warn(item['message']);
        errorOccured = true;
        return;
      }
    });
    if (!errorOccured) bootUp();
  }

  var scriptLoader = new w.AF.ScriptLoader();
  scriptLoader.loadScript(testForReadiness);

})(document, window);
