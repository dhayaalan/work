const express = require("express");

const adminController = require("../controller/admin");

const routes = express.Router();

routes.get("/getdata", adminController.getPost);

routes.post("/createdata", adminController.createPost);

module.exports = routes;
