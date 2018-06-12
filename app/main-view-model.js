var Observable = require("data/observable").Observable;
var calendarModule = require("nativescript-ui-calendar");

function populateCalendar() {
    var viewModel = new Observable();
    var events = [];

    var startDate = new Date('June 10, 2018 01:00:00');
    var endDate = new Date('June 13, 2018 04:00:00');
    var event = new calendarModule.CalendarEvent('Test Event', startDate, endDate);
    events.push(event);
    viewModel.set("calendarEvents", events);

    return viewModel;
}

exports.populateCalendar = populateCalendar;
