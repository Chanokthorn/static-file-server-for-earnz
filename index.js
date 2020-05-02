var express = require("express");
var serveStatic = require("serve-static");

var app = express();

console.log("serving static file at port 3000");
app.use(serveStatic("public", { index: ["index.html", "index.htm"] }));
app.use(express.static("public"));
app.listen(3000);
