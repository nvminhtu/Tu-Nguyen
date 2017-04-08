(function($) {
    "use strict";
    var $win, timer, $item, $this, $popupOverlay, $popupClose, $btnSocial, $btnArea, $btnA, $btnSecond, $midHeight, $oneContents, $secondContents, $selectTitle, $externalPopup, $nosizePopup, oneHeight, secondHeight, rows = 3,
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
              $selectSlider.find('.current').prev()
                .addClass('pre-current')
                .css({
                  'margin-right': diffMargin + 'px',
                  'margin-left':'-50px'
                });
            },
            onSlideBefore: function() {
              resetMargin();
              slider.startAuto();
              var current = slider.getCurrentSlide(),
                  currentClass = listLen + 'n+' + (current + 1);
              
              $selectSlider.find('li:nth-child(' + currentClass + ')').addClass('current');
              $selectSlider.find('.current').prev()
                .addClass('pre-current')
                .css({
                  'margin-right': diffMargin + 'px',
                });
            }
        });
        
        //reset Margin before adding margin to each slide
        var resetMargin = function(){
          $selectSlider = $('.bxslider');
          $selectSlider.find("li").css('margin-right', marginSlide +"px");
          $selectSlider.find("li").css('margin-left','0px');
          $selectSlider.find("li").removeClass('current');
          $selectSlider.find("li").removeClass('pre-current');
        };
    }

    $(function() {
        init();
    });
})(jQuery);