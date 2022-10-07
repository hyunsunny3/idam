$(function () {
  //   $('.depth1').click(function(e){
  //     e.preventDefault();
  //     $('.depth2').stop().slideToggle();
  // });

  $('.menu_m').on('click',function () {
      $('nav').animate({left:'0'},300);
  });
  $('.menu_m').on('click',function () {
      $('.nav_bg').show();
  });
  $('.nav_bg').on('click',function () {
      $('nav').animate({left:'-80%'},300);
      $('.nav_bg').hide();
  });
  // $('.nav_open').on('click',function () {
  //   $('nav').animate({left:'0'},300);
  // });
});
