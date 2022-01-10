$(document).ready(function() {
  $('.navigator_burger').click(function(event) {
    $('.navigator_burger, .navigator, .navigator__list-mobile').toggleClass('active_nav');
    $('body').toggleClass('lock');
  });
});