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
  // { name: 'citylogo', maxCount: 1 },
  
]);
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
      const outputPath = path.join("public", "images", "propertyplan", filename);

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

module.exports = { uploadPhoto, productImgResize, blogImgResize,builderImgResize,featuredImageResize,sitePlanResize,photoUploadMiddleware,testimonialImgResize,propertySelectedImgsResize ,cityImgResize};
