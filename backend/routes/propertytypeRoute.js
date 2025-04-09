const express = require("express");
const {
  createPropertytype,
  updatePropertytype,
  deletePropertytype,
  getPropertytype,
  getallPropertytype,
} = require("../controller/propertytypeCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createPropertytype);
router.put("/:id", authMiddleware, isAdmin, updatePropertytype);
router.delete("/:id", authMiddleware, isAdmin, deletePropertytype);
router.get("/:id", getPropertytype);
router.get("/", getallPropertytype);

module.exports = router;
