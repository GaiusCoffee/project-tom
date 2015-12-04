var util = {};

util.errors = {};
util.errors.NOERROR = {};
util.errors.NOERROR.code = 200;
util.errors.NOERROR.desc = "OK";
util.errors.NOERROR.tomCode = 0;
util.errors.NOERROR.tomText = "No Error";
util.errors.TIMEOUT = {};
util.errors.TIMEOUT.code = 408;
util.errors.TIMEOUT.desc = "Request Timeout";
util.errors.TIMEOUT.tomCode = 1;
util.errors.TIMEOUT.tomText = "Timeout: API request exceeded 30 seconds.";

module.exports = util;
