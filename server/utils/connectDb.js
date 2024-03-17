import mongoose from "mongoose";

// const URI =;

export const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    if (dbConnection) {
      console.log("Db is connected");
    }
  } catch (error) {
    console.log(error);
  }
};
