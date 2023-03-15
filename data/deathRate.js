const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType.js");
const path = require("path");
const dataPath = path.join(__dirname, "DeathRate.xlsx");
// console.log(dataPath);
const deathRateData = convertData(7, "sheet1", dataPath);
const deathRateData2 = convertData(8, "sheet1", dataPath);

const deathRate1 = generateDocBasedOnsex(
  deathRateData,
  "death_rates_2016_2020"
);
// console.log(deathRateData2);
const deathRate2 = generateDataBasedOnCancerType(deathRateData2["All US"]);
// console.log(deathRate2);

// console.log(deathRate);
module.exports = { deathRate1, deathRate2 };
