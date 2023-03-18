const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType");
const generateDataForEachState = require("../utils/generateDataForEachState.js");
const path = require("path");
const dataPath = path.join(__dirname, "DeathEstimates.xlsx");
const deathData1 = convertData(7, "All US", dataPath);
// const deathData2 = convertData(8, "All US", dataPath);
const deathData3 = convertData(7, "State", dataPath, true);

const death1 = generateDataBasedOnSex(deathData1, "estimated_deaths_2023");
const death2 = generateDataBasedOnCancerType(deathData1["All US"]);
const death3 = generateDataForEachState(
  deathData3.State,
  "estimated_deaths_2023"
);
// console.log(death3);

module.exports = { death1, death2, death3 };
