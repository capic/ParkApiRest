var express = require('express');
var router = express.Router();
var wdwjs = require('wdwjs');

var eupopaparkObject = new wdwjs.EuropaPark(
    {debug: true,
        timeFormat: "YYYY-MM-DDTHH:mm:ssZ",
        dateFormat: "YYYY-MM-DD",
        timeFormatTimezone: "Europe/London",
        scheduleMaxDates: 7}
);

router.get('/waitingtimes', function(req, res, next) {
    eupopaparkObject.GetWaitTimes(function(err, data) {
        if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

        res.json(data);
    });
});

router.get('/openingtimes', function(req, res, next) {
    eupopaparkObject.GetOpeningTimes(function(err, data) {
        if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

        res.json(data);
    });
});

module.exports = router;
