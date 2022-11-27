// const express = require("express");
// import { register, login, logout } from "../controller/auth.controller.js";
// import { refreshToken } from "../controller/refresh.token.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/token", refreshToken);
// router.delete("/logout", logout);

// export default router;

const express = require("express");
const authController = require("../controller/auth.controller");
const refreshToken = require("../controller/refresh.token");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.delete("/logout", authController.logout);
router.get("/token", refreshToken.refreshToken);

module.exports = router;
