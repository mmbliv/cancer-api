const express = require("express");
const stataController = require("../controllers/states.js");
const router = express.Router();

router.get("/state", stataController.index);
router.get("/state/:name", stataController.showStateData);

module.exports = router;
