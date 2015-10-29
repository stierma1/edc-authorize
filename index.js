"use strict"

var Worker = require("basic-distributed-computation").Worker;

class EDCAuthorize extends Worker {
  constructor(parent){
    super("autorize", parent);
  }

  work(req){
    if(req.body.credentials === "test"){
      req.body.authorized = true;
      req.next();
    } else {
      req.status("Not Authorized").next();
    }
  }
}

module.exports = EDCAuthorize;
