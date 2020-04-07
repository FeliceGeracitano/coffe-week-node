var express = require("express"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
routes = require("./api/routes/people");
routes(app);
app.listen(port);
console.log("API server started on: " + port);
