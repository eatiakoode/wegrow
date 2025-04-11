const express = require("express");
const {
  createBuilder,
  updateBuilder,
  deleteBuilder,
  getBuilder,
  getallBuilder,
} = require("../controller/builderCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBuilder);
router.put("/:id", authMiddleware, isAdmin, updateBuilder);
router.delete("/:id", authMiddleware, isAdmin, deleteBuilder);
router.get("/:id", getBuilder);
router.get("/", getallBuilder);

module.exports = router;
