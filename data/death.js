const convertData = require("../utils/convertData.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType");
const path = require("path");
const dataPath = path.join(__dirname, "DeathEstimates.xlsx");
const deathData1 = convertData(7, "All US", dataPath);
const deathData2 = convertData(8, "All US", dataPath);
const deathData3 = convertData(8, "State", dataPath);
console.log(deathData3, "@@@@@@@@");

const death1 = generateDataBasedOnSex(deathData1, "estimated_deaths_2023");
const death2 = generateDataBasedOnCancerType(deathData2["All US"]);
// console.log(death2);
module.exports = { death1, death2 };
