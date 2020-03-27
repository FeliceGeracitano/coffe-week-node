"use strict";

module.exports = function(app) {
  var people = require("../controllers/people");
  app.route("/people").get(people.getAll);
};
