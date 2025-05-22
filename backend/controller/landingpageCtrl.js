const Landingpage = require("../models/landingpageModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { bannerImageResize,aboutImageResize,gallerySelectedImgsResize,groupFilesByFieldname,processFloorPlanImages  } = require("../middlewares/uploadImage");
const mongoose = require("mongoose");
const slugify = require("slugify");
const Landingimage = require("../models/landingimagesModel");
const Landingplan = require("../models/landingfloorModel");
const Landingpayment = require("../models/landingpaymentModel");



const createLandingpage = asyncHandler(async (req, res) => {
  try {
    
    if (req.files && Object.keys(req.files).length > 0) {
      
      const filesByField = groupFilesByFieldname(req.files);

        if (filesByField.bannerimage && filesByField.bannerimage.length > 0) {
         
          const processedImages = await bannerImageResize(filesByField.bannerimage);
         
          if (processedImages.length > 0) {
            req.body.bannerimage = "public/images/landing/" + processedImages[0];
          }
        }
      
      if (filesByField.aboutimage && filesByField.aboutimage.length > 0) {
        
        const processedImages = await bannerImageResize(filesByField.aboutimage);
       
        if (processedImages.length > 0) {
          req.body.aboutimage = "public/images/landing/" + processedImages[0];
        }
      }
    }

    if (req.body.amenityid && typeof req.body.amenityid === "string") {
      req.body.amenityid = req.body.amenityid
        .split(",")
        .map((id) => new mongoose.Types.ObjectId(id.trim()));
    }
   
 
   
    req.body.slug  = slugify(req.body.slug.toLowerCase());

    let faqs = req.body.faqs;

    // If it's a string, parse it
    if (typeof faqs === 'string') {
      try {
        faqs = JSON.parse(faqs);
      } catch (e) {
        return res.status(400).json({ error: "Invalid JSON in faqsfaqfaq" });
      }
    }

    // Extract ObjectId values
    const faqIds = faqs?.map(faq => faq.value);

// Make sure they are valid ObjectIds
const validFaqIds = faqIds?.filter(id => mongoose.Types.ObjectId.isValid(id));

req.body.faqid  = validFaqIds;
    const newLandingpage = await Landingpage.create(req.body);
    if (gallerySelectedImgs?.length > 0) {
      var gallerySelectedImgs  =[]
            if (req.files && req.files.gallerySelectedImgs && req.files.gallerySelectedImgs.length > 0  && Object.keys(req.files.gallerySelectedImgs).length > 0 && Array.isArray(req.files.gallerySelectedImgs)) {
             
               gallerySelectedImgs  = await gallerySelectedImgsResize(req);
              if (gallerySelectedImgs.length > 0) {
                // ✅ Append logo filename to req.body
                // console.log("Property Images:", gallerySelectedImgs);
                req.body.propertyimageurl = gallerySelectedImgs;
                
              }
            }
      // ✅ Append logo filename to req.body
      // console.log("Landingpage Images:", gallerySelectedImgs);
      // req.body.propertyimageurl = gallerySelectedImgs;
      for(var i=0;i<gallerySelectedImgs.length;i++){
        var propertyimage={
          "image":gallerySelectedImgs[i],
          "propertyid":newLandingpage._id,
          "title":newProperty.title
        }
        const newLandingpage = await Landingimage.create(propertyimage);

      }
    }
    for(var i=0;i<req.body.floorPlans?.length;i++){
          
      var plandata={
          "title":req.body.floorPlans[i].title,
          "areasize":req.body.floorPlans[i].areasize,
          "landingpageid":newLandingpage._id
      }
    
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
  // Now process each floor plan image
  for (let i = 0; i < floorPlans?.length; i++) {
    const plan = floorPlans[i];

    if (plan) {
      console.log("Resizing image for floorPlan", i);

      const processedImages = await processFloorPlanImages(plan); // assuming this accepts a single file
      if (processedImages.length > 0) {
          plandata.planimageurl = `${processedImages[0].url}`;
      }
    }
  }
      const newPropertyplan = await Landingplan.create(plandata);
    }

    for(var i=0;i<req.body.paymentPlans?.length;i++){

     
      var plandata={
          "title":req.body.paymentPlans[i].title,
          "areasize":req.body.paymentPlans[i].areasize,
          "price":req.body.paymentPlans[i].price,
          "landingpageid":newLandingpage._id
      }
    
      
      const newPropertyplan = await Landingpayment.create(plandata);
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
    console.log("req.body")
    console.log(req.body)
    console.log("req.files")
    console.log(req.files)

    if (req.files && Object.keys(req.files).length > 0) {
      
      const filesByField = groupFilesByFieldname(req.files);

        if (filesByField.bannerimage && filesByField.bannerimage.length > 0) {
         
          const processedImages = await bannerImageResize(filesByField.bannerimage);
         
          if (processedImages.length > 0) {
            req.body.bannerimage = "public/images/landing/" + processedImages[0];
          }
        }
      
      if (filesByField.aboutimage && filesByField.aboutimage.length > 0) {
        
        const processedImages = await bannerImageResize(filesByField.aboutimage);
       
        if (processedImages.length > 0) {
          req.body.aboutimage = "public/images/landing/" + processedImages[0];
        }
      }
    }

    if (req.body.amenityid && typeof req.body.amenityid === "string") {
      req.body.amenityid = req.body.amenityid
        .split(",")
        .map((id) => new mongoose.Types.ObjectId(id.trim()));
    }
   
 
   
    req.body.slug  = slugify(req.body.slug.toLowerCase());

    let faqs = req.body.faqs;

    // If it's a string, parse it
    if (typeof faqs === 'string') {
      try {
        faqs = JSON.parse(faqs);
      } catch (e) {
        return res.status(400).json({ error: "Invalid JSON in faqsfaqfaq" });
      }
    }

    // Extract ObjectId values
    const faqIds = faqs?.map(faq => faq.value);

// Make sure they are valid ObjectIds
const validFaqIds = faqIds?.filter(id => mongoose.Types.ObjectId.isValid(id));

req.body.faqid  = validFaqIds;
    const updatedLandingpage = await Landingpage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    if (req.files.gallerySelectedImgs?.length > 0) {
      console.log("test")
      const filesByFields = groupFilesByFieldname(req.files);
      var gallerySelectedImgsget  =[]
      if (filesByFields.gallerySelectedImgs && filesByFields.gallerySelectedImgs.length > 0) {    
        console.log("test2")         
          gallerySelectedImgsget  = await gallerySelectedImgsResize(filesByFields.gallerySelectedImgs);
          for(var i=0;i<gallerySelectedImgsget.length;i++){
            console.log("test3")
            var propertyimage={
              "image":gallerySelectedImgsget[i],
              "landingpageid":id,
              "title":req.body.title
            }
            const newLandingpage = await Landingimage.create(propertyimage);    
          }
      }
    }
    for(var i=0;i<req.body.floorPlans?.length;i++){
          
      var plandata={
          "title":req.body.floorPlans[i].title,
          "areasize":req.body.floorPlans[i].areasize,
          "landingpageid":id
      }
    
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
  // Now process each floor plan image
  for (let i = 0; i < floorPlans?.length; i++) {
    const plan = floorPlans[i];

    if (plan) {
      console.log("Resizing image for floorPlan", i);

      const processedImages = await processFloorPlanImages(plan); // assuming this accepts a single file
      if (processedImages.length > 0) {
          plandata.planimageurl = `${processedImages[0].url}`;
      }
    }
  }
      const newPropertyplan = await Landingplan.create(plandata);
    }

    for(var i=0;i<req.body.paymentPlans?.length;i++){

     
      var plandata={
          "title":req.body.paymentPlans[i].title,
          "areasize":req.body.paymentPlans[i].areasize,
          "price":req.body.paymentPlans[i].price,
          "landingpageid":id
      }
    
      
      const newPropertyplan = await Landingpayment.create(plandata);
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
    const getLandingpage = await Landingpage.findById(id).populate('paymentplan').populate("floorplan").populate("galleryimages");
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
    const getallLandingpage = await Landingpage.find();
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
