;(function($, win){
  'use strict';

  var onHoverImage = $.onHoverImage = (function() {

    function init(){
      rollover();
    }
    

    /**
     * rollover
     * change image on/off
    */
    function rollover() {
      $('[class!=current] > a').on({
        'mouseenter': function() {
          if ($(this).find("img[src*='_off.']").size() > 0) $(this).find("img:not(.current)").attr("src", $(this).find("img").attr("src").replace("_off.", "_on."));
          else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "0.5");
        },
        'mouseleave': function() {
          if ($(this).find("img[src*='_on.']").size() > 0) $(this).find("img").attr("src", $(this).find("img:not(.current)").attr("src").replace("_on.", "_off."));
          else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "1");
        }
      });
    }

    return {
      init: init
    };

  })();

  $(onHoverImage.init);

})(jQuery, window);