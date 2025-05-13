const express = require("express");
const {
  getProperty,
  getallPropertyList,
  getallPropertyIdList,
  getallPropertyFilterList,
  getPropertySlug
} = require("../../controller/frontend/propertyFrontendCtrl");
const router = express.Router();

router.get("/detail/:id", getProperty);
router.get("/list", getallPropertyList);
router.get("/propertyidlist", getallPropertyIdList);
router.get("/filterlist", getallPropertyFilterList);
router.get("/slug/:slug", getPropertySlug);

module.exports = router;
