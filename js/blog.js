;(function($, win){
  'use strict';

  var Blogpage = $.blogpage = (function() {
    var
      $win = null;

    function init(){
      $win = $(win);
      externalLink();
    }


    /**
     * externalLink
     * make slide 
     */
    function externalLink() {
      $('a[href^="http"]').attr('target','_blank');
      $('a[href^="//"]').attr('target','_blank');
      $('a[href^="'+ window.location.origin +'"]').attr('target','_blank');
    }

    return {
      init: init
    };

  })();

  $(Blogpage.init);

})(jQuery, window);