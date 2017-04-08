/*
	jQuery ScrollToTop Plugin
*/

(function($){
  $.scrollToTop = function(selector, settings){
		// settings
		var config = {
			'speed': 500
		};
		if ( settings ){$.extend(config, settings);}

		// variables
		var obj = $(selector),
        i = 0;
    
    obj.on("click", function(event){
      event.preventDefault();
      var h = $(this).attr("href");
      var t = $(h === "#" || h === "" ? 'body' : h);
      var p = t.offset().top;
      $('html,body').animate({
          scrollTop: p
      }, config.speed);
      return false;
    });

		return this;
	};
})(jQuery);
