import express from "express";
import { contactForm } from "../controllers/contact_controller.js";
const contactRouter = express.Router();

contactRouter.post("/form", contactForm);

export default contactRouter;
