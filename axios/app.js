var epxress = require("express");
var bodyparser = require("body-parser");
var app = epxress();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(epxress.static("./public"));

app.get("/api/get", function(req, res) {
  console.log(req.query);
  res.json({
    firstname: "thomas",
    lastname: "houng"
  });
});

app.listen(4000);
