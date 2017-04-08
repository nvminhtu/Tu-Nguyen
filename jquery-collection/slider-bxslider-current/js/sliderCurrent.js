(function($) {
    "use strict";
    var $win,
        itemLen = 0;
        

    function init(){
      slider();
    }

    function slider() {
        var 
          $selectSlider = $('.bxslider'),
          listLen = $('.bxslider').find('li').length,
          diffMargin = 100,
          marginSlide = 50;
        
        var slider = $('.bxslider').bxSlider({
            maxSlides: listLen,
            speed: 600,
            slideMargin: marginSlide,
            auto: true,
            onSliderLoad: function() {
              var currentClass = listLen + 'n+1';
              $selectSlider.find('li:nth-child(' + currentClass + ')').addClass('current');
            },
            onSlideBefore: function() {
              $selectSlider.find("li").removeClass('current');
              slider.startAuto();
              var current = slider.getCurrentSlide(),
                  currentClass = listLen + 'n+' + (current + 1);
              
              $selectSlider.find('li:nth-child(' + currentClass + ')').addClass('current');
              
            }
        });
      
    }

    $(function() {
        init();
    });
})(jQuery);