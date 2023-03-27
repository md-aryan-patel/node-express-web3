import { Router } from "express";
import Bikes from "../Database/repository.mjs";
import url from "url";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Home");
});

routes.get("/getall", (req, res) => {
  Bikes.getAll().then((result) => {
    res.send(result);
  });
});

routes.post("/postinfo", (req, res) => {
  const result = Bikes.insertData(req.body);
  res.send(result);
});

routes.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const result = Bikes.deleteBike(id);
  res.send(result);
});

routes.patch("/update", (req, res) => {
  const filter = req.body[0];
  const info = req.body[1];
  Bikes.updateInfo(filter, info);
  res.send("Updated...");
});

routes.get("/get", async (req, res) => {
  const query = url.parse(req.url, true).query;
  const result = await Bikes.get(query.key, query.value);
  res.send(result);
});

export default routes;
