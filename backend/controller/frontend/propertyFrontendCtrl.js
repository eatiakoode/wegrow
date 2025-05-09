const Property = require("../../models/propertyModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const getProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getProperty = await Property.findById(id).populate("cityid").populate("categoryid").populate("propertytypeid").populate("locationid").populate("constructionstatus").populate("furnishingstatus").populate("amenityid");
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
const getallPropertyList = asyncHandler(async (req, res) => {
  try {
    let query = {};
    // let query ={"status":true}
    query["status"] =true;
    if(req.query.featured=="yes"){
      query["featuredproperty"] = req.query.featured;      
    }
    if(req.query.hot=="yes"){
      query["hotproperty"] = req.query.hot;      
    }
    let limit=100;
    let skip=1;

    if (req.query.limit ) {
      limit=req.query.limit;
      skip=req.query.skip;     
  }
    const getallProperty = await Property.find(query).populate("cityid").populate("categoryid").populate("propertytypeid").populate("locationid").sort({updated_at: -1}).skip((skip - 1) * limit).limit(parseInt(limit)).lean();
    res.json(getallProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getallPropertyIdList = asyncHandler(async (req, res) => {
  try {
  
    const prolist = req.query.prolist;
    const idArray = prolist.split(",");

    const objectIds = idArray.map(id => new ObjectId(id)); // FIXED here

    const getallProperty = await Property.find({
      _id: { $in: objectIds }
    }).populate("cityid").populate("propertytypeid").populate("furnishingstatus").lean();
    res.json(getallProperty);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getProperty,
  getallPropertyList,
  getallPropertyIdList
};
