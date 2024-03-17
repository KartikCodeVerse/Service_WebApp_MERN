import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./router/auth_route.js";
import contacRouter from "./router/contact_route.js";
import { connectDb } from "./utils/connectDb.js";
import { errorMiddleware } from "./middlewares/error_middleware.js";
import serviceRouter from "./router/service_route.js";
import adminRouter from "./router/admin_route.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contact", contacRouter);
app.use("/api/service", serviceRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
