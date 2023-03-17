const express = require("express");
const cancerController = require("../controllers/cancer.js");
const router = express.Router();

router.get("/cancer", cancerController.index);

module.exports = router;
