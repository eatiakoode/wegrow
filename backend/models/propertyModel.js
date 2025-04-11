const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    price: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    area: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    room: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    countryid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country", 
      required: true,
    },
    stateid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State", 
      required: true,
    },
    cityid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City", // 🔗 This should match the name you used in mongoose.model("City", ...)
      required: true,
    },
    locationid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location", // 🔗 This should match the name you used in mongoose.model("City", ...)
      required: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    zipcode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Property", propertySchema);
