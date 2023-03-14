const convertData = require("../utils/convertData.js");
const path = require("path");
const dataPath = path.join(__dirname, "Prob_Dying.xlsx");
const proDevData = convertData(7, "sheet1", dataPath);
// console.log(proDevData);
function getProDyingData() {
  const data = {};
  data["both_sexes_combined_0_49_years"] = proDevData["All US"][0].B;
  data["both_sexes_combined_50_59_years"] = proDevData["All US"][0].C;
  data["both_sexes_combined_60_69_years"] = proDevData["All US"][0].D;
  data["both_sexes_combined_70_plus_years"] = proDevData["All US"][0].E;
  data["both_sexes_combined_all_age"] = proDevData["All US"][0].F;
  data["female_0_49_years"] = proDevData["All US"][0].G;
  data["female_50_59_years"] = proDevData["All US"][0].H;
  data["female_60_69_years"] = proDevData["All US"][0].I;
  data["female_70_plus_years"] = proDevData["All US"][0].J;
  data["female_all_age"] = proDevData["All US"][0].K;
  data["male_0_49_years"] = proDevData["All US"][0].L;
  data["male_50_59_years"] = proDevData["All US"][0].M;
  data["male_60_69_years"] = proDevData["All US"][0].N;
  data["male_70_plus_years"] = proDevData["All US"][0].O;
  data["male_all_age"] = proDevData["All US"][0].P;
  return {
    probability_of_dying_from_cancer_2017_2019: data,
  };
}
module.exports = getProDyingData();
