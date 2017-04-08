;(function($, win){
  'use strict';

  var openTarget = $.openTarget = (function() {

    function init(){
      openWindow();
    }
    
    /**
     * OpenWindow
     * click to open Target
    */
    function openWindow() {
      var $linkClick = $(".newOpen");
      $linkClick.on('click', function(event) {
        event.preventDefault();
        var linkTarget = $(this).attr('data-ref');
        fullOpen(linkTarget);
      });
    }

    /**
     * FullOpen
     * click to open Target
    */
    function fullOpen(strURL) {
      var options;
      if (navigator.appName.charAt(0)=='M') {
        options = "fullscreen=1,scrollbars=0";
      } else if (navigator.appName.charAt(0)=='N') {
          options = "scrollbars=0,left=0,top=0"+ ",width=" + screen.width + ",height=" + screen.height;
      }
      window.open(strURL, "", options);
    }

    return {
      init: init
    };

  })();

  $(openTarget.init);

})(jQuery, window);