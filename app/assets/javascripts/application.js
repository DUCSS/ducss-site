// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require particles.min
//= require header

$(function(){ $(document).foundation(); });
$(document).ready(function() {
  $("#new_message").on("ajax:success", function(e, data, status, xhr) {
    $("#contact-success").css("display", "block");
    $("#contact-failure").css("display", "none");
    setTimeout(function() {
      $("#contact-success").css("display", "none");
    }, 3000);
  }).on("ajax:error", function(e, xhr, status, error) {
    $("#contact-success").css("display", "none");
    $("#contact-failure").css("display", "block");
    setTimeout(function() {
      $("#contact-failure").css("display", "none");
    }, 3000);
  });
});
