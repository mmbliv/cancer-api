const express = require("express");
const cancerController = require("../controllers/cancer.js");
const router = express.Router();
const authorize = require("../utils/user/helpers.js");

router.get("/cancer/v1", cancerController.index);
// router.get("/cancer/us", cancerController.getUsData);
// router.get("/cancer/category", cancerController.getCancerCategory);
// router.get("/cancer/cancer_data", cancerController.getAllTypeData);
router.get("/cancer/v1/:cancer_type", cancerController.getOneTypeData);
// router.put("/cancer/us/:item", cancerController.updateUsData);
router.post("/cancer/v1", authorize("admin"), cancerController.create);
router.put(
  "/cancer/v1/:cancer_type",
  authorize("admin"),
  cancerController.updata
);
module.exports = router;
