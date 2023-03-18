const express = require("express");
const userController = require("../controllers/user.js");
const router = express.Router();

router.post("/user/signup", userController.signup);
router.post("/user", userController.authenticate);

module.exports = router;
