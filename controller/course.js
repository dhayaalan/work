const Course = require("../models/course");

exports.course = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  await Course.bulkCreate([
    {
      name: name,
      price: price,
    }
  ]);
  res.status(200).json({
    name: name,
    price: price,
  });
};

