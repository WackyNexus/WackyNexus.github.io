var wpm = (function(wpm) {
  "use strict"
  wpm.index = (function(index) {
    ow_Write("#output_main", "Loading wpm.index");
    return {
      'reflex-api': "reflex-api.js"
    };
  }(wpm.index || {}));
  return wpm;
}(wpm || {}));
