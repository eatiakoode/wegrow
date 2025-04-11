const Property = require("../models/propertyModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createProperty = asyncHandler(async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    //res.json(newProperty);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newProperty
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedProperty = await Property.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedProperty
    }
    res.json(message);
    // res.json(deletedProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getProperty = await Property.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getProperty
    }
    res.json(message);
    // res.json(getaProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getallProperty = asyncHandler(async (req, res) => {
  try {
    const getallProperty = await Property.find().populate("cityid");
    res.json(getallProperty);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getallProperty,
};
