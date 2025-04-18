const express = require("express");
const {
  getCity,
  getallCity,
  getCityStateId,
} = require("../controller/frontend/cityCtrl");
const router = express.Router();


router.get("/byid/:id", getCity);
router.get("/", getallCity);
router.get("/bystate/:stateid", getCityStateId);

module.exports = router;
