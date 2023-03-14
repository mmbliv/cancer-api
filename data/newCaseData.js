const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const path = require("path");
const dataPath = path.join(__dirname, "NewCaseEstimates.xlsx");
const newCaseData = convertData(7, "sheet1", dataPath);

const newCase = generateDocBasedOnsex(newCaseData, "new_case_2023");

// console.log(newCase);
module.exports = newCase;
