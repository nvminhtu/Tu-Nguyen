(function($) {
    "use strict";
    var $win;
        

    function init(){
      applyBackground();
    }

    function applyBackground() {
      var $wrapIntro = $("#introduction");
      $wrapIntro.css({backgroundSize: "cover"});
    }

    $(function() {
      init();
    });
})(jQuery);