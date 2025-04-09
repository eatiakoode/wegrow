const express = require("express");
const {
  createCity,
  updateCity,
  deleteCity,
  getCity,
  getallCity,
} = require("../controller/cityCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCity);
router.put("/:id", authMiddleware, isAdmin, updateCity);
router.delete("/:id", authMiddleware, isAdmin, deleteCity);
router.get("/:id", getCity);
router.get("/", getallCity);

module.exports = router;
