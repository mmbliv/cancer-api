const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const newCaseData = convertData(8, "sheet1");

// get all type of cancer
function getAllCategory() {
  const data = newCaseData["All US"].map((d) => {
    return replaceSpace(d.A);
  });
  return { category: data };
}

module.exports = getAllCategory;
