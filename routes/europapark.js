var express = require('express');
var router = express.Router();
var wdwjs = require('wdwjs');

/* GET users listing. */
router.get('/waitingtimes', function(req, res, next) {
    var eupopaparkObject = new wdwjs.EuropaPark(
        {debug: true,
        timeFormat: "YYYY-MM-DDTHH:mm:ssZ",
        dateFormat: "YYYY-MM-DD",
        timeFormatTimezone: "Europe/London",
        scheduleMaxDates: 7}
    );

    eupopaparkObject.GetWaitTimes(function(err, data) {
        if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

        console.log(JSON.stringify(data, null, 2));
    });
});

module.exports = router;
