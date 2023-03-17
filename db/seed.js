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
// const stateData = { ...death.death3 };
const stateDeathData = [];
// console.log(newCase.newCase3);
for (let i in death.death3) {
  const data = {};
  data.state = i;
  for (let j in death.death3[i]) {
    data[j] = death.death3[i][j];
  }
  stateDeathData.push(data);
}
const stateNewCaseData = [];
for (let i in newCase.newCase3) {
  const data = {};
  data.state = i;
  for (let j in newCase.newCase3[i]) {
    data[j] = newCase.newCase3[i][j];
  }
  stateNewCaseData.push(data);
}

const combinedArray = stateDeathData.map((obj1) => {
  const obj2 = stateNewCaseData.find((obj2) => obj2.state === obj1.state);
  const combinedData = {};
  for (const key of Object.keys(obj1)) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (
      value1 &&
      typeof value1 === "object" &&
      value2 &&
      typeof value2 === "object"
    ) {
      // If both values are objects, merge them if they have the same keys
      const combinedValue = {};
      const allKeys = [
        ...new Set([...Object.keys(value1), ...Object.keys(value2)]),
      ];
      for (const k of allKeys) {
        const v1 = value1[k];
        const v2 = value2[k];
        if (v1 !== undefined && v2 !== undefined) {
          combinedValue[k] = { ...v1, ...v2 };
        } else if (v1 !== undefined) {
          combinedValue[k] = v1;
        } else if (v2 !== undefined) {
          combinedValue[k] = v2;
        }
      }
      combinedData[key] = combinedValue;
    } else {
      combinedData[key] = value1 !== undefined ? value1 : value2;
    }
  }
  return {
    state: obj1.state,
    ...combinedData,
  };
});
// console.log(combinedArray);

const data = [
  {
    category: allCategory.category,
    all_cancer_in_US: {
      new_case_2023: newCase.newCase1.new_case_2023,
      estimated_deaths_2023: death.death1.estimated_deaths_2023,
      incidence_rates_2015_2019: incRate.incRate1.incidence_rates_2015_2019,
      death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
      probability_of_developing_cancer_2017_2019:
        proDev.proDev1.probability_of_developing_cancer_2017_2019,
      probability_of_dying_from_cancer_2017_2019:
        proDying.proDying1.probability_of_dying_from_cancer_2017_2019,
    },
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
    await State.create(combinedArray);
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

seedData();
