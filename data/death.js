const convertData = require("../utils/convertData.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType");
const path = require("path");
const dataPath = path.join(__dirname, "DeathEstimates.xlsx");
const deathData1 = convertData(7, "sheet1", dataPath);
const deathData2 = convertData(8, "sheet1", dataPath);
// console.log(deathData2);

const death1 = generateDataBasedOnSex(deathData1, "estimated_deaths_2023");
const death2 = generateDataBasedOnCancerType(deathData2["All US"]);
// console.log(death2);
module.exports = { death1, death2 };
