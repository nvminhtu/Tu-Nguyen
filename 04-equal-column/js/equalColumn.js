;(function($) {
  "use strict";

  var
    $item,
    itemLen = 0,
    rows = 4;
  

  var setHeightBox = function(){
    
    $('.fruits').each(function(index, el) {
      $item = $(this).find('li');
      itemLen = $item.length;

      for( var i = -1, len = Math.ceil( itemLen / rows); ++ i < len; ){
        var itemArray = [];
        for(var j = -1; ++ j < rows;){
          itemArray.push( i * rows + j );
        }
        setItemColumn(itemArray);
      }
    });
  };

  var setItemColumn = function(itemNum){
    var txtMaxHeight = 0;
    for( var i = 0; i < itemNum.length; i++){
      txtMaxHeight = $item.eq(itemNum[i]).height() > txtMaxHeight ? $item.eq(itemNum[i]).height() : txtMaxHeight;
    }
    for(i = 0; i < itemNum.length; i++){
      $item.eq(itemNum[i]).height(txtMaxHeight);
    }
  };

  $(function(){
    $(window).on("load resize", function(){
      setHeightBox();
    });
  });

})(jQuery);