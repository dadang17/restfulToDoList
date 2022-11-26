import express from "express";
import {
  getToDobyId,
  getToDO,
  createToDO,
  updateToDo,
  deleteToDo,
} from "../controller/todo.controller.js";
import { verifyToken } from "../middleware/auth.token.js";

const router = express.Router();

router.get("/todo", verifyToken, getToDO);
router.get("/todo/:id", verifyToken, getToDobyId);
router.post("/todo", verifyToken, createToDO);
router.patch("/todo/:id", verifyToken, updateToDo);
router.delete("/todo/:id", verifyToken, deleteToDo);

export default router;
