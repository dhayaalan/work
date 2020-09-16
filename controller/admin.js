exports.getPost = (req, res, next) => {
  res.status(200).json([
    {
      post: {
        id: "asasdsd",
        name: "Dhayaalan",
      },
    },
  ]);
};

exports.createPost = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  res.status(201).json([
    {
      post: { id: id, name: name },
    },
  ]);
};
