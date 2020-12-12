$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
$(function() {
  $('Top').on('click',function(event){
    $().animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

$(function() {
  $('Portfolio').on('click',function(event){
    $('Portfolio').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
$(function() {
  $('Feature').on('click',function(event){
    $('Feature').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
$(function() {
  $('Profile').on('click',function(event){
    $('Profile').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
$(function() {
  $('Contact').on('click',function(event){
    $('Contact').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
