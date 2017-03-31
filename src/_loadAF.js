(function(d, w){

  function _addScript(f) {
    var s = d.createElement('script');
    s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    s.async = 1;
    if (f !== undefined) s.onload = f;
    d.body.appendChild(s);
  }

  function _checkIfAFIsLoaded() {
    return (window.AF && window.AF.Widget);
  }

  function loadAF(){
    this.loadScript = function(callback){
      if (_checkIfAFIsLoaded()) {
        callback();
      } else {
        _addScript(callback);
      }
    };
    return this;
  }

  w.AF ? w.AF.ScriptLoader = loadAF : w.AF = {ScriptLoader: loadAF};

})(document, window);
