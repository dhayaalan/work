const College = require("../models/college");

exports.college = async (req, res) => {
  const name = req.body.name;
  await College.create({
    name: name,
  });
  res.status(200).json({
    name: name,
  });
};
