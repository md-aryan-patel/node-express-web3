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
  const result = await Bike.find();
  console.log(result);
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

export default {
  getAll,
  getBikesWithCompany,
  getBikesWithModel,
  insertData,
};
