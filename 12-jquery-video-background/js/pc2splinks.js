;(function($, win){
  "use strict";
  var
    $win,
    minWidth = 641,
  
  pcLink = [
    "/register-form/",
    "register-user/",
    "/register-poster",
    "/register-guide"],

  spLink = [
    "/register-form/sp/",
    "register-user/sp/",
    "/register-poster/sp/",
    "/register-guide/sp/"],

  linkLen = pcLink.length,
  $window,
  $link,

  init = function(){
    $win = $(win);
    $link = $(".pc_sp_link");
    $window = $(window).on({
      "load resize": function(event){
        if( $window.width() > 767 ){
          sp2pc();
        } else {
          pc2sp();
        }
      }
    });
  },

  pc2sp = function(){
    $link.each(function(){
      var $this = $(this),
          thisHref = $this.attr("href"),
          i = 0;

      for(; i < linkLen; i ++){
        if( thisHref === pcLink[i] ){
          $this.attr("href", spLink[i]);
        }
      }

    });
  },

  sp2pc = function(){
    $link.each(function(){
      var $this = $(this),
          thisHref = $this.attr("href"),
          i = 0;

      for(; i < linkLen; i ++){
        if( thisHref === spLink[i] ){
          $this.attr("href", pcLink[i]);
        }
      }
    });
  };
  
  //document.ready
  $(function(){
    init();
  });
})(jQuery, window);