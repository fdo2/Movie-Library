const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("../routes/index.js");
require("env2")("config.env");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "..", "public")));
app.use(routes);
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

app.set("PORT", process.env.PORT || 8000);
app.listen(app.get("PORT"), () => {
  console.log("app start running");
});
