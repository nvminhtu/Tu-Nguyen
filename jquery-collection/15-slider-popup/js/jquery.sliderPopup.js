(function($) {
  var Index = $.index = (function() {

    var
      UA = window.navigator.userAgent.toLowerCase(),
      app = window.navigator.appVersion.toLowerCase(),
      legacyIEFlg= false,
      fileExt,

      $body,
      $window,
      $personList,
      $modal,
      $modalContainer,
      $modalTitle,
      $modalJob,
      $modalPersonImage,
      $modalItemImage,
      $modalProfileText,
      $btnModalClose,
      $btnModalPrev,
      $btnModalNext,
      $btnfllow,
      $btnHash,
      $btnEntry,
      $btnList,

      breakPoint = 640,
      sp = false,
      modalDom = '',
      modalPersonPath = 'img/img-',
      modalItemPath = 'img/img-',
      TwittetURL = 'https://twitter.com/intent/tweet?',
      brosHasnTag = ',BROS25',

      personArray = [],
      personLen,
      mainPersonLen,
      prevPerson = null,
      nextPerson = null,
      modalLockFlg = true;



    // コンストラクタ
    function init() {

      if (UA.indexOf('iphone') > 0 || UA.indexOf('ipod') > 0 || (UA.indexOf('android') > 0) && (UA.indexOf('mobile') > 0) || UA.indexOf('windows phone') > 0) {
        sp = true;
      }

      if(UA.indexOf("msie") != -1){
        if(app.indexOf("msie 7.") != -1) legacyIEFlg = true;
        else if(app.indexOf("msie 8.") != -1) legacyIEFlg = true;
        else legacyIEFlg = false;
      }
      fileExt = (legacyIEFlg) ? '.gif' : '.png';

      $body = $('body');
      $window = $(window);

      $personList = $('#person_message > ul').find('li');

      personLen = $personList.length;
      mainPersonLen = $('#person_message > ul.main_person').find('li').length;

      modalDom += '<div id="modal">';
      modalDom +=   '<div class="container">';
      modalDom +=     '<div class="article">';
      modalDom +=       '<h3></h3>';
      modalDom +=       '<div class="details">';
      modalDom +=         '<div class="person">';
      modalDom +=           '<div class="photo"><img>';
      modalDom +=             '<div class="prev">PREV</div>';
      modalDom +=             '<div class="next">NEXT</div>';
      modalDom +=           '</div>';
      modalDom +=           '<p class="caption"></p>';
      modalDom +=         '</div>';
      modalDom +=         '<div class="item"><img></div>';
      modalDom +=       '</div>';
      modalDom +=     '</div>';
      modalDom +=     '<div class="close"><img src="img/btn-close.png" width="30" height="30" alt="CLOSE"></div>';
      modalDom +=     '<div class="prev"><img src="img/btn-prev'+ fileExt +'" width="40" height="70" alt="PREV"></div>';
      modalDom +=     '<div class="next"><img src="img/btn-next'+ fileExt +'" width="40" height="70" alt="NEXT"></div>';
      modalDom +=   '</div>';
      modalDom += '</div>';

      $body.append(modalDom);
      $modal = $('#modal');
      $modalContainer = $modal.find('.container');
      $modalTitle = $modal.find('h3');
      $modalPersonImage = $modal.find('.photo img');
      $modalItemImage = $modal.find('.item img');
      $modalProfileText = $modal.find('.caption');
      $btnModalClose = $modal.find('.close');
      $btnModalPrev = $modal.find('.prev');
      $btnModalNext = $modal.find('.next');
      $btnfllow = $modal.find('.fllow_link');
      $btnHash = $modal.find('.hash_link');
      $btnEntry = $modal.find('.btn a');
      $btnList = $modal.find('.txt a');

      // ボタンエリア拡大
      $(".fllow ol li p").click(function(){
        window.location=$(this).find("a").attr("href");
        return false;
      });

      //有名人リストから情報を配列化
      $personList.each(function(){
        var $this = $(this);
        var personDetail = {
          'index': ($this.parent('ul').hasClass('main_person')) ? $this.index() : ($this.index()+mainPersonLen),
          'code': $this.attr('data-person'),
          'job': $this.find('.name span').text(),
          'title': $this.find('.name').html().replace(/(<span>|<span *class).*<\/span>/,''),
          'name': $this.find('.photo img').attr('alt'),
          'prof': $this.find('.txt p').html()
        };
        $this.attr('data-index', personDetail.index);
        personArray.push(personDetail);
      });

      $window.on({
        'resize orientationchange': function(){
          if(!windowWidth() && $modal.is(':visible')){
            $modalContainer.css('margin-top', $window.scrollTop() + 10);
          } else if(windowWidth() && !sp && $modal.is(':visible')) {
            if( $window.width() < 767 ){
              $modalContainer.css('margin-top', $window.scrollTop() + 10);
            } else {
              $modalContainer.css('margin-top', '-' + Math.floor($modalContainer.outerHeight() / 2) + 'px');
            }
          }
        }
      });

      $personList.on({
        'mouseover': function(){
          var
            $this = $(this);
          if( !sp ){
            hoverOpacity($this.find('.photo'));
          }
        },
        'mouseleave': function(){
          var
            $this = $(this);
          if( !sp ){
            $this.find('.photo').css('opacity', 1);
          }
        },
        'click':function(){
          var
            $this = $(this),
            currentIndex = $this.attr('data-index');
            modalWinHandler(currentIndex);
        }
      });

      //前へ戻る
      $btnModalPrev.on({
        'mouseover': function(){
          modalLockFlg = true;
          var
            $this = $(this);
          if( !sp ){
            hoverOpacity($this);
          }
        },
        'mouseleave': function(){
          modalLockFlg = false;
          var
            $this = $(this);
          if( !sp ){
            $this.css('opacity', 1);
          }
        },
        'click': function(){
          if(prevPerson != null){
            modalWinHandler(prevPerson);
          }
        }
      });

      //次へ進む
      $btnModalNext.on({
        'mouseover': function(){
          modalLockFlg = true;
          var
            $this = $(this);
          if( !sp ){
            hoverOpacity($this);
          }
        },
        'mouseleave': function(){
          modalLockFlg = false;
          var
            $this = $(this);
          if( !sp ){
            $this.css('opacity', 1);
          }
        },
        'click': function(){
          if(nextPerson != null){
            modalWinHandler(nextPerson);
          }
        }
      });

      //閉じるボタン
      $btnModalClose.on({
        'mouseover': function(){
          var
            $this = $(this);
          if( !sp ){
            hoverOpacity($this);
          }
        },
        'mouseleave': function(){
          var
            $this = $(this);
          if( !sp ){
            $this.css('opacity', 1);
          }
        },
        'click': function(){
          if($modalContainer.is(':animated')) return false;
          modalCloseHandler();
        }
      });

      //モーダル内部
      $modalContainer.on({
        'mouseenter': function(){
          modalLockFlg = true;
        },
        'mouseleave': function(){
          modalLockFlg = false;
        }
       });

      //モーダル外側
      $modal.on({
        'click': function(){
          if(!modalLockFlg){
            modalCloseHandler();
            modalLockFlg = true;
          } else {
            return false;
          }
        }
      });

      //Twitter フォロー
      $btnfllow.on('click', function(){
        window.open(this.href, '', 'width=500, height=500');
        return false;
      });

      //Twitter ツイート
      $btnHash.on('click', function(){
        window.open(this.href, '', 'width=500, height=400');
        return false;
      });

      //応募するボタン
      $btnEntry.on('click', function(){
        window.open(this.href);
        return false;
      });

      //BROS店舗リスト
      $btnList.on('click', function(){
        window.open(this.href);
        return false;
      });

    }

    //モーダルウィンドウをセット
    function modalWinHandler(targetIndex){

      if($modalContainer.is(':animated')) return false;

      var
        prevIndex = (targetIndex == 0) ? (personLen-1) : parseFloat(targetIndex, 10) - 1,
        nextIndex = (targetIndex == (personLen-1)) ? 0 : parseFloat(targetIndex, 10) + 1,
        loadImageCount = 0;

      //IE7,8 画像キャッシュ対応 パラメーター付きで再読み込み
      var rand = (legacyIEFlg) ? '?' + Math.floor(Math.random()*11) : '';

      modalLockFlg = true;
      prevPerson = prevIndex;
      nextPerson = nextIndex;

      $modalTitle.text(personArray[targetIndex].title);
      $modalTitle.prepend('<span>'+personArray[targetIndex].job+'</span>');
      $modalPersonImage.attr({
        'src': modalPersonPath + personArray[targetIndex].code + '.jpg' + rand,
        'alt': personArray[targetIndex].name
      });
      $modalItemImage.attr({
        'src': modalItemPath + personArray[targetIndex].code + '.jpg' + rand,
        'alt': personArray[targetIndex].name
      });
      $modalProfileText.html(personArray[targetIndex].prof);

      var twitterParam = encodeURI('text=イイオトコのパンツがほしい。&hashtags=' + personArray[targetIndex].name.replace(/\s+/g, "").replace(/\./g, "") + brosHasnTag+'&url=http://www.wacoal.jp/bros/special/');
      $btnHash.attr('href', TwittetURL + twitterParam);

      $modal.css({
        'display': 'block'
      });
      $modalContainer.css('visibility', 'hidden')
      .find('.details img').each(function(){
        $(this).on('load', function(){
          loadImageCount++;
          if(loadImageCount == 2){
            if(windowWidth() && !sp){
              if( $window.width() < 767 ){
                var marginTopNum = $window.scrollTop() + 10;
              } else {
                var marginTopNum = '-' + Math.floor($modalContainer.outerHeight() / 2) + 'px';
              }
            } else {
              var marginTopNum = $window.scrollTop() + 10;
            }
            $modalContainer
              .css({'margin-top': marginTopNum, 'visibility': 'visible'})
              .hide()
              .fadeIn(400);
          }
        });
      });
    }

    //モーダルウィンドウを初期化
    function modalCloseHandler(){
      $modalTitle.text('');
      $modalPersonImage.removeAttr('src alt');
      $modalItemImage.removeAttr('src alt');
      $modalProfileText.html('');
      $btnHash.attr('href','');
      $modalContainer.removeAttr('style');
      $modal.removeAttr('style');
    }

    //ホバー時の透過効果
    function hoverOpacity($target){
      var opacity = (windowWidth()) ? 0.5 : 1;
      $target.css('opacity', opacity);
    }

    //ウィンドウ幅の監視
    function windowWidth(){
      if($window.width() <= breakPoint ){
        return false;
      } else if($window.width() > breakPoint) {
        return true;
      }
    }

    // アクセス制御
    return {
      init : init
    };
  })();
  /* document.ready
  ----------------------------------------*/
  $(Index.init);
})(jQuery);