var util = require('../util'),
    u = {};

// Terminal
u.parse = function parseF(req, res, next){
  var r = { status: util.getError("NOERROR") };
  // Parse
  switch(req.query.q){
    case "check":
      if (util.validate(req.query, ["id","displayName","email","photoUrl"]))
        u.check(r, req.query.id, req.query.displayName, req.query.email, req.query.photoUrl);
      else      
        r.status = util.getError("PNOTFOUND");
      break;
    default:
      r.status = util.getError("QNOTFOUND");
  }
  // Return
  res.status(r.status.code).json(r);
};

u.check = function checkF(r, id, displayName, email, photoUrl){
  console.log(id + ":" + displayName + ":" + email + ":" + photoUrl);
  r.test = "Hello, World!";
};

module.exports = u;
