const convertData = require("../utils/convertData.js");
const generateDocBasedOnsex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType.js");
const path = require("path");
const dataPath = path.join(__dirname, "NewCaseEstimates.xlsx");
const newCaseData = convertData(7, "All US", dataPath);
const newCaseData2 = convertData(8, "All US", dataPath);

const newCase1 = generateDocBasedOnsex(newCaseData, "new_case_2023");
const newCase2 = generateDataBasedOnCancerType(newCaseData2["All US"]);

// console.log(newCase2);
module.exports = { newCase1, newCase2 };
