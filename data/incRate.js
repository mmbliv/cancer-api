const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const incRateData = convertData(7, "sheet1");

const incRate = generateDocBasedOnsex(incRateData, "incidence_rates_2015_2019");
// console.log(newCase);
module.exports = incRate;
