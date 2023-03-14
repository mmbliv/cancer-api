const convertData = require("../utils/convertData.js");
const newCaseData = convertData(7, "sheet1");
const replaceSpace = require("../utils/replaceSpace.js");
// console.log(newCaseData);
// get all type of cancer
function getNewCase() {
  let bothSex;
  let female;
  let male;
  const dataOfDifferentType = {};
  newCaseData["All US"].forEach((d, i) => {
    if (i === 0) {
      bothSex = d.B;
      female = d.C;
      male = d.D;
    } else {
      dataOfDifferentType[replaceSpace(d.A)] = {
        both_sexes_combined: d.B,
        female: d.C,
        male: d.D,
      };
    }
  });
  return {
    new_case: [
      {
        all_cancer: {
          both_sexes_combined: bothSex,
          female: female,
          male: male,
        },
        cancer_type: dataOfDifferentType,
      },
    ],
  };
}
// console.log(getNewCase().new_case);
module.exports = getNewCase;
