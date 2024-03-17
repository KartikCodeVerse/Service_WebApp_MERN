import jwt from "jsonwebtoken";
import { User } from "../models/user_model.js";

export const adminMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  try {
    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email });
    // console.log(userData);

    if (!userData.isAdmin) {
      return res.status(403).json({ message: "Forbidden. Access denied." });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};
