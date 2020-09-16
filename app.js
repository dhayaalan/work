const express = require("express");
const bodyParser = require("body-parser");
const db = require("mysql2");

const adminRouter = require("./router/admin");
const seq = require("./util/database");

const app = express();

app.use(bodyParser.json());

app.use("/admin/", adminRouter);

seq
  .sync({ force: false })
  .then((result) => app.listen(3000))
  .catch((err) => {
    console.log(err);
  });
