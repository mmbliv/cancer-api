const Cancer = require("../models/Cancer.js");
const State = require("../models/State.js");
const allCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");
const proDev = require("../data/probDevCancer.js");
const proDying = require("../data/proDying.js");
const CancerClass = require("../utils/generateDataForEachCancer.js");

const newCancer = new CancerClass();
const dataForEachCancer = newCancer
  .generateData(newCase.newCase2, "new_case_2023")
  .generateData(death.death2, "estimated_deaths_2023")
  .generateData(incRate.incRate2, "incidence_rates_2015_2019")
  .generateData(deathRate.deathRate2, "death_rates_2016_2020")
  .generateData(proDev.proDev2, "probability_of_developing_cancer_2017_2019")
  .generateData(
    proDying.proDying2,
    "probability_of_dying_from_cancer_2017_2019"
  )
  .fillEmptyCategory();
// console.log(newCase.newCase3);
// console.log(Object.keys(dataForEachCancer).length);
const stateData = { ...death.death3 };
// console.log(stateData);
for (let i in newCase.newCase3) {
  for (let j in newCase.newCase3[i]) {
    // console.log(j);
    stateData[i][j] = { ...stateData[i][j], ...newCase.newCase3[i][j] };
  }
}
// console.log(stateData);
const data = [
  {
    category: allCategory.category,
    new_case_2023: newCase.newCase1.new_case_2023,
    estimated_deaths_2023: death.death1.estimated_deaths_2023,
    incidence_rates_2015_2019: incRate.incRate1.incidence_rates_2015_2019,
    death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
    probability_of_developing_cancer_2017_2019:
      proDev.proDev1.probability_of_developing_cancer_2017_2019,
    probability_of_dying_from_cancer_2017_2019:
      proDying.proDying1.probability_of_dying_from_cancer_2017_2019,
    cancer_type: dataForEachCancer,
  },
];
// console.log(death.death1);
//seed the data
async function seedData() {
  try {
    await Cancer.deleteMany({});
    await State.deleteMany({});
    await Cancer.create(data);
    await State.create(stateData);
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

seedData();
