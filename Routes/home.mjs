import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Home");
});

routes.get("/:tag", (req, res) => {
  res.send(`Home with tag ${req.params.tag}`);
});

routes.post("/data", (req, res) => {
  res.send(req.body);
});

export default routes;
