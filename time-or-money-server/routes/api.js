var express = require('express'),
    util = require('../util'),
    router = express.Router();

// GET /
router.get('/', function(req, res, next) {
    var r = {
            status: {
                code: util.errors.NOERROR.code,
                desc: util.errors.NOERROR.desc,
                tomCode: util.errors.NOERROR.tomCode,
                tomText: util.errors.NOERROR.tomText
            }
        };
    r.heartbeat = Date.now();
    res.status(r.status.code).json(r);
});

module.exports = router;
