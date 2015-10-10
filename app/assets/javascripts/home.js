particlesJS.load('particles-js', 'assets/particles.json');

var hidden = false;

// sorcery to hide the nav on iOS/safari when you
// do the bouncy scroll thing at the top of the page
// :wand: :sparkles:
$(document).on('scroll', function(){
  if($(window).scrollTop() < 50 && !hidden) {
    $("#header").css('visibility', 'hidden');
    hidden = true;
  } else if ($(window).scrollTop() >= 50 && hidden) {
    $("#header").css('visibility', 'visible');
    hidden = false;
  }
} );
