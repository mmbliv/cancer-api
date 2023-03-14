const convertData = require("../utils/convertData.js");
const newCaseData = convertData(8, "sheet1");

// get all type of cancer
function getAllCategory() {
  const data = newCaseData["All US"].map((d) => {
    return d.A;
  });
  return [{ category: data }];
}

module.exports = getAllCategory;
