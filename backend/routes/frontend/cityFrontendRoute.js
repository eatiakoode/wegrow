const express = require("express");
const {
  getCity,
  getallCity,
  getCityStateId,
  countPropertiesByCity,
  getCityWithLocation
} = require("../../controller/frontend/cityCtrl");
const router = express.Router();


router.get("/byid/:id", getCity);
router.get("/list", getallCity);
router.get("/bystate/:stateid", getCityStateId);
router.get("/listwithpropertcount", countPropertiesByCity);
router.get("/citywithlocation", getCityWithLocation);




module.exports = router;
