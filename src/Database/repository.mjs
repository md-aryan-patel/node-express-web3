// import mongoose from "mongoose";
import mongoose from "mongoose";
import Bike from "../Models/BikeModel.mjs";
import dotenv from "dotenv";
dotenv.config();

const base_url = process.env.BASE_URL;

mongoose.connect(`${base_url}/Bikesdb`);

const insertData = async (data) => {
  try {
    const res = await Bike.insertMany(data);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

const getAll = async () => {
  const result = await Bike.find().sort({ power: 1 });
  return result;
};

const getBikesWithModel = async (_model) => {
  const result = await Bike.findOne({ model: _model });
  return result;
};

const getBikesWithCompany = async (_company) => {
  const result = await Bike.find({ company: _company });
  return result;
};

const deleteBike = async (_id) => {
  const result = await Bike.findByIdAndDelete(_id);
  console.log(result);
};

const updateInfo = async (_filter, _info) => {
  const result = await Bike.findOneAndUpdate(_filter, _info);
  console.log(result);
};

/*___________________________________Testing___________________________________ /
const testFunction = async () => {
  let result = await Bike.find({ power: { $lte: 20 } }).select("model");
  // result = await getAll();
  console.log(result);
};
testFunction();
/*_____________________________________________________________________________*/

export default {
  getAll,
  getBikesWithCompany,
  getBikesWithModel,
  insertData,
  deleteBike,
  updateInfo,
};
