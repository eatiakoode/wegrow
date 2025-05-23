const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model

var citySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    citylogoimage: {
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
module.exports = mongoose.model("City", citySchema);
