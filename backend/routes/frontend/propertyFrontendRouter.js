const express = require("express");
const {
  getProperty,
  getallPropertyList
} = require("../../controller/frontend/propertyFrontendCtrl");
const router = express.Router();

router.get("/detail/:id", getProperty);
router.get("/list", getallPropertyList);

module.exports = router;
