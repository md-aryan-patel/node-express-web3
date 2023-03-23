import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  company: String,
  model: { type: String, unique: true },
  displacement: Number,
  power: Number,
  torque: Number,
});

export default mongoose.model("Bike", bikeSchema);
