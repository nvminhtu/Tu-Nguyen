/*
  jQuery menu Expand
  + Creating menu which only run in SP <expand and close>
*/
;(function($, win){
  'use strict';

  var TopPage = $.toppage = (function() {
    var $win = null,
        $footerNavTab = null,
        $footerNavContent = null,
        UA,
        winWidth = 0,
        widthFlg = false,
        isIELegacy = false;

    function init(){
      $win = $(window);
      winWidth = $win.width();
      widthFlg = ($win.width()>767) ? false: true;

      $footerNavTab = $('.footer_menu dl dt');
      $footerNavContent = $('.footer_menu dl dd');

      navCloseHandler();
      footerNav();
      $win.on('resize orientationchange', function(){
        winWidth = $win.width();
        widthFlg = (winWidth > 767) ? false: true;
        navCloseHandler();
      });

    }
    /**
     * navCloseHandler
     * Reset Open/Close menu
     */
    function navCloseHandler() {
      if(!widthFlg) {
        $footerNavTab.removeClass('active');
        $footerNavContent.attr('style', '').removeAttr();
      }
    }

    /**
     * footerNav
     * Click to open/hide Footer Nav on SP
     */
    function footerNav() {
      $footerNavTab.off().on('tap click', function(){
        event.preventDefault();
        if(widthFlg) {
          var $tab = $(this);
          $tab.toggleClass('active');
          if($tab.hasClass('active')) {
            $tab.next('dd').stop().slideDown('300');
          } else {
            $tab.next('dd').stop().slideUp('300');
          }
        }
      });
    }

    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);