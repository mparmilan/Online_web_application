import express from "express";
import {
  authUser,
  registerUser,
  logOutUser,
  // getUserProfile,
  // updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/register", registerUser);
router.post("/logout", logOutUser);
// router.get("/profile", getUserProfile);
// router.put("/profile", updateUserProfile);

export default router;
