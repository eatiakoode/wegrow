const express = require("express");
const {
  getProperty,
  getallPropertyList,
  getallPropertyIdList
} = require("../../controller/frontend/propertyFrontendCtrl");
const router = express.Router();

router.get("/detail/:id", getProperty);
router.get("/list", getallPropertyList);
router.get("/propertyidlist", getallPropertyIdList);

module.exports = router;
