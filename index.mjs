import routes from "./Routes/routes.mjs";
import cors from "cors";
import Express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/", routes.def);
app.use("/home", routes.home);
app.use("/about", routes.about);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
