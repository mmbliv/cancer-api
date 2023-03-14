const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const newCaseData = convertData(7, "sheet1");

const newCase = generateDocBasedOnsex(newCaseData, "new_case");
// console.log(newCase);
module.exports = newCase;
