import { Router } from "express";
import Bikes from "../Database/index.mjs";

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
    console.log(result);
    res.send(result);
  });
});

routes.post("/postinfo", (req, res) => {
  Bikes.insertData(req.body);
});

export default routes;
