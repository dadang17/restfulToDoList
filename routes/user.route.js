import express from "express";
import {
  getUser,
  getUserbyId,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.token.js";

const router = express.Router();

router.get("/user", verifyToken, getUser);
router.get("/user/:id", verifyToken, getUserbyId);
router.patch("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);

export default router;
