(function(d, w){
  function init(){
    var f = new w.AF.FormFieldMappings();
    var currentForm = f.currentForm;
    if (w.console) w.console.log(currentForm);

    var scriptLoader = new w.AF.ScriptLoader();
    scriptLoader.loadScript();
  }
  d.addEventListener('DOMContentLoaded', init);
})(document, window);
