import { Service } from "../models/service_model.js";

export const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "No Service Found" });
    }
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
  }
};
