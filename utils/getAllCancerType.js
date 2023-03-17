const convertData = require("../utils/convertData.js");
const path = require("path");
const replaceSpace = require("./replaceSpace.js");
const dataPath = path.join(__dirname, "..", "data", "NewCaseEstimates.xlsx");
const deathData = convertData(8, "All US", dataPath);
// console.log(deathData);
function getCancerType() {
  const result = deathData["All US"].map((d) => {
    return replaceSpace(d.A);
  });
  return result;
}

function getCancerSchema() {
  const result = {};
  getCancerType().forEach((d) => {
    result[d] = {
      estimated_deaths_2023: {
        type: "String",
      },
      new_case_2023: {
        type: "String",
      },
    };
    result["All_cancer_types_combined"] = {
      estimated_deaths_2023: {
        type: "String",
      },
      new_case_2023: {
        type: "String",
      },
    };
    result.state = "String";
  });
  return result;
}
// console.log(getCancerSchema());
module.exports = {
  allCancerType: getCancerType(),
  stateSchema: getCancerSchema(),
};
