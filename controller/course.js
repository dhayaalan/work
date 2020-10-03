const Course = require("../models/course");

exports.course = async (req, res) => {
  const name = req.body.name;
  await Course.create({
    name: name,
  });
  res.status(200).json({
    name: name,
  });
};
