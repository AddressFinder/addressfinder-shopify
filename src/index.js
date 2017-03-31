(function(d, w){
  function init(){
    function ready(afRequire){
      w.console.log('afRequire', afRequire);
      var f = new w.AF.FormFieldMappings();
      f.init();
      var currentForm = f.currentForm;
      if (w.console) w.console.log(currentForm);
    }

    var scriptLoader = new w.AF.ScriptLoader();
    scriptLoader.loadScript(ready);
  }
  init();
})(document, window);
