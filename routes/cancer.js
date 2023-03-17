const express = require("express");
const cancerController = require("../controllers/cancer.js");
const router = express.Router();

router.get("/cancer", cancerController.index);
router.get("/cancer/us", cancerController.getUsData);
router.get("/cancer/category", cancerController.getCancerCategory);
router.get("/cancer/type_data", cancerController.getTypeData);

module.exports = router;
