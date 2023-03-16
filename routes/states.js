const express = require("express");
const stataController = require("../controllers/states.js");
const router = express.Router();

router.get("/state", stataController.index);
router.get("/state/:state", stataController.showStateData);
router.get("/state/cancer/:state-:cancer", stataController.showCancerInState);

module.exports = router;
