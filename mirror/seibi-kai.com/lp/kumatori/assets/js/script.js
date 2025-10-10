
jQuery(function ($) {

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // アコーディオン
  $(document).ready(function () {
    $('.js-faq_item').on('click', function () {
      const $button = $(this).find('.faq_question');
      const $answer = $(this).find('.faq_answer');
      const isExpanded = $button.attr('aria-expanded') === 'true';
      // aria-expanded の更新
      $button.attr('aria-expanded', isExpanded ? 'false' : 'true');
      // アニメーションで開閉
      $answer.stop(true, true).slideToggle(500);
    });
  });

  //追従ボタン
  $(function () {
    const $fixedBtn = $('.fixed-btn');
    const $topBtn = $('.top-btn');

    $(window).on('scroll resize', function () {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      const documentHeight = $(document).height();
      const bottomThreshold = 120;
      const topThreshold = 120;
      const scrollBottom = scrollTop + windowHeight;

      // 表示条件
      if (scrollTop > topThreshold && scrollBottom < documentHeight - bottomThreshold) {
        $fixedBtn.fadeIn();
      } else {
        $fixedBtn.fadeOut();
      }

      if (scrollTop > topThreshold) {
        $topBtn.fadeIn();
      } else {
        $topBtn.fadeOut();
      }

    });

    // 初期状態チェック
    $(window).trigger('scroll');
  });

});
