const express = require("express");
const cancerController = require("../controllers/cancer.js");
const router = express.Router();
const authorize = require("../utils/user/helpers.js");

router.get("/cancer", cancerController.index);
// router.get("/cancer/us", cancerController.getUsData);
// router.get("/cancer/category", cancerController.getCancerCategory);
// router.get("/cancer/cancer_data", cancerController.getAllTypeData);
router.get("/cancer/:cancer", cancerController.getOneTypeData);
// router.put("/cancer/us/:item", cancerController.updateUsData);
router.post("/cancer", authorize("admin"), cancerController.create);
router.put("/cancer/:cancer", authorize("admin"), cancerController.updata);
module.exports = router;
