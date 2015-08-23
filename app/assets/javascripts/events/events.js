$(document).ready(function() {

  var pathname = window.location.href;
  // get the upcoming/previous events
  $.get(pathname + '.json', function (events) {
    var calendarEvents = {};
    var months = [];
    // add the required data to the array of events for the calendar
    events.forEach(function(e) {
      // parse the bits of the date that we want (yyy-mm-dd)
      var fullDate = e.date.split('T');
      var date = fullDate[0];
      // add event to the arry
      calendarEvents[date] = {
        "class": "day-with-event",
        "url" : '/events/event/' + e.slug
      };
    });
    var month = new Date();
    if (events.length > 0) {
      month = events[0];
      month = new Date(month.date);
    }
    // make it purty
    month = month.toISOString().substring(0, 7);
    // initialise calendar
    $(".responsive-calendar").responsiveCalendar({
      time: month,
      events: calendarEvents
    });
  });
});
