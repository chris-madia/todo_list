const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();


app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");


app.use(bodyParser.urlencoded({ extended: false }));


app.use("/public", express.static("./public"));

let todos = [];
let itemID = 0;
app.get("/", function(req, res) {
  res.render("index", { todos: todos });
});

app.post("/", function(req, res) {
  todos.push(req.body.listItem);
  res.redirect("/");
});



app.listen(3000);
