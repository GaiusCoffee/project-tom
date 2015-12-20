var util = {};

util.errors = [];
util.errors["NOERROR"] = {};
util.errors["NOERROR"].code = 200;
util.errors["NOERROR"].desc = "OK";
util.errors["NOERROR"].tomCode = 0;
util.errors["NOERROR"].tomText = "No Error";
util.errors["TIMEOUT"] = {};
util.errors["TIMEOUT"].code = 408;
util.errors["TIMEOUT"].desc = "Request Timeout";
util.errors["TIMEOUT"].tomCode = 1;
util.errors["TIMEOUT"].tomText = "Timeout: API request exceeded 30 seconds.";
util.errors["INTERNAL"] = {};
util.errors["INTERNAL"].code = 500;
util.errors["INTERNAL"].desc = "Internal Server Error";
util.errors["INTERNAL"].tomCode = 2;
util.errors["INTERNAL"].tomText = "Internal Server Error";
util.errors["QNOTFOUND"] = {};
util.errors["QNOTFOUND"].code = 404;
util.errors["QNOTFOUND"].desc = "Not Found";
util.errors["QNOTFOUND"].tomCode = 3;
util.errors["QNOTFOUND"].tomText = "Not Found: Query not found.";
util.errors["PNOTFOUND"] = {};
util.errors["PNOTFOUND"].code = 404;
util.errors["PNOTFOUND"].desc = "Not Found";
util.errors["PNOTFOUND"].tomCode = 4;
util.errors["PNOTFOUND"].tomText = "Not Found: Parameter not found.";

util.getError = function(error, message){
  var status = {};
  status.code = util.errors[error].code;
  status.desc = util.errors[error].desc;
  status.tomCode = util.errors[error].tomCode;
  if (!message) status.tomText = util.errors[error].tomText;
  else status.tomText = util.errors[error].tomText + ": " + message;
  return status;
};

util.validate = function(reqQuery, validParamsArray){
  var valid = true;
  for (var param in reqQuery){
    if (reqQuery.hasOwnProperty(param)) {
      if (param == "q")
        continue;
      var foundIt = false;
      validParamsArray.forEach(function(validParam){
        if (param == validParam) {
          foundIt = true;
        }
      });
      if (!foundIt)
        valid = false;
    }
  }
  return valid;
}

module.exports = util;
