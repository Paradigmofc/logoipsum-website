"use strict"
// BUTTON "UP"
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});
// BUTTON UP ^
//           |


// MORPHEXT
$("#js-rotating").Morphext({
  // The [in] animation type. Refer to Animate.css for a list of available animations.
  animation: "fadeIn",
  // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
  separator: ",",
  // The delay between the changing of each phrase in milliseconds.
  speed: 3000,
  complete: function () {
      // Called after the entrance animation is executed.
  }
});