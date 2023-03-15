const Cancer = require("../models/Cancer.js");
const allCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");
const proDev = require("../data/probDevCancer.js");
const proDying = require("../data/proDying.js");
const CancerClass = require("../utils/generateDataForEachCancer.js");

const newCancer = new CancerClass(newCase.newCase2, "new_case");
console.log(newCancer.generateData());

// console.log(newCase.newCase2);
// const dataForEachCancer = {};
// function generateDataForEachCancer() {
//   newCase.newCase2.forEach((d) => {
//     const key = Object.entries(d)[0][0];
//     const value = Object.entries(d)[0][1];
//     if (!dataForEachCancer[key] || !dataForEachCancer[key].new_case) {
//       dataForEachCancer[key] = { new_case: value };
//     }
//   });
// }
// generateDataForEachCancer();
// console.log(dataForEachCancer);

const data = [
  {
    category: allCategory.category,
    new_case_2023: newCase.newCase1.new_case_2023,
    death_rates_2016_2020: death.death1.death_rates_2016_2020,
    incidence_rates_2015_2019: incRate.incRate1.incidence_rates_2015_2019,
    death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
    probability_of_developing_cancer_2017_2019:
      proDev.proDev1.probability_of_developing_cancer_2017_2019,
    probability_of_dying_from_cancer_2017_2019:
      proDying.proDying1.probability_of_dying_from_cancer_2017_2019,
  },
];
// console.log(data);
//seed the data
async function seedData() {
  try {
    await Cancer.deleteMany({});
    await Cancer.create(data);
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

seedData();
