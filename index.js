const serveStatic = require("serve-static");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  //   .set("views", path.join(__dirname, "views"))
  //   .get("/", (req, res) => res.render("pages/index"))
  //   .use(serveStatic("public", { index: ["index.html", "index.htm"] }))
  .get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/index.html");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
