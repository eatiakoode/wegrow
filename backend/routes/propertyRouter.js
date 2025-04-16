const express = require("express");
const { uploadPhoto } = require("../middlewares/uploadImage");
const {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getallProperty,
} = require("../controller/propertyCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/", authMiddleware,  isAdmin, uploadPhoto.array("featuredimage", 10),createProperty);
router.put("/:id", authMiddleware, isAdmin,uploadPhoto.array("featuredimage", 10), updateProperty);
router.delete("/:id", authMiddleware, isAdmin, deleteProperty);
router.get("/:id", getProperty);
router.get("/", getallProperty);

module.exports = router;
