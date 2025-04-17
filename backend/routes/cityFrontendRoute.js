const express = require("express");
const {
  getCity,
  getallCity,
  getCityStateId,
} = require("../controller/cityCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.get("/byid/:id", getCity);
router.get("/", getallCity);
router.get("/bystate/:stateid", getCityStateId);

module.exports = router;
