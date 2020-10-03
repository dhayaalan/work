const Price = require("../models/price");

exports.price = async (req, res) => {
  const price = req.body.price;
  await Price.create({
    price: price,
  });
  res.status(200).json({
    price: price,
  });
};
