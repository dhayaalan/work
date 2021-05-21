const express = require("express");
const bodyParser = require("body-parser");
const db = require("mysql2");
const expressValid = require("express-validator");
const path = require("path");
const loginRouter = require("./router/register");
const courseRouter = require("./router/courselist");
const seq = require("./util/database");
const Course = require("./models/course");
const Collage = require("./models/collage");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", loginRouter);
app.use("/admin", courseRouter);

Course.belongsTo(Collage);
Collage.hasMany(Course);

seq
  .sync({ force: false, alter: true })
  .then((result) => app.listen(3000, () => console.log("App Listening")))
  .catch((err) => {
    console.log(err);
  });
