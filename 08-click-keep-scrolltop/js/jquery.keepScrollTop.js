;(function($, win){
  'use strict';

  var Tabfixed = $.tabfixed = (function() {

    function init(){
      fixedTab();
    }
    


    function keepScrollTop() {
      /*var sesRead = sessionStorage.getItem('prevScroll')

      if(sesRead) {
        var $body = $('body');
        var $content = $('#product_step');

        var prevScrollTop = sessionStorage.getItem('prevScroll');
        var prevContentHeight = sessionStorage.getItem('prevHeight');

        var contentTop = $content.offset().top;
        var contentHeight = $content.outerHeight();

        var to = contentTop + ((prevScrollTop - contentTop) / prevContentHeight) * contentHeight;
        $body.scrollTop(to);

        $('.change').click(function(e) {
          //localStorage["posSecond"] = $(window).scrollTop();
          var scrollPosition = $(window).scrollTop();
          sessionStorage.setItem('prevScroll', scrollPosition);
          sessionStorage.setItem('prevHeight', $('#product_step').height());
        });
      }
      */
    }
   
    /**
     * fixed tab
     * keep position when clicking tab product
    */
    function fixedTab() {
      var sneaky = new ScrollSneak(location.hostname), tabs = document.getElementById('tabs').getElementsByTagName('li'), i = 0, len = tabs.length;
      for (; i < len; i++) {
          tabs[i].onclick = sneaky.sneak;
      }
    }

    return {
      init: init
    };

  })();

  $(Tabfixed.init);

})(jQuery, window);