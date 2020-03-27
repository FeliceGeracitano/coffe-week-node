var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.json());
routes = require("./api/routes/people");
routes(app);
app.listen(port);
console.log("API server started on: " + port);
