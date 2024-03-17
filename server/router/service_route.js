import express from "express";
import { services } from "../controllers/service_controller.js";

const serviceRouter = express.Router();

serviceRouter.get("/data", services);

export default serviceRouter;
