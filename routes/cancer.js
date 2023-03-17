const express = require("express");
const cancerController = require("../controllers/cancer.js");
const router = express.Router();

router.get("/cancer", cancerController.index);
router.get("/cancer/us", cancerController.getUsData);
router.get("/cancer/category", cancerController.getCancerCategory);
router.get("/cancer/cancer_data", cancerController.getAllTypeData);
router.get("/cancer/cancer_data/:cancer", cancerController.getOneTypeData);
router.put("/cancer/us/:item", cancerController.updateUsData);

module.exports = router;
