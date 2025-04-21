const express = require("express");

const {
  getBlog,
  getallBlog,
} = require("../../controller/frontend/blogCtrl");
const router = express.Router();
router.get("/byid/:id", getBlog);
router.get("/list", getallBlog);

module.exports = router;
