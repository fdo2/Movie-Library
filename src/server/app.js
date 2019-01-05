const path = require("path");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
require("env2")("config.env");

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "..", "views", "layouts"),
    partialsDir: path.join(__dirname, "..", "views", "partials"),
    defaultLayout: "main"
  })
);

app.get("/", (req, res) => {
  res.send("express server works");
});

app.get("/template", (req, res) => {
  res.render("home");
});

app.set("PORT", process.env.PORT || 8000);
app.listen(app.get("PORT"), () => {
  console.log("app start running");
});
