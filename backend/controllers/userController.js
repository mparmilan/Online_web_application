import UserModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User(POST) - /api/v1/users/register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userExists = await UserModel.findOne({ email: email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // jsonwebtoken
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    res.status(201).json({ message: "User created successfully", user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User(POST) - /api/v1/users/login
export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = await UserModel.findOne({ email: email });

    // Check user exist
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    } else {
      if (user) {
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          res.status(400).json({ message: "Email or Password incorrect" });
        }
        // jsonwebtoken
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "90d",
        });

        res
          .status(200)
          .json({ message: "User logged in successfully", user, token });
      }
    }
  } catch (error) {
    throw error;
    res.status(500).json({ message: error.message });
  }
};

// Logout User(POST) - /api/v1/users/logout
export const logOutUser = async (req, res) => {
  res.status(200).json({ message: "Logout User" });
};

// // Get User Profile(GET) - /api/v1/users/profile
// export const getUserProfile = async (req, res) => {
//   res.status(200).json({ message: "User Profile" });
// };

// // Update User Profile(PUT) - /api/v1/users/profile
// export const updateUserProfile = async (req, res) => {
//   res.status(200).json({ message: "Update User Profile" });
// };
