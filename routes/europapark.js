var express = require('express');
var router = express.Router();
var wdwjs = require('wdwjs');

/* GET users listing. */
router.get('/waitingtimes', function(req, res, next) {
    var eupopaparkObject = new wdwjs.EuropaPark();

    eupopaparkObject.GetWaitTimes(function(err, data) {
        if (err) return console.error("Error fetching Magic Kingdom wait times: " + err);

        console.log(JSON.stringify(data, null, 2));
    });
});

module.exports = router;
