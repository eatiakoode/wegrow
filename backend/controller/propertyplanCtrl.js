const Propertyplan = require("../models/propertyfloorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const mongoose = require("mongoose");
const slugify = require("slugify");
const { processFloorPlanImages } = require("../middlewares/uploadImage");


const createPropertyplan = asyncHandler(async (req, res) => {
  try {
    // console.log("req.body floor")
    // console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    // console.log(req.body.floorPlans)
    // return false;
    // req.body.slug  = slugify(req.body.slug.toLowerCase());
    // if (req.files && req.files.featuredimage && Array.isArray(req.files.featuredimage) && req.files.featuredimage.length > 0 ) { 
    //         console.log(req.files.featuredimage)
    //         console.log("no featuredImageResize")
    //         const processedImages  =await featuredImageResize(req);
    //         if (processedImages.length > 0) {
    //           // ✅ Append logo filename to req.body
    //           req.body.featuredimageurl = "public/images/property/"+processedImages[0];
    //         }
    //       }

    for(var i=0;i<req.body.floorPlans.length;i++){

        console.log("req.body.floorPlans[i]")
        console.log(req.body.floorPlans[i])
        var plandata={
            "title":req.body.floorPlans[i].title,
            "bedroom":req.body.floorPlans[i].bedroom,
            "price":req.body.floorPlans[i].price,
            "areasize":req.body.floorPlans[i].areasize,
            "description":req.body.floorPlans[i].description,
            "propertyid":req.body.propertyId
        }
        // console.log("req.body.floorPlans[i]")
        // console.log(req.file.floorPlans[i])
        // if (req.files && req.files.floorPlans[i][planimage] && Array.isArray(req.files.floorPlans[i][planimage]) && req.files.floorPlans[i][planimage].length > 0 ) { 
        //     // console.log(req.body.floorPlans[i].planimage)
        //     console.log("no featuredImageResize")
        //     const processedImages  =await PlanImageResize(req.file.floorPlans[i][planimage]);
        //     if (processedImages.length > 0) {
        //       // ✅ Append logo filename to req.body
        //       plandata.planimageurl = "public/images/propertyplan/"+processedImages[0];
        //     }
        //   }
        const floorPlans = [];

    // Parse text fields like floorPlans[0][title], etc.
    Object.entries(req.body).forEach(([key, value]) => {
      const match = key.match(/^floorPlans\[(\d+)]\[(\w+)]$/);
      if (match) {
        const [ , index, field ] = match;
        if (!floorPlans[index]) floorPlans[index] = {};
        floorPlans[index][field] = value;
      }
    });

    // Parse uploaded files with fieldnames like floorPlans[0][planimage]
    (req.files || []).forEach((file) => {
      const match = file.fieldname.match(/^floorPlans\[(\d+)]\[planimage]$/);
      if (match) {
        const index = parseInt(match[1]);
        if (!floorPlans[index]) floorPlans[index] = {};
        floorPlans[index].planimage = file;
      }
    });
    console.log("floorPlans floorPlans")
    console.log(floorPlans)
    // Now process each floor plan image
    for (let i = 0; i < floorPlans.length; i++) {
      const plan = floorPlans[i];

      if (plan) {
        console.log("Resizing image for floorPlan", i);

        const processedImages = await processFloorPlanImages(plan); // assuming this accepts a single file
        if (processedImages.length > 0) {
            plandata.planimageurl = `${processedImages[0].url}`;
        }
      }
    }
        console.log("plandata plandata")
        console.log(plandata)
        const newPropertyplan = await Propertyplan.create(plandata);
    }
    
     
    //res.json(newProperty);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
    //   "data":newPropertyplan
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePropertyplan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    console.log("req.body")
    console.log(req.body)
    req.body.slug  = slugify(req.body.slug.toLowerCase());
    const updatedPropertyplan = await Propertyplan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const message={
      "status":"success",
      "message":"Data updated sucessfully",
      "data":updatedPropertyplan
    }
    res.json(message);
    // res.json(updatedPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePropertyplan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedPropertyplan = await Propertyplan.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedPropertyplan
    }
    res.json(message);
    // res.json(deletedPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const getPropertyplan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getPropertyplan = await Propertyplan.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getPropertyplan
    }
    res.json(message);
    // res.json(getaPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const getallPropertyplan = asyncHandler(async (req, res) => {
  try {
    const getallPropertyplan = await Propertyplan.find().populate("cityid").populate("categoryid");
    res.json(getallPropertyplan);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
createPropertyplan,
  updatePropertyplan,
  deletePropertyplan,
  getPropertyplan,
  getallPropertyplan,
};
