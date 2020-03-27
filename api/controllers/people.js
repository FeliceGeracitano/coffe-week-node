"use strict";

module.exports = {
  getAll: function(_, res) {
    console.log("[GET] getAll");
    var people = require("../models/people");
    res.json(people);
  }
};
