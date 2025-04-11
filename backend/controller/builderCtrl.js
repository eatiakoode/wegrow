const Builder = require("../models/builderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBuilder = asyncHandler(async (req, res) => {
  try {
    const newBuilder = await Builder.create(req.body);
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newBuilder
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateBuilder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBuilder = await Builder.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBuilder);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteBuilder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBuilder = await Builder.findByIdAndDelete(id);

    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedBuilder
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getBuilder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaBuilder = await Builder.findById(id);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaBuilder
    }
    res.json(message);
   //res.json(getaBuilder);
  } catch (error) {
    throw new Error(error);
  }
});
const getallBuilder = asyncHandler(async (req, res) => {
  try {
    const getallBuilder = await Builder.find();
    res.json(getallBuilder);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createBuilder,
  updateBuilder,
  deleteBuilder,
  getBuilder,
  getallBuilder,
};
