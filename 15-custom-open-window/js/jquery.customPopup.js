/*
  jQuery custom popup
*/
;(function($, win){
  'use strict';

  var TopPage = $.toppage = (function() {
    var $win = null,
        $this = null,
        
        offsetTop = 0,
        num = 0,
        title = "",
        scrImg = "";

    function init(){
      openFullWindow();
    }

    /**
     * openFullWindow
     * load openFullWindow
     */
    function openFullWindow() {
      var options;

      if (navigator.appName.charAt(0)=='M') {
          options = "fullscreen=1,scrollbars=0";
      } else if (navigator.appName.charAt(0)=='N') {
          options = "scrollbars=0,left=0,top=0"
                  + ",width=" + screen.width
                  + ",height=" + screen.height;
      }
      window.open(strURL, "", options);

    }

    
    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);