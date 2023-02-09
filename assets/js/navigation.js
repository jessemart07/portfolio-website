$(document).ready(function () {
  var scroll = $('.scroll');

  // smooth scrolling
  scroll.click(function (e) {
    e.preventDefault();

    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000
    );
  });

  // active link function
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scroll.each(function () {
      var sectionOffSet = $(this.hash).offset().top - 100;
      if (this.id != 'cta-btn') {
        if (sectionOffSet <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      }
    });
  });
});

// animate menu button
$('.menu-button').click(function () {
  $('.nav-list').toggleClass('open-menu', 500);
  $(this).toggleClass('open');
});

//change opacity of navbar
// $(window).on('scroll', function () {
//   if ($(window).scrollTop()) {
//     $('.nav').addClass('sticky');
//   } else {
//     $('.nav').removeClass('sticky');
//   }
// });
