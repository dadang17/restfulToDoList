const express = require("express");
const todoController = require("../controller/todo.controller");
const verifyToken = require("../middleware/auth.token");
const router = express.Router();

router.post("/todo", todoController.createToDO);
router.get("/todo", todoController.getToDO);
router.get("/todo/:id", todoController.getToDobyId);
router.patch("/todo/:id", todoController.updateToDo);
router.delete("/todo/:id", todoController.deleteToDo);
router.get("/todobyuser", todoController.getToDObyUser);

module.exports = router;
