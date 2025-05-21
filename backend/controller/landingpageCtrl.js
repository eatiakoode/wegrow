const Landingpage = require("../models/landingpageModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { featuredImageResize,sitePlanResize,landingpageSelectedImgsResize } = require("../middlewares/uploadImage");
const mongoose = require("mongoose");
const slugify = require("slugify");
// const Propertyimage = require("../models/propertyimagesModel");

const createLandingpage = asyncHandler(async (req, res) => {
  try {
    if (req.files && Object.keys(req.files).length > 0) {
      var propertySelectedImgs  =[]
      if (req.files && req.files.propertySelectedImgs && req.files.propertySelectedImgs.length > 0  && Object.keys(req.files.propertySelectedImgs).length > 0 && Array.isArray(req.files.propertySelectedImgs)) {
        console.log("no propertySelectedImgs")
         propertySelectedImgs  = await propertySelectedImgsResize(req);
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
          req.body.siteplanurl = "public/images/siteplan/"+processedImagesplan[0];
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

    const newLandingpage = await Landingpage.create(req.body);
    if (propertySelectedImgs.length > 0) {
      // ✅ Append logo filename to req.body
      // console.log("Landingpage Images:", propertySelectedImgs);
      // req.body.propertyimageurl = propertySelectedImgs;
      for(var i=0;i<propertySelectedImgs.length;i++){
        var propertyimage={
          "image":propertySelectedImgs[i],
          "propertyid":newLandingpage._id,
          "title":newProperty.title
        }
        const newLandingpage = await Propertyimage.create(propertyimage);

      }
    }
    //res.json(newProperty);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newLandingpage
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateLandingpage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
   

    if (req.files && Object.keys(req.files).length > 0) {
      var  propertySelectedImgs  =[]
      if (req.files && req.files.propertySelectedImgs && req.files.propertySelectedImgs.length > 0  && Object.keys(req.files.propertySelectedImgs).length > 0 && Array.isArray(req.files.propertySelectedImgs)) {
        console.log("no propertySelectedImgs")
         propertySelectedImgs  = await propertySelectedImgsResize(req);
        if (propertySelectedImgs.length > 0) {
          // ✅ Append logo filename to req.body
          // console.log("Landingpage Images:", propertySelectedImgs);
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
          req.body.siteplanurl = "public/images/siteplan/"+processedImagesplan[0];
        }
      }
    }
    if (req.body.amenityid && typeof req.body.amenityid === "string") {
      req.body.amenityid = req.body.amenityid
        .split(",")
        .map((id) => new mongoose.Types.ObjectId(id.trim()));
    }
    req.body.slug  = slugify(req.body.slug.toLowerCase());
    req.body.admin_approve = true;
   

    const updatedLandingpage = await Landingpage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    if (propertySelectedImgs?.length > 0) {
      // ✅ Append logo filename to req.body
      // console.log("Property Images:", propertySelectedImgs);
      // req.body.propertyimageurl = propertySelectedImgs;
      for(var i=0;i<propertySelectedImgs?.length;i++){
        var propertyimage={
          "image":propertySelectedImgs[i],
          "propertyid":id,
          "title":req.body.title
        }
        const newProperty = await Propertyimage.create(propertyimage);

      }
    }
    
   
    const message={
      "status":"success",
      "message":"Data updated sucessfully",
      "data":updatedLandingpage
    }
    res.json(message);
    // res.json(updatedLandingpage);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteLandingpage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedLandingpage = await Landingpage.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedLandingpage
    }
    res.json(message);
    // res.json(deletedLandingpage);
  } catch (error) {
    throw new Error(error);
  }
});
const getLandingpage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getLandingpage = await Landingpage.findById(id).populate('images').populate("floorplan");
    const message={
      "status":"success",
      "message":"Data deleted sucessfully ii",
      "data":getLandingpage
    }
    res.json(message);
    // res.json(getaLandingpage);
  } catch (error) {
    throw new Error(error);
  }
});
const getallLandingpage = asyncHandler(async (req, res) => {
  try {
    const getallLandingpage = await Landingpage.find().populate("cityid").populate("categoryid");
    res.json(getallLandingpage);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createLandingpage,
  updateLandingpage,
  deleteLandingpage,
  getLandingpage,
  getallLandingpage,
};
