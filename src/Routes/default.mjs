import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Welcome to bike info");
});

export default routes;
