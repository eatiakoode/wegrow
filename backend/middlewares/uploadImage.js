const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});
const photoUploadMiddleware = uploadPhoto.fields([
  { name: 'featuredimage', maxCount: 1 },
  { name: 'siteplan', maxCount: 1 },
  { name: 'propertySelectedImgs', maxCount: 10 },
  // { name: 'planimage', maxCount: 80 }
  // { name: 'citylogo', maxCount: 1 },
  
]);
// const uploadPhoto1 = multer({
//   storage: storage,
//   fileFilter: multerFilter,
//   limits: { fileSize: 1000000 },
// });
const photoUploadMiddleware1 = uploadPhoto.any(); // accept any form field name

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
      // fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};

// const blogImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   await Promise.all(
//     req.files.map(async (file) => {
//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`public/images/blogs/${file.filename}`);
//       // fs.unlinkSync(`public/images/blogs/${file.filename}`);
//     })
//   );
//   next();
// };
const blogImgResize = async (req) => {
  if (!req.files || !Array.isArray(req.files)) return;

  const processedFilenames = [];

  await Promise.all(
    req.files.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "blogs", filename);

      await sharp(file.path)
        .resize(650, 400)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};

const builderImgResize = async (req) => {
  if (!req.files || !Array.isArray(req.files)) return;

  const processedFilenames = [];

  await Promise.all(
    req.files.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "builder", filename);

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};
// const builderImgResize = async (req, res, next) => {
//   if (!req.files) return next();
//   await Promise.all(
//     req.files.map(async (file) => {
//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`public/images/builder/${file.filename}`);
//       // fs.unlinkSync(`public/images/blogs/${file.filename}`);
//     })
//   );
//   next();
// };
const featuredImageResize = async (req) => {
  if (!req.files.featuredimage || !Array.isArray(req.files.featuredimage)) return;

  const processedFilenames = [];

  await Promise.all(
    req.files.featuredimage.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "property", filename);

      await sharp(file.path)
        .resize(750, 450)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};
const sitePlanResize = async (req) => {
  

  if (!req.files.siteplan || !Array.isArray(req.files.siteplan)) return;

  const processedFilenames = [];
 
  await Promise.all(
    req.files.siteplan.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "siteplan", filename);

      await sharp(file.path)
        .resize(800, 420)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};
const testimonialImgResize = async (req) => {
  if (!req.files || !Array.isArray(req.files)) return;

  const processedFilenames = [];

  await Promise.all(
    req.files.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "testimonial", filename);

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};

const propertySelectedImgsResize = async (req) => {

  if (!req.files.propertySelectedImgs || !Array.isArray(req.files.propertySelectedImgs)) return;

  const processedFilenames = [];
  await Promise.all(
    req.files.propertySelectedImgs.map(async (file) => {
      
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "propertyimage", filename);

      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // fs.unlinkSync(file.path); // delete original uploaded file

      processedFilenames.push("public/images/propertyimage/"+filename);
    })
  );

  return processedFilenames;
};

const cityImgResize = async (req) => {
  console.log("filename 1")

  if (!req.files || !Array.isArray(req.files)) return;
  console.log("filename 2")

  const processedFilenames = [];

  await Promise.all(
    req.files.map(async (file) => {
      // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
      const filename =file.filename
      const outputPath = path.join("public", "images", "city", filename);

      await sharp(file.path)
        .resize(755, 355)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // fs.unlinkSync(file.path); // delete original uploaded file
// console.log("filename")
// console.log(filename)

      processedFilenames.push(filename);
    })
  );

  return processedFilenames;
};
// const cityImgResize = async (req) => {
  

//   if (!req.files.citylogo || !Array.isArray(req.files.citylogo)) return;

//   const processedFilenames = [];
 
//   await Promise.all(
//     req.files.citylogo.map(async (file) => {
//       // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
//       const filename =file.filename
//       const outputPath = path.join("public", "images", "city", filename);

//       await sharp(file.path)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(outputPath);

//       // fs.unlinkSync(file.path); // delete original uploaded file

//       processedFilenames.push(filename);
//     })
//   );

//   return processedFilenames;
// };
// const sharp = require("sharp");
// const path = require("path");

const processFloorPlanImages = async (req) => {
  const processedFilenames = [];
  // console.log("test1dd")
  if (!req.planimage ) return [];

  // Loop through all files matching the nested fieldname pattern
  // const planImageFiles = req.files.filter(file =>
  //   /^floorPlans\[\d+]\\[planimage]$/.test(file.fieldname) ||
  //   /^floorPlans\[\d+]\[planimage]$/.test(file.fieldname) // for safety across OS
  // );
  // console.log("test1")
  var file=req.planimage
  // await Promise.all(
  //   planImageFiles.map(async (file) => {
      // const filename = file.filename;
      const filename = `floorplan-${Date.now()}-${file.originalname}.jpeg`;
      const outputPath = path.join("public", "images", "propertyplan", filename);
      console.log("test2")
      await sharp(file.path)
        .resize(750, 450)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      // Optional: delete original file after processing
      // fs.unlinkSync(file.path);

      processedFilenames.push({
        index: parseInt(file.fieldname.match(/\[(\d+)]/)[1]), // extract index from fieldname
        filename,
        url: `public/images/propertyplan/${filename}`,
      });
  //   })
  // );
  // console.log("test3")
  // console.log(processedFilenames)
  return processedFilenames;
};

// const PlanImageResize = async (req) => {
//   console.log("test1dd")
//   console.log(req)
//   if (!req.planimage || !Array.isArray(req.planimage)) return;

//   const processedFilenames = [];
//   console.log("test1")
//   await Promise.all(
//     req.map(async (file) => {
//       console.log("test2")
//       // const filename = `builder-${Date.now()}-${file.originalname}.jpeg`;
//       const filename =file.filename
//       const outputPath = path.join("public", "images", "propertyplan", filename);
//       console.log("test3")
//       await sharp(file.path)
//         .resize(750, 450)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(outputPath);

//       // fs.unlinkSync(file.path); // delete original uploaded file

//       processedFilenames.push(filename);
//     })
//   );

//   return processedFilenames;
// };
module.exports = { uploadPhoto, productImgResize, blogImgResize,builderImgResize,featuredImageResize,sitePlanResize,photoUploadMiddleware,testimonialImgResize,propertySelectedImgsResize ,cityImgResize,processFloorPlanImages,photoUploadMiddleware1};
