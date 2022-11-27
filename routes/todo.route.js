const express = require("express");
const todoController = require("../controller/todo.controller");
const verifyToken = require("../middleware/auth.token");
const router = express.Router();

router.post("/todo", verifyToken.verifyToken, todoController.createToDO);
router.get("/todo", verifyToken.verifyToken, todoController.getToDO);
router.get("/todo/:id", verifyToken.verifyToken, todoController.getToDobyId);
router.patch("/todo/:id", verifyToken.verifyToken, todoController.updateToDo);
router.delete("/todo/:id", verifyToken.verifyToken, todoController.deleteToDo);
router.get(
  "/todobyuser",
  verifyToken.verifyToken,
  todoController.getToDObyUser
);

module.exports = router;
