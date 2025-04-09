const Amenity = require("../models/amenityModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createAmenity = asyncHandler(async (req, res) => {
  try {
    const newAmenity = await Amenity.create(req.body);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newAmenity
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateAmenity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedAmenity = await Amenity.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedAmenity);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteAmenity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedAmenity = await Amenity.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedAmenity
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getAmenity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAmenity = await Amenity.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getAmenity
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getallAmenity = asyncHandler(async (req, res) => {
  try {
    const getallAmenity = await Amenity.find();
    res.json(getallAmenity);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createAmenity,
  updateAmenity,
  deleteAmenity,
  getAmenity,
  getallAmenity,
};
