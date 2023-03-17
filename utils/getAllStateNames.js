const convertData = require("../utils/convertData.js");
const replaceSpace = require("./replaceSpace.js");
const path = require("path");
const dataPath = path.join(__dirname, "..", "data", "NewCaseEstimates.xlsx");
// const dataPath2=path.join()
const { cancerSchema } = require("./getAllCancerType.js");
const deathData = convertData(8, "State", dataPath);
function getStates() {
  const result = deathData.State.map((d) => {
    return replaceSpace(d.A);
  });
  return result;
}

function getStateSchema() {
  const result = {};
  getStates().forEach((d) => {
    result[d] = cancerSchema;
  });
  return result;
}
// console.log(getStateSchema());
// console.log(getStateSchema());
module.exports = { allStates: getStates(), stateSchema: getStateSchema() };
