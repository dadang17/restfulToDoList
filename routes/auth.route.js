import express from "express";
import { register, login, logout } from "../controller/auth.controller.js";
import { refreshToken } from "../controller/refresh.token.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
