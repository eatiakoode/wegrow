const express = require("express");
const {
  createLocation,
  updateLocation,
  deleteLocation,
  getLocation,
  getallLocation,
} = require("../controller/locationCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createLocation);
router.put("/:id", authMiddleware, isAdmin, updateLocation);
router.delete("/:id", authMiddleware, isAdmin, deleteLocation);
router.get("/:id", getLocation);
router.get("/", getallLocation);

module.exports = router;
