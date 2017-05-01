(function(d, w){
  function init(){
    function ready(afRequire){
      w.console.log('afRequire', afRequire);
      var f = new w.AF.FormFieldMappings();
      f.init();
      var currentForm = f.currentForm;
      if (w.console) w.console.log(currentForm);
      var widgets = [];
      function _createWidget(item) {
        var widget = new w.AF.ShopifyWidget();
        widget.init(currentForm.fields[0], 'AFKeyValue', item.iso);
        widgets.push(widget);
      }
      Object.keys(w.AF.CountryMappings).forEach(_createWidget);
    }

    var scriptLoader = new w.AF.ScriptLoader();
    scriptLoader.loadScript(ready);
  }
  init();
})(document, window);
