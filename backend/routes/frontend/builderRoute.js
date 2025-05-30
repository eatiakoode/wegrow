const express = require("express");

const {
  getBuilder,
  getallBuilder,
  getBuilderSlug
} = require("../../controller/frontend/builderCtrl");
const router = express.Router();
router.get("/byid/:id", getBuilder);
router.get("/list", getallBuilder);
router.get("/slug/:slug", getBuilderSlug);

module.exports = router;
