const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const path = require("path");
const dataPath = path.join(__dirname, "SurvivalByStage.xlsx");
const survivalData = convertData(7, "sheet1", dataPath);
// console.log(survivalData);
function getSurvivalData() {
  const result = survivalData["All US"].map((d) => {
    const singleData = {
      all_stages_combined: d.B,
      distant: d.C,
      in_situ: d.D,
      localized: d.E,
      regional: d.F,
    };
    const key = replaceSpace(d.A);
    return { [key]: singleData };
  });
  return result;
}
// console.log(getSurvivalData());
module.exports = getSurvivalData();
