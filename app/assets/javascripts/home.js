$(document).ready(function() {
  $("#header").css('display', 'none');
  $("footer").css('display', 'none');
  $("#header").css('visibility', 'hidden');
  $("footer").css('visibility', 'hidden');
  $(".content-container").css('display', 'none');
  $("body").css('background', '0');

  $(".background").css({
    "height" : $(window).innerHeight()
  });

  $(".title").css({
    "background" : "rgba(255, 139, 15, 0.85)"
  });

  for (var i = 0; i < noOfSquares; i++) {
    // Inserts triangles into DOM
    $(".background").append("<div class='square'><div class='left-triangle " + i + "'></div><div class='right-triangle " + i + "'></div></div>");
  }

  for (var i = 0; i < ($(window).height() / 80); i++) {
    // Inserts line of triangles to the left of the above body
    $(".background-right-fix").append("<div class='square background-right-fix-square'><div class='left-triangle " + (i  + (i*2) + 1) + "'></div><div class='right-triangle " + (i  + (i*2) + 2)+ "'></div></div>");
  }

  fadeTriangle(Math.random() < 0.5 ? 0 : 1);
  fadeTriangle(Math.random() < 0.5 ? 0 : 1);

  $(".home-landing").click(function() {
    endFade = true;
    for (var i = 0; i < noOfSquares; i++) {
      // Fade each triangle and then remove it
      $(".left-triangle." + i).fadeTo(200, 0, function() {
        $(".left-triangle." + i).remove();
      });
      $(".right-triangle." + i).fadeTo(200, 0, function() {
        $(".right-triangle." + i).remove();
      });
    }

    setTimeout(function () {
      $("#header").css('display', 'inline');
      $("footer").css('display', 'block');
      $("#header").css('visibility', 'visible');
      $("footer").css('visibility', 'visible');
      $(".content-container").css('display', 'block');
      $("body").css('background', 'white');

      $(".title").fadeTo(600, 0, function() {
        $(".landing-page").fadeTo(1000, 0, function() {
          $(".landing-page").remove();
        });
      });
    }, 800);
  });
} );

var endFade = false;
var noOfSquares = (($(window).width() / 80) * ($(window).height() / 80)) + 14;
var total = 0;
var fadeLimit = noOfSquares * 2;

function fadeTriangle(triangleSwitch) {
  if (endFade === false) {
    var id = Math.floor(Math.random() * noOfSquares);
    var opacity = Math.random();

    if (triangleSwitch === 0) {
      var timeToFade = 4000 * Math.abs($(".left-triangle." + id).css("opacity") - opacity) + (total * 20);
      $(".left-triangle." + id).fadeTo(timeToFade, opacity, function() {
        total += 3;
        if(total < fadeLimit) {
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
        }
      });
    } else {
      var timeToFade = 4000 * Math.abs($(".right-triangle." + id).css("opacity") - opacity) + (total * 20);
      $(".right-triangle." + id).fadeTo(timeToFade, opacity, function() {
        total += 3;
        if (total < fadeLimit) {
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
          fadeTriangle(Math.random() < 0.5 ? 0 : 1);
        }
      });
    }
  }
}

