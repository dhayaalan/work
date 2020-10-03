const express = require("express");
const bodyParser = require("body-parser");
const db = require("mysql2");
const expressValid = require("express-validator");

const adminRouter = require("./router/admin");
const loginRouter = require("./router/login");
const seq = require("./util/database");
const course = require("./validation/course");
const { collage } = require("./controller/college");
const college = require("./validation/college");
const price = require("./validation/price");

const app = express();

app.use(bodyParser.json());

app.use("/admin/", adminRouter);
app.use("/admin", loginRouter);

course.belongsto(college);
college.hasMany(course);

course.belongsto(price);
price.hasOne(course);

seq
  .sync({ force: false })
  .then((result) => app.listen(3000))
  .catch((err) => {
    console.log(err);
  });
