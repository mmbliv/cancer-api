const express = require("express");
const stataController = require("../controllers/states.js");
const router = express.Router();
const authorize = require("../utils/user/helpers.js");

router.get("/state", stataController.index);
router.get("/state/:state", stataController.showStateData);
// router.post("/state/cancer/:state-:cancer", stataController.create);
router.get("/state/cancer/:state-:cancer", stataController.showCancerInState);
router.put(
  "/state/cancer/:state-:cancer",
  authorize("admin"),
  stataController.updata
);
router.post(
  "/state/cancer/:state-:cancer",
  authorize("admin"),
  stataController.create
);

module.exports = router;
