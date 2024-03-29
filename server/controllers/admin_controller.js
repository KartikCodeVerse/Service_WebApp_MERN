import { Contact } from "../models/contact_model.js";
import { Service } from "../models/service_model.js";
import { User } from "../models/user_model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}, { password: 0 });
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

export const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;

    await Contact.deleteOne({ _id: id });

    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({}, { password: 0 });
    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No Services Found" });
    }
    return res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
 
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
