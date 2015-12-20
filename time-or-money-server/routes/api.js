var express = require('express'),
    util = require('../util'),
    router = express.Router();

// GET /
router.get('/', function(req, res, next) {
    var r = { status: util.getError("NOERROR") };
    r.heartbeat = Date.now();
    res.status(r.status.code).json(r);
});

// GET /u/
var u = require('./users');
router.get('/u', u.parse);

module.exports = router;
