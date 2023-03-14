const convertData = require("../utils/convertData.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const deathData = convertData(7, "sheet1");

const death = generateDataBasedOnSex(deathData, "estimated_death");
module.exports = death;
