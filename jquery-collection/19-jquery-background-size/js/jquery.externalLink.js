(function($) {
    "use strict";
    var $win;
        

    function init(){
      //externalLinks();
      externalOther();
    }

    function externalOther() {
      $('a[class="external"], a[href^="http"]').on("click", function() {
        var targetHerf = $(this).attr('href');
        if( targetHerf.search( location.hostname ) > 0 && targetHerf.search('.pdf') < 0 ) {
          $(this).attr("target", "_self");
        } else {
          $(this).attr("target", "_blank");
        }
      });
    }

    function externalLinks() {
      $('a[href^="http"]').attr('target','_blank');
      $('a[href^="//"]').attr('target','_blank');
      $('a[href^="'+ window.location.origin +'"]').attr('target','_blank');
    }

    $(function() {
        init();
    });
})(jQuery);