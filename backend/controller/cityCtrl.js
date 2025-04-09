const City = require("../models/cityModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createCity = asyncHandler(async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newCity
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCity = await City.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCity);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCity = await City.findByIdAndDelete(id);

    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedCity
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getCity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCity = await City.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaCity
    }
    res.json(message);
   //res.json(getaCity);
  } catch (error) {
    throw new Error(error);
  }
});
const getallCity = asyncHandler(async (req, res) => {
  try {
    const getallCity = await City.find();
    res.json(getallCity);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createCity,
  updateCity,
  deleteCity,
  getCity,
  getallCity,
};
