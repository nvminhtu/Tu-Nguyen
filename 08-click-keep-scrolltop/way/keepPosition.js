(function($,window,document){
'use strict';
/*---------------------------------------
  approval
----------------------------------------*/
var Index = $.index = (function(){

  var
      maxHeight,
      offsetTop = 0;

  /* init
  ----------------------------------------*/
  function init(){

    $(window).on("load resize", function(){
      if ($(window).width() < 768) {

        var $schedule = $(".tab_nav .schedule");
        var $applicant = $(".tab_nav .applicant");
        var height = $applicant.find('span').height();

        maxHeight = $schedule.height();
        $applicant.find('span').css({

          "paddingTop": ( maxHeight - height ) / 2 + "px",
          "paddingBottom": ( maxHeight - height ) / 2 + "px"

        });
      } else {
        $(".tab_nav .applicant span").removeAttr('style');
      }
    });
  }

  function setCookie() {
    if( $.cookie("offsetTop") !== null ) {
      $(document).scrollTop( $.cookie("offsetTop") );
    }
    $.removeCookie("offsetTop",  { path: '/saiyou_shinsotsu2017/applicant/' });

    $(window).scroll(function(){
      offsetTop = $(document).scrollTop();
      
    });
  
    $(".tab_nav.only_top li a").on({

      "tap click": function(){

        $.cookie("offsetTop",  offsetTop ,  { path: '/saiyou_shinsotsu2017/applicant/' });
      }
    });  
  }

  return {
    init : init,
    path : setCookie
  }
})();
$(Index.init);
$(Index.path);
})(jQuery,this,this.document);