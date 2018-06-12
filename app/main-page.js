
var populateCalendar = require("./main-view-model").populateCalendar;

function onNavigatingTo(args) {

    var page = args.object;

    page.bindingContext = populateCalendar();
}

exports.onNavigatingTo = onNavigatingTo;
