const express = require("express");
const stataController = require("../controllers/states.js");
const router = express.Router();
const authorize = require("../utils/user/helpers.js");

router.get("/cancer/v1/state", stataController.index);
router.get("/cancer/v1/state/:state", stataController.showStateData);
// router.post("/state/cancer/:state-:cancer", stataController.create);
router.get("/cancer/v1/cancer", stataController.showCancerInState);
router.put(
  "/cancer/v1/state/:state-:cancer_type",
  authorize("admin"),
  stataController.updata
);
router.post("/cancer/v1/state", authorize("admin"), stataController.create);

module.exports = router;
