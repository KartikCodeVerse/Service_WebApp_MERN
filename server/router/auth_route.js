import express from "express";
import { home, register, login, user } from "../controllers/auth_controller.js";
import { validate } from "../middlewares/validate_middleware.js";
import { loginSchema, signupSchema } from "../validators/auth_validator.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.get("/", home);

authRouter.post("/register", validate(signupSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.get("/user", authMiddleware, user);

export default authRouter;
