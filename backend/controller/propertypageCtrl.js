const Propertypage = require("../models/propertypageModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { featuredImageResize,sitePlanResize } = require("../middlewares/uploadImage");
const mongoose = require("mongoose");

const createPropertypage = asyncHandler(async (req, res) => {
  try {
     const newPropertypage = await Propertypage.create(req.body);
    //res.json(newProperty);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newPropertypage
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updatePropertypage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedPropertypage = await Propertypage.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const message={
      "status":"success",
      "message":"Data updated sucessfully",
      "data":updatedPropertypage
    }
    res.json(message);
    // res.json(updatedPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const deletePropertypage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedPropertypage = await Propertypage.findByIdAndDelete(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedPropertypage
    }
    res.json(message);
    // res.json(deletedPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const getPropertypage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getPropertypage = await Propertypage.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getPropertypage
    }
    res.json(message);
    // res.json(getaPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
const getallPropertypage = asyncHandler(async (req, res) => {
  try {
    const getallPropertypage = await Propertypage.find().populate("cityid").populate("categoryid");
    res.json(getallPropertypage);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createPropertypage,
  updatePropertypage,
  deletePropertypage,
  getPropertypage,
  getallPropertypage,
};
