const express = require("express");
const {
  createAmenity,
  updateAmenity,
  deleteAmenity,
  getAmenity,
  getallAmenity,
} = require("../controller/amenityCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createAmenity);
router.put("/:id", authMiddleware, isAdmin, updateAmenity);
router.delete("/:id", authMiddleware, isAdmin, deleteAmenity);
router.get("/:id", getAmenity);
router.get("/", getallAmenity);

module.exports = router;
