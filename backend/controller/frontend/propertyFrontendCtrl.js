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
const getallPropertyFilterList = asyncHandler(async (req, res) => {
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
    if(req.query.category){
      query["categoryid"] = req.query.category;      
    }
    if(req.query.city){
      query["cityid"] = req.query.city;      
    }
    if(req.query.propertytype){
      query["propertytypeid"] = req.query.propertytype;      
    }
    if(req.query.keyword){
      query["title"] = { $regex: req.query.keyword, $options: "i" };  
    }   
    if(req.query.location){
      query["locationid"] = req.query.location;      
    }
    
    let limit=100;
    let skip=1;

    if (req.query.limit ) {
      limit=req.query.limit;
      skip=req.query.skip;     
  }
    // const getallProperty = await Property.find(query).populate("cityid").populate("categoryid").populate("propertytypeid").populate("locationid").sort({updated_at: -1}).skip((skip - 1) * limit).limit(parseInt(limit)).lean();
    const [propertyList, totalCount] = await Promise.all([
      Property.find(query)
        .populate("cityid")
        .populate("categoryid")
        .populate("propertytypeid")
        .populate("locationid")
        .sort({ updated_at: -1 })
        .skip((skip - 1) * limit)
        .limit(limit)
        .lean(),
    
      Property.countDocuments(query) // total matching without skip/limit
    ]);
    res.status(200).json({
      items: propertyList,
      totalCount: totalCount,
      currentPage: skip,
      totalPages: Math.ceil(totalCount / limit)
    });
    // res.json(getallProperty);
  } catch (error) {
    throw new Error(error);
  }
});
const getPropertySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  // validateMongoDbId(slug);
  try {
    const getProperty = await Property.findOne({ slug: slug }).populate("cityid").populate("categoryid").populate("propertytypeid").populate("locationid").populate("constructionstatus").populate("furnishingstatus").populate("amenityid");
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
module.exports = {
  getProperty,
  getallPropertyList,
  getallPropertyIdList,
  getallPropertyFilterList,
  getPropertySlug
};
