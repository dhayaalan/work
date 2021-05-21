const express = require("express");

const collegeController = require("../controller/college");
const courseController = require("../controller/course");
const { name, price } = require("../validation/course");
const { collagename } = require("../validation/collage");
const { errorscheck } = require("../middleware/errorcheck");
const { findAll } = require("../models/user");
const Course = require("../models/course");
const Collage = require("../models/collage");

const routes = express.Router();

routes.get("/courselist", async (req, res, next) => {
  const search = await Course.findAll({
    include: [
      {
        model: Collage,
        required: false,
      },
    ],
  });

  res.render("search", { errors: "", message: "course are listed " });
});

routes.post("/courselist", async (req, res, next) => {
  console.log(req.body);
  const courses = await Course.create({
    name: req.body.name,
    price: req.body.price,
  });
  
});

module.exports = routes;
