const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const path = require("path");
const dataPath = path.join(__dirname, "NewCaseEstimates.xlsx");
const newCaseData = convertData(8, "All US", dataPath);
// get all type of cancer
function getAllCategory() {
  const data = newCaseData["All US"].map((d) => {
    return replaceSpace(d.A);
  });
  return { category: data };
}
// console.log(getAllCategory().category.length);
module.exports = getAllCategory();
