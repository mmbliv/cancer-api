const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType.js");
const path = require("path");
const dataPath = path.join(__dirname, "IncRate.xlsx");
const incRateData = convertData(7, "All US", dataPath);
// const incRateData2 = convertData(8, "All US", dataPath);

const incRate1 = generateDocBasedOnsex(
  incRateData,
  "incidence_rates_2015_2019"
);
const incRate2 = generateDataBasedOnCancerType(incRateData["All US"]);
// console.log(incRate2);
module.exports = { incRate1, incRate2 };
