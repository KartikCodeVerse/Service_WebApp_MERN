import express from "express";
import {
  getAllUsers,
  getAllContacts,
  deleteContactById,
  getAllServices,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../controllers/admin_controller.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const adminRouter = express.Router();

adminRouter.get("/users", adminMiddleware, getAllUsers);
adminRouter.get("/users/:id", adminMiddleware, getUserById);
adminRouter.patch("/user/update/:id", adminMiddleware, updateUserById);
adminRouter.delete("/user/delete/:id", adminMiddleware, deleteUserById);
adminRouter.get("/contacts", adminMiddleware, getAllContacts);
adminRouter.delete("/contact/delete/:id", adminMiddleware, deleteContactById);
adminRouter.get("/services", adminMiddleware, getAllServices);

export default adminRouter;
