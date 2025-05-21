const mongoose = require("mongoose"); // Erase if already required
// const Landingpageimage = require("../models/propertyimagesModel");
// const Landingpagefloor = require("../models/propertyfloorModel");

// Declare the Schema of the Mongo model
var landingpageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
    },
    banner_heading: {
        type: String,
        required: true,
    },
    banner_description: {
    type: String,
    required: true,
    },
    banner_image: {
    type: String,
    required: true,
    },
    about_heading: {
        type: String,
        required: true,
    },
    about_description: {
    type: String,
    required: true,
    },
    about_image: {
    type: String,
    required: true,
    },
    amenityid: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Amenity", // 🔗 This should match the name you used in mongoose.model("Amenity", ...)
      // required: true,
    }],
    galleryimageurl:[{
      type: String,
      // required: true,
      // unique: true,
      // index: true,
    }],
    faqid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Faq", // 🔗 This should match the name you used in mongoose.model("Amenity", ...)
        // required: true,
      }],
    metatitle:{
      type: String,
      // required: true,
      // unique: true,
      // index: true,
    },
    metadescription:{
      type: String,
      // required: true,
      // unique: true,
      // index: true,
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

landingpageSchema.virtual('galleryimages', {
  ref: 'Landingimage', // Make sure this matches the model name for your images schema
  localField: '_id',
  foreignField: 'landingid',
});

landingpageSchema.set('toObject', { virtuals: true });
landingpageSchema.set('toJSON', { virtuals: true });


landingpageSchema.virtual('floorplan', {
  ref: 'Landingfloor', // Make sure this matches the model name for your images schema
  localField: '_id',
  foreignField: 'landingid',
});

landingpageSchema.set('toObject', { virtuals: true });
landingpageSchema.set('toJSON', { virtuals: true });
//Export the model


landingpageSchema.virtual('paymentplan', {
    ref: 'Landingpayment', // Make sure this matches the model name for your images schema
    localField: '_id',
    foreignField: 'landingid',
  });
  
  landingpageSchema.set('toObject', { virtuals: true });
  landingpageSchema.set('toJSON', { virtuals: true });
  //Export the model
module.exports = mongoose.model("Landingpage", landingpageSchema);


