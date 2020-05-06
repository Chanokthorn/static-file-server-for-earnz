const serveStatic = require("serve-static");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/index.html");
  })
  .get("/random_pics", function (req, res) {
    res.sendFile(__dirname + "/pages/randomPics.html");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
