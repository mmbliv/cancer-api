const Cancer = require("../models/Cancer.js");
const State = require("../models/State.js");
// const User = require("../models/User.js");
const allCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");
const proDev = require("../data/probDevCancer.js");
const proDying = require("../data/proDying.js");
const survival = require("../data/survival.js");
const CancerClass = require("../utils/generateDataForEachCancer.js");
// console.log(newCase.newCase2);

const newCancer = new CancerClass();
const dataForEachCancer = newCancer
  .generateData(newCase.newCase2, "new_case_2023")
  .generateData(death.death2, "estimated_deaths_2023")
  .generateData(incRate.incRate2, "incidence_rates_2015_2019")
  .generateData(deathRate.deathRate2, "death_rates_2016_2020")
  .generateData(proDev.proDev2, "probability_of_developing_cancer_2017_2019")
  .generateData(survival, "survival_2012_2018_5_year")
  .generateData(
    proDying.proDying2,
    "probability_of_dying_from_cancer_2017_2019"
  )
  .fillEmptyCategory()
  .makeNameAsKeyValue();
// console.log(dataForEachCancer);

const stateDeathData = [];
// console.log(newCase.newCase3);
for (let i in death.death3) {
  // let data = {};
  // data.state = i;
  for (let j in death.death3[i]) {
    let data = {};
    data.state = i;
    data.cancer_type = j;
    // data[j] = death.death3[i][j];
    data = { ...data, ...death.death3[i][j] };
    stateDeathData.push(data);
  }
  // stateDeathData.push(data);
}
const stateNewCaseData = [];
for (let i in newCase.newCase3) {
  // let data = {};
  // data.state = i;
  for (let j in newCase.newCase3[i]) {
    // data[j] = newCase.newCase3[i][j];
    let data = {};
    data.state = i;
    data.cancer_type = j;
    data = { ...data, ...newCase.newCase3[i][j] };
    stateNewCaseData.push(data);
  }
  // stateNewCaseData.push(data);
}
// console.log(stateNewCaseData);
const stateData = [];
for (let i of stateDeathData) {
  let data = {};
  for (let j of stateNewCaseData) {
    // console.log(j);
    if (j.state === i.state && j.cancer_type === i.cancer_type) {
      data = { ...i, ...j };
    }
  }
  stateData.push(data);
}
// console.log(stateDeathData);
// console.log(stateData);
// console.log(stateDeathData);
// const combinedArray = stateDeathData.map((obj1) => {
//   const obj2 = stateNewCaseData.find((obj2) => obj2.state === obj1.state);
//   const combinedData = {};
//   for (const key of Object.keys(obj1)) {
//     const value1 = obj1[key];
//     const value2 = obj2[key];
//     if (
//       value1 &&
//       typeof value1 === "object" &&
//       value2 &&
//       typeof value2 === "object"
//     ) {
//       const combinedValue = {};
//       const allKeys = [
//         ...new Set([...Object.keys(value1), ...Object.keys(value2)]),
//       ];
//       for (const k of allKeys) {
//         const v1 = value1[k];
//         const v2 = value2[k];
//         if (v1 !== undefined && v2 !== undefined) {
//           combinedValue[k] = { ...v1, ...v2 };
//         } else if (v1 !== undefined) {
//           combinedValue[k] = v1;
//         } else if (v2 !== undefined) {
//           combinedValue[k] = v2;
//         }
//       }
//       combinedData[key] = combinedValue;
//     } else {
//       combinedData[key] = value1 !== undefined ? value1 : value2;
//     }
//   }
//   return {
//     state: obj1.state,
//     ...combinedData,
//   };
// });
// console.log(combinedArray);

// const data = [
//   {
//     category: allCategory.category,
//     all_cancer_in_US: {
//       new_case_2023: newCase.newCase1.new_case_2023,
//       estimated_deaths_2023: death.death1.estimated_deaths_2023,
//       incidence_rates_2015_2019: incRate.incRate1.incidence_rates_2015_2019,
//       death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
//       probability_of_developing_cancer_2017_2019:
//         proDev.proDev1.probability_of_developing_cancer_2017_2019,
//       probability_of_dying_from_cancer_2017_2019:
//         proDying.proDying1.probability_of_dying_from_cancer_2017_2019,
//     },
//     cancer_data: dataForEachCancer,
//   },
// ];

// console.log(dataForEachCancer);
// const allUSData = [
//   {
//     category: allCategory.category,
//     all_cancer_in_US: {
//       new_case_2023: newCase.newCase1.new_case_2023,
//       estimated_deaths_2023: death.death1.estimated_deaths_2023,
//       incidence_rates_2015_2019: incRate.incRate1.incidence_rates_2015_2019,
//       death_rates_2016_2020: deathRate.deathRate1.death_rates_2016_2020,
//       probability_of_developing_cancer_2017_2019:
//         proDev.proDev1.probability_of_developing_cancer_2017_2019,
//       probability_of_dying_from_cancer_2017_2019:
//         proDying.proDying1.probability_of_dying_from_cancer_2017_2019,
//     },
//   },
// ];
// console.log(death.death1);

// seed the data
async function seedData() {
  try {
    // await User.deleteMany({});
    await Cancer.deleteMany({});
    await State.deleteMany({});
    await Cancer.create(dataForEachCancer);
    await State.create(stateData);
  } catch (err) {
    console.log(err);
  }

  process.exit();
}

seedData();
