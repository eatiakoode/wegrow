const City = require("../../models/cityModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");


const getCity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCity = await City.findById(id);
    const message={
      "status":"success",
      "message":"Data city sucessfully",
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
    const getallCity = await City.find({"status":true}).populate("countryid").populate("stateid");
    res.json(getallCity);
  } catch (error) {
    throw new Error(error);
  }
});
const getCityStateId = asyncHandler(async (req, res) => {
  const { stateid } = req.params;
  validateMongoDbId(stateid);
  try {
    const getallState = await City.find({ stateid: stateid });
    const message={
      "status":"success",
      "message":"Data City sucessfully",
      "data":getallState
    }
    res.json(message);
   
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getCity,
  getallCity,
  getCityStateId
};
