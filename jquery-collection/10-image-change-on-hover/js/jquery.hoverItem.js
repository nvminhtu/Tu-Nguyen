/*
  jQuery hover Item
  + Creating menu which only run in SP <expand and close>
*/
;(function($){
  'use strict';
    $.Index = (function() {

      function init(){
        hoverItem();
      }

      function hoverItem(){
        var current = 0;

        $('.item_photo_area').each(function(){
          var $this = $(this);
          var $item_photo = $this.find('.item_photo');
          var $thumbs_item = $this.find('.thumbs_item');

          $item_photo.find("li:gt(0)").hide();
          $thumbs_item.find('li').on({
            "mouseenter": function(){
              current = $(this).index();
              $item_photo.find("li").stop().fadeOut();
              $item_photo.find("li").eq(current).fadeIn();
            }
          });
        });
      }

      return {
        init: init
      };
    })();


  $(function(){
    $.Index.init();
  });



}(jQuery));