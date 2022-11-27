const express = require("express");
const userController = require("../controller/user.controller");
const verifyToken = require("../middleware/auth.token");
const { route } = require("./todo.route");
const router = express.Router();

router.get("/users", verifyToken.verifyToken, userController.getUsers);
router.get("/users/:id", verifyToken.verifyToken, userController.getUserbyId);
router.patch("/users/:id", verifyToken.verifyToken, userController.updateUser);
router.delete("/users/:id", verifyToken.verifyToken, userController.deleteUser);
router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
