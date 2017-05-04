(function(w){

  function _warn(message){
    if (w.console && w.console.warn) {
      w.console.warn(message);
    }
  }

  function bootUp(){
    var ffm = new w.AF.FormFieldMappings();
    var addressGroups = ffm.findAddressGroups();
    addressGroups.forEach(function(item, index){
      var addressGroup = new w.AF.AddressGroup();
      if (item.fields) {
        addressGroup.init(item);
        addressGroups[index] = addressGroup;
      }
    });
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
        _warn(item['message']);
        errorOccured = true;
        return;
      }
    });
    if (!errorOccured) bootUp();
  }

  var scriptLoader = new w.AF.ScriptLoader();
  scriptLoader.loadScript(testForReadiness);

})(window);
