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
      death_rates_2016_2020: "String",
      incidence_rates_2015_2019: "String",
      estimated_deaths_2023: "Number",
      new_case_2023: "Number",
    };
    result["All_cancer"] = {
      death_rates_2016_2020: "String",
      incidence_rates_2015_2019: "String",
      estimated_deaths_2023: "Number",
      new_case_2023: "Number",
    };
  });
  return result;
}
// console.log(getCancerSchema());
module.exports = {
  allCancerType: getCancerType(),
  cancerSchema: getCancerSchema(),
};
