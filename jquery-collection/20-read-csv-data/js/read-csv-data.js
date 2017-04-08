(function($,window,document){
'use strict';
/*---------------------------------------
  Index
----------------------------------------*/
var Index = $.index = (function(){

  var len = 0,
      num = 0,
      $slider,
      $sliderSP,
      $areaPC,
      $areaSP,
      num_rd,
      temp = [];


  /* init
  ----------------------------------------*/
  function init(){
    //init functions or variables
  }

  /* newsCSV
  ----------------------------------------*/
  function newsCSV(){
    $.ajax("csv/info.csv",
      {
        success : function (data, stats, xhr) {
          $('#input').text(data);
        }
      })
      .pipe( CSV.parse )
      .done( function(rows) {
          var html = "";
          rows.shift();
          var len = rows.length;

          var temp = len < 4 ? rows : rows.slice((len-3), len);

          var row;
          temp.reverse();
          temp.forEach(function getvalues(indexRow) {
            if (indexRow.length) {
              // var columns = indexRow.split(",");
              html += "<dl><dt>" + indexRow[0] +"</dt>";
              html += "<dd>" + indexRow[1] + "</dd>";
              html += "</dl>";
            }
          });

          $(".news_txt").append(html);
      });
  }

  return {
    init       : init,
    newsCSV    : newsCSV
  };
})();
$(Index.init);
$(Index.newsCSV);
})(jQuery,this,this.document);