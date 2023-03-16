const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType");
const generateDataForEachState = require("../utils/generateDataForEachState.js");
const path = require("path");
const dataPath = path.join(__dirname, "DeathEstimates.xlsx");
const deathData1 = convertData(7, "All US", dataPath);
const deathData2 = convertData(8, "All US", dataPath);
const deathData3 = convertData(7, "State", dataPath, true);
// console.log(deathData1);

// function getDataFromEachCancer() {
//   const result = {};
//   let tempkey;
//   deathData3.State.forEach((d, i) => {
//     if (i > 0) {
//       for (let j in d) {
//         if (j === "State") {
//           //   result[j] = {};
//           tempkey = d[j];
//         } else {
//           const key = replaceSpace(j);
//           result[tempkey] = { [key]: { estimated_deaths_2023: d.j } };
//         }
//       }
//     }
//   });
//   return result;
// }

// console.log(getDataFromEachCancer());
// console.log(deathData3);
const death1 = generateDataBasedOnSex(deathData1, "estimated_deaths_2023");
const death2 = generateDataBasedOnCancerType(deathData2["All US"]);
const death3 = generateDataForEachState(deathData3.State);
console.log(death3);

module.exports = { death1, death2 };
