//basic code to setup a server

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions")
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.port || 3500;

// cross origin requests setup with white list sites only


app.use(cors(corsOptions));

// custom middleware

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// to get the form data

app.use(express.urlencoded({ extended: true }));

// for json file

app.use(express.json());

// for loading static file like cs , images and js

app.use(express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routers/root"));

app.use("/subdir", require("./routers/subdir"));
app.use("/employee" , require("./routers/api/employee"))

// app.get("^/$|index(.html)?", (req, res) => {
//   // res.send("hello world!") sending only plain text
//   // res.sendFile("./views/index.html" , {root: __dirname}) one way to do it;

//   res.sendFile(path.join(__dirname, "views", "index.html")); // using path
// });
// app.get("/new-page(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "new-page.html")); // using path
// });
// app.get("/old-page(.html)?", (req, res) => {
//   res.redirect(301, "./new-page.html"); // default code 302
// });

// handle routing

app.get(
  // all is used for routes and use is used for setting middleware when a url is accessed
  "/hello(.html)?",
  (res, req, next) => {
    console.log("hello handle");
    next();
  },
  (req, res) => {
    res.sendFile(path.join(__dirname, "views", "hello.html"));
  }
);

// chain routing

const first = (req, res, next) => {
  console.log("first");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res) => {
  console.log("three");
  res.send("finished");
};

app.get("/chain", [first, two, three]);

app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

// for handelig erros

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});
