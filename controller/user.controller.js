import users from "../models/user.models.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// export const register = async (req, res) => {
//   const { name, email, password, confPassword } = req.body;
//   if (password !== confPassword)
//     return res.status(400).json({ message: "Password Tidak cocok" });

//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);
//   try {
//     await users.create({
//       name: name,
//       email: email,
//       password: hashPassword,
//     });
//     res.json({ message: "register berhasil" });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getUser = async (req, res) => {
  try {
    const response = await users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const response = await users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "User Update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
