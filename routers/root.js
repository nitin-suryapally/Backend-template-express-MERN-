const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|index(.html)?", (req, res) => {
  // res.send("hello world!") sending only plain text
  // res.sendFile("./views/index.html" , {root: __dirname}) one way to do it;

  res.sendFile(path.join(__dirname, "..", "views", "index.html")); // using path
});
router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html")); // using path
});
router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "./new-page.html"); // default code 302
});

module.exports = router;
