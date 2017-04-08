$( document ).ready(function() {
  var UA = navigator.userAgent;
  var $scroller = $( (/safari/i.test(UA))? "body" : "html" );
  $scroller.animate({scrollTop:0});
});

;(function($){
  'use strict';

  var $item,
      itemLen = 0,
      rows,
      $list,
      $text;

  $.Index = (function() {


    function init(){
      scrollNavi();
    }

    function scrollNavi(){
      var UA = navigator.userAgent;
      var $scroller = $( (/safari/i.test(UA))? "body" : "html" );
      
      // click scroll nav
      var space = 0;
      space = $(window).width() > 767 ? 74 : 0;

      $('.local_navi').find('a[href*=#]').each(function(){
        $(this).click(function(){
            var
              href = $(this).attr("href"),
              $target = $(href);

            if(!$target.offset()) return;
            var position = $target.offset().top - space;
            $scroller.animate({
              "scrollTop" : position
            },500);
            return false;
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

$(window).load(function() {
  var UA = navigator.userAgent;
  var $scroller = $( (/safari/i.test(UA))? "body" : "html" );
  var space = 0;
      space = $(window).width() > 767 ? 74 : 0;
  var hash = location.hash;
  if (hash.length) {
    var $id_hash = $(hash);
    $scroller.animate({
      scrollTop: $id_hash.offset().top - space
    }, 500);
  }
});