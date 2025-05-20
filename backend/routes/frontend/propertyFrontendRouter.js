const express = require("express");
const {
  getProperty,
  getallPropertyList,
  getallPropertyIdList,
  getallPropertyFilterList,
  getPropertySlug,
  createProperty,
  propertyListByPage
} = require("../../controller/frontend/propertyFrontendCtrl");
const { uploadPhoto ,photoUploadMiddleware} = require("../../middlewares/uploadImage");
const router = express.Router();

router.get("/detail/:id", getProperty);
router.get("/list", getallPropertyList);
router.get("/propertyidlist", getallPropertyIdList);
router.get("/filterlist", getallPropertyFilterList);
router.get("/slug/:slug", getPropertySlug);
// router.post("/detail/:id", getProperty);
router.post("/sell",  photoUploadMiddleware,createProperty);
router.get("/propertylistpage/:slug",  propertyListByPage);

module.exports = router;
