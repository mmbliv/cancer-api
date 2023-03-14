const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const path = require("path");
const dataPath = path.join(__dirname, "DeathRate.xlsx");
// console.log(dataPath);
const deathRateData = convertData(7, "sheet1", dataPath);

const deathRate = generateDocBasedOnsex(deathRateData, "death_rates_2016_2020");
// console.log(deathRate);
module.exports = deathRate;
