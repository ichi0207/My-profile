$(function () {
  $(function () {
    let hH = $('header').height();
    let wh = $(window).height();
    let hsize = wh - hH;

    $('#top').css('height', hsize + 'px');
    // $('#my-about').css('height', hsize + 'px');
    // $('#favorite').css('height', hsize + 'px');
    // $('#form').css('height', hsize + 'px');

  });

  $(window).resize(function () {

    hsize = $(window).height();

    $('#top').css('height', hsize + 'px');
    // $('#my-about').css('height', hsize + 'px');
    // $('#favorite').css('height', hsize + 'px');
    // $('#form').css('height', hsize + 'px');

  });
  // スティッキーヘッダー
  $('header').each(function () {
    let $window = $(window),
      $stickyHeader = $(this).find('.sticky-header'),
      stickyHeaderHeight = $stickyHeader.outerHeight(),
      headerHeight = $(this).outerHeight();

    $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });

    $window.on('scroll', function () {
      if ($window.scrollTop() > headerHeight) {
        $stickyHeader.css({ top: 0 });
      } else {
        $stickyHeader.css({ top: '-' + stickyHeaderHeight + 'px' });
      }
    })

    $window.trigger('scroll');
  });

  // スムーズスクロール
  $('#top-btn').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, '1000');
  })

  $('header a').click(function () {
    let id = $(this).attr('href');
    let position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, '1000');
  });

  $(function () {
    $('header a[href^="#"]').click(function () {
      var adjust = -100;
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $("html, body").animate({ scrollTop: position }, speed, "swing");

    });
  });

  //  アニメーション
  // $('.my-contents, .contents').css("opacity","0");

  // let windowHeight = $(window).height();

  // $(window).scroll(function(){
  //   let scrollPosition = $(this).scrollTop();
  //   if (scrollPosition > $('.my-contents,.contents').offset().top - windowHeight) {
  //     $('.my-contents,.contents').css('animation','1s fadeIn forwards')
  //   }
  // });

  $(function(){

      $('.my-contents').css('opacity','0');

      $(window).scroll(function (){

        $('.my-contents').each(function(){

          var imgPos = $(this).offset().top;   

          var scroll = $(window).scrollTop();

          var windowHeight = $(window).height();
 
          if (scroll > imgPos - windowHeight + windowHeight/5){
            $('.my-contents').css('opacity','1')

          } 
        });
      });
      $('.contents').css('opacity','0');

      $(window).scroll(function (){

        $('.contents').each(function(){

          var imgPos = $(this).offset().top;   

          var scroll = $(window).scrollTop();

          var windowHeight = $(window).height();
 
          if (scroll > imgPos - windowHeight + windowHeight/5){
            $('.contents').css('opacity','1')

          } 
        });
      });
    });

});





