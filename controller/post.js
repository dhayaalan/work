exports.getpost = (req, res) => {
  res.status(200).json({
    id: "sdserfsdf",
    name: "Dhayaalan",
    image: "asdfsfdssdfg",
  });
};

exports.createpost = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const image = req.body.image;
  res.status(200).json([
    {
      post: { id: id, name: name, image: image },
    },
  ]);
};
