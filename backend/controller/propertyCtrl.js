const Property = require("../models/propertyModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { featuredImageResize,sitePlanResize,propertySelectedImgsResize } = require("../middlewares/uploadImage");
const mongoose = require("mongoose");
const slugify = require("slugify");

const createProperty = asyncHandler(async (req, res) => {
  try {
    if (req.files && Object.keys(req.files).length > 0) {
      
      if (req.files && req.files.propertySelectedImgs && req.files.propertySelectedImgs.length > 0  && Object.keys(req.files.propertySelectedImgs).length > 0 && Array.isArray(req.files.propertySelectedImgs)) {
        console.log("no propertySelectedImgs")
        const propertySelectedImgs  = await propertySelectedImgsResize(req);
        if (propertySelectedImgs.length > 0) {
          // ✅ Append logo filename to req.body
          // console.log("Property Images:", propertySelectedImgs);
          req.body.propertyimageurl = propertySelectedImgs;
        }
      }
     
      if (req.files && req.files.featuredimage && Array.isArray(req.files.featuredimage) && req.files.featuredimage.length > 0 ) { 
        console.log(req.files.featuredimage)
        console.log("no featuredImageResize")
        const processedImages  =await featuredImageResize(req);
        if (processedImages.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.featuredimageurl = "public/images/property/"+processedImages[0];
        }
      }
      if (req.files && req.files.siteplan && Array.isArray(req.files.siteplan) && req.files.siteplan.length > 0 ) { 
        
        console.log(req.files.siteplan)
        console.log("no siteplan")
        const processedImagesplan  =await sitePlanResize(req);

        if (processedImagesplan.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.siteplanurl = "public/images/propertyplan/"+processedImagesplan[0];
        }
      }
    }

    if (req.body.amenityid && typeof req.body.amenityid === "string") {
      req.body.amenityid = req.body.amenityid
        .split(",")
        .map((id) => new mongoose.Types.ObjectId(id.trim()));
    }
    console.log("req.body")
    console.log(req.body)
    req.body.slug  = slugify(req.body.slug.toLowerCase());

    const newProperty = await Property.create(req.body);
    //res.json(newProperty);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newProperty
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
   

    if (req.files && Object.keys(req.files).length > 0) {
      
      if (req.files && req.files.propertySelectedImgs && req.files.propertySelectedImgs.length > 0  && Object.keys(req.files.propertySelectedImgs).length > 0 && Array.isArray(req.files.propertySelectedImgs)) {
        console.log("no propertySelectedImgs")
        const propertySelectedImgs  = await propertySelectedImgsResize(req);
        if (propertySelectedImgs.length > 0) {
          // ✅ Append logo filename to req.body
          // console.log("Property Images:", propertySelectedImgs);
          req.body.propertyimageurl = propertySelectedImgs;
        }
      }
     
      if (req.files && req.files.featuredimage && Array.isArray(req.files.featuredimage) && req.files.featuredimage.length > 0 ) { 
        console.log(req.files.featuredimage)
        console.log("no featuredImageResize")
        const processedImages  =await featuredImageResize(req);
        if (processedImages.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.featuredimageurl = "public/images/property/"+processedImages[0];
        }
      }
      if (req.files && req.files.siteplan && Array.isArray(req.files.siteplan) && req.files.siteplan.length > 0 ) { 
        
        console.log(req.files.siteplan)
        console.log("no siteplan")
        const processedImagesplan  =await sitePlanResize(req);

        if (processedImagesplan.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.siteplanurl = "public/images/propertyplan/"+processedImagesplan[0];
        }
      }
    }
    if (req.body.amenityid && typeof req.body.amenityid === "string") {
      req.body.amenityid = req.body.amenityid
        .split(",")
        .map((id) => new mongoose.Types.ObjectId(id.trim()));
    }
    req.body.slug  = slugify(req.body.slug.toLowerCase());
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const message={
      "status":"success",
      "message":"Data updated sucessfully",
      "data":updatedProperty
    }
    res.json(message);
    // res.json(updatedProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedProperty
    }
    res.json(message);
    // res.json(deletedProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getProperty = await Property.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getProperty
    }
    res.json(message);
    // res.json(getaProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getallProperty = asyncHandler(async (req, res) => {
  try {
    const getallProperty = await Property.find().populate("cityid").populate("categoryid");
    res.json(getallProperty);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getallProperty,
};
