"use strict"

var Worker = require("basic-distributed-computation").Worker;

class Authorize extends Worker {
  constructor(parent){
    super("authorize", parent);
  }

  work(req){
    if(req.body.credentials && req.body.credentials.userId  === "test"){
      req.body.authorized = true;
      req.next();
    } else {
      req.status("Not Authorized").next();
    }
  }
}

module.exports = Authorize;
