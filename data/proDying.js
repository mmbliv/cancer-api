const convertData = require("../utils/convertData.js");
const replaceSpace = require("../utils/replaceSpace.js");
const path = require("path");
const dataPath = path.join(__dirname, "Prob_Dying.xlsx");
const proDyingData = convertData(7, "sheet1", dataPath);
const proDyingData2 = convertData(8, "sheet1", dataPath);
// console.log(proDevData);
function getProDyingData() {
  const data = {};
  data["both_sexes_combined_0_49_years"] = proDyingData["All US"][0].B;
  data["both_sexes_combined_50_59_years"] = proDyingData["All US"][0].C;
  data["both_sexes_combined_60_69_years"] = proDyingData["All US"][0].D;
  data["both_sexes_combined_70_plus_years"] = proDyingData["All US"][0].E;
  data["both_sexes_combined_all_age"] = proDyingData["All US"][0].F;
  data["female_0_49_years"] = proDyingData["All US"][0].G;
  data["female_50_59_years"] = proDyingData["All US"][0].H;
  data["female_60_69_years"] = proDyingData["All US"][0].I;
  data["female_70_plus_years"] = proDyingData["All US"][0].J;
  data["female_all_age"] = proDyingData["All US"][0].K;
  data["male_0_49_years"] = proDyingData["All US"][0].L;
  data["male_50_59_years"] = proDyingData["All US"][0].M;
  data["male_60_69_years"] = proDyingData["All US"][0].N;
  data["male_70_plus_years"] = proDyingData["All US"][0].O;
  data["male_all_age"] = proDyingData["All US"][0].P;
  return {
    probability_of_dying_from_cancer_2017_2019: data,
  };
}

function getProDyingData2() {
  const result = proDyingData2["All US"].map((d) => {
    const data = {};
    const key = replaceSpace(d.A);
    data["both_sexes_combined_0_49_years"] = d.B;
    data["both_sexes_combined_50_59_years"] = d.C;
    data["both_sexes_combined_60_69_years"] = d.D;
    data["both_sexes_combined_70_plus_years"] = d.E;
    data["both_sexes_combined_all_age"] = d.F;
    data["female_0_49_years"] = d.G;
    data["female_50_59_years"] = d.H;
    data["female_60_69_years"] = d.I;
    data["female_70_plus_years"] = d.J;
    data["female_all_age"] = d.K;
    data["male_0_49_years"] = d.L;
    data["male_50_59_years"] = d.M;
    data["male_60_69_years"] = d.N;
    data["male_70_plus_years"] = d.O;
    data["male_all_age"] = d.P;
    return { [key]: data };
  });
  return result;
}

// console.log(getProDyingData2());
module.exports = {
  proDying1: getProDyingData(),
  proDying2: getProDyingData2(),
};
