function toggleMenu() {
  var menu = $("#header-menu");
  var display = menu.css("display");
  if (display === "none") {
    menu.css({"display" : "block"});
  } else {
    menu.css({"display" : "none"});
  }
}
