const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const deathRateData = convertData(7, "sheet1");

const deathRate = generateDocBasedOnsex(deathRateData, "death_rates_2016_2020");
// console.log(newCase);
module.exports = deathRate;
