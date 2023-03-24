import { Router } from "express";
import Bikes from "../Database/repository.mjs";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Home");
});

routes.get("/getall", (req, res) => {
  Bikes.getAll().then((result) => {
    res.send(result);
  });
});

routes.get("/model/:model", (req, res) => {
  Bikes.getBikesWithModel(req.params.model).then((result) => {
    res.send(result);
  });
});

routes.get("/company/:company", (req, res) => {
  Bikes.getBikesWithCompany(req.params.company).then((result) => {
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

export default routes;
