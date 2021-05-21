const Collage = require("../models/collage");

exports.college = async (req, res) => {
  const name = req.body.name;
  await Collage.bulkCreate([{
    name: name,
  }]);
  res.status(200).json({
    name: name,
  });
};
