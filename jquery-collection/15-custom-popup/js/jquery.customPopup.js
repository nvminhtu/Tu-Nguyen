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
      loadPopup();
      closePopup();
    }

    /**
     * loadPopup
     * Custom to load Popup
     */
    function loadPopup() {

      $('body').append("<div class='overlay'></div>");
      $win = $(win);

      offsetTop = $(".popup_content").outerHeight() / 2;


      $(".book_list li a")
      .off()
      .on("tap click", function(event){
        event.preventDefault();
        $this = $(this);
        $this.next(".popup_content")
          .css({
            'marginTop': $win.scrollTop() - offsetTop + 'px'
          })
          .fadeIn();
          
          $('.overlay').fadeTo(500, 0.6);
      });
    }

    /**
     * closePopup
     * click to close popup
     */
    function closePopup() {
      $(".overlay, .closePopup")
      .off()
      .on("tap click", function(event){
        event.preventDefault();
        $(".overlay, .popup_content")
        .fadeOut();
      });
    }

    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);