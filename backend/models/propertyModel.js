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
    propertid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    areasize: {
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
    bedroom: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    bathroom: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    propertytype: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Propertytype", // 🔗 This should match the name you used in mongoose.model("Propertytype", ...)
      required: true,
    },
    builderid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Builder", // 🔗 This should match the name you used in mongoose.model("Builder", ...)
      required: true,
    },
    agentid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent", // 🔗 This should match the name you used in mongoose.model("Agent", ...)
      required: true,
    },
    amenityid: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Amenity", // 🔗 This should match the name you used in mongoose.model("Amenity", ...)
      required: true,
    }],
    categoryid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // 🔗 This should match the name you used in mongoose.model("Category", ...)
      required: true,
    },
    type: {
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
