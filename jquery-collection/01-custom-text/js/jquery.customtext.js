(function ( $ ) {
  $.fn.customtext = function( options ) {
    
    //01- Defaul options
    var settings = $.extend({
            name: 'Your name',
            color: '#ffffff',
            background: '#ed8034'
        }, options );
 
    //02- Apply options to DOM element
    return this.append('Welcome ' + settings.name + ' to Admin dashboard!').css({ background: settings.background }).css({ color: settings.color });

  };
}( jQuery ));