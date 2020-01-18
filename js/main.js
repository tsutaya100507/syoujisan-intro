
//サイドバーのスクロール箇所//
$(function() {
  $(window).on('load', function() {
    var windowWidth = $(window).width();
    var windowSm = 530; // スマホに切り替わる横幅
    if (windowWidth <= windowSm) {
     var headerHeight = 240; // スマホのヘッダー等の高さ分の数値を入れる
     } else {
     var headerHeight =68.8; // PC のヘッダー等の高さ分の数値を入れる
    }
    $('a[href^=#]').click(function(event) {
        event.preventDefault();
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $('body html').animate({scrollTop:position}, speed, 'swing');
    })
    // var url = $(location).attr('href');
    // setTimeout(function() {
    //   if(url.indexOf("?id=") != -1){
    //   var speed = 1000;
    //   var id = url.split("?id=");
    //   var $target = $('#' + id[id.length - 1]);
    //     if($target.length){
    //      var pos = $target.offset().top-headerHeight;
    //      $("html, body").animate({scrollTop:pos}, speed, "swing");
    //     }
    //   }
    // },2000);
  });
});



  $(window).on('load',function(){
// ここから文字を<span></span>で囲む記述
$('.title-wrapper p').children().andSelf().contents().each(function() {
if (this.nodeType == 3) {
$(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
}
});
// ここから一文字ずつフェードインさせる記述
$('.title-wrapper p').css({'opacity':1});
for (var i = 0; i <= $('.title-wrapper p').children().size(); i++) {
$('.title-wrapper p').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
};
});

/*05-01を引用*/

$(function () {

    /*
     * Slideshow
     */
    // slideshow クラスを持った要素ごとに処理を実行
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // slide変数に.slideshowのimg要素を格納
            slideCount = $slides.length,   // slideCountにslideの要素数を格納(現在は4が入っている)
            currentIndex = 0;              // 表示しているスライドが全体のうちの何番目を表すもの

        //slideに格納されているうちの一番目をスライドインする
        //fadeIn()とは.slideshowにdisplay:noneで非表示にされている要素を不透明度を変化させながら表示させるもの
        $slides.eq(currentIndex).fadeIn();

        // showNextSlide 関数とは時間の経過とともに自動的にスライドを切り替えていく処理
        //4秒おきにshowNextSlide関数を実行する
        setInterval(showNextSlide, 4000);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});
/*05-03を引用*/
$(function () {

    /*
     * Sticky header
     */
    $('.header-inner').each(function () {

        var $window = $(window), // ウィンドウを jQuery オブジェクト化(スクロールをjQueryで利用するにはWindowオブジェクトを
      // jQueryオブジェクト化する必要がある)
            $header = $(this),   // ヘッダーを jQuery オブジェクト化

            headerOffsetTop = $header.offset().top;//jQuery要素の位置を取得するメソッド

        // ウィンドウのスクロールイベントを監視
        // (ウィンドウがスクロールするごとに処理を実行する)
        $window.on('scroll', function () {
            // ウィンドウのスクロール量をチェックし、
            // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            // そうでなければ削除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整するため)
       $window.trigger('scroll'); //プログラム側からブラウザにスクロールの処理//

    });
});

/*05-08を引用
$(function () {

    $('#profile-wrapper').on('click', function () {

        // Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', // イージングの種類
            speed: 2000             // 所要時間
        });
    });

});
*/
/*04-04を引用*/
$(function(){
    //
    var duration = 500;
   /*変数 durationに300を格納*/
    // aside ----------------------------------------
    var $aside = $('.header-inner aside');

      var $asides = $('header button')
        .on('click', function(){
            $aside.toggleClass('open');/*asideにopenというクラスがあるか確認。*/
            if($aside.hasClass('open')){
                $aside.stop(true).animate({top: '50px'}, duration, 'linear');
            }else{
                $aside.stop(true).animate({top: '-350px'}, duration, 'linear');
            };
        });

});
/*05-07*/
$(function () {

    /*
     * Back-toTop button (Smooth scroll)
     */
    $('.img8').each(function () {

        //scrollTop()が利用できる要素を検出。 html か body のいずれがスクロール可能な要素かを検出
        var $el = $(scrollableElement('html', 'body'));

        // ボタンにクリックイベントを設定
        $(this).on('click', function (event) {
            event.preventDefault();
            $el.animate({ scrollTop: 0 }, 450);
        });
    });

//arguments.lengthで引数のelementsの要素数を取得
    function scrollableElement (elements) {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
            $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }

});
/*
each()  jQueryオブジェクトについて、選択された要素ごとに関数を実行する
element 指定された全ての要素

*/

/*p.202 05-08*/
$(function() {
$('.header-inner>aside>ul>li>a').smoothScroll({
  afterScroll:function(){
  location.hash = $(this).attr('href');
},  speed:500
});
});

/*ふわっと出るようにしたいところ*/
$(window).scroll(function (){
   $('.fadein').each(function(){
       var elemPos = $(this).offset().top,
           scroll = $(window).scrollTop(),
           windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight + 100){
             $(this).addClass('scrollin');
           }
       });
   });

      $(window).scroll(function (){
         $('.fadein3').each(function(){
             var elemPos = $(this).offset().top,
                 scroll = $(window).scrollTop(),
                 windowHeight = $(window).height();
               if (scroll > elemPos - windowHeight +100){
                   $(this).addClass('scrollin');
                 }
             });
         });
  $(function(){
    $('header p').typoShadow();
  });
