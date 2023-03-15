const Cancer = require("../models/Cancer.js");
const allCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");
const proDev = require("../data/probDevCancer.js");
const proDying = require("../data/proDying.js");
// const death2 = require("../data/death.js");

// console.log(Cancer);

const data = [
  {
    category: allCategory.category,
    new_case_2023: newCase.new_case_2023,
    death_rates_2016_2020: death.death1.death_rates_2016_2020,
    incidence_rates_2015_2019: incRate.incidence_rates_2015_2019,
    death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
    probability_of_developing_cancer_2017_2019:
      proDev.probability_of_developing_cancer_2017_2019,
    probability_of_dying_from_cancer_2017_2019:
      proDying.probability_of_dying_from_cancer_2017_2019,
  },
];
console.log(data);
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
