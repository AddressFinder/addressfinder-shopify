(function(d, w){

  function bootUp(){
    var f = new w.AF.Form();
    f.init();
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
