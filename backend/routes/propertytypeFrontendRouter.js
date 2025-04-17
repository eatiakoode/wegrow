const express = require("express");
const {
  getPropertytype,
  getallPropertytype,
  getPropertytypeCategoryId,
} = require("../controller/propertytypeCtrl.js");
const router = express.Router();

router.get("/byid/:id", getPropertytype);
router.get("/", getallPropertytype);
router.get("/bycategory/:categoryid", getPropertytypeCategoryId);

module.exports = router;
