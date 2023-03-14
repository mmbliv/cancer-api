const Cancer = require("../models/Cancer.js");
const allCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");
const proDev = require("../data/probDevCancer.js");
const proDying = require("../data/proDying.js");

const data = [
  allCategory,
  newCase,
  death,
  incRate,
  deathRate,
  proDev,
  proDying,
];
// console.log(data);
//seed the data
async function seedData() {
  await Cancer.deleteMany({});
  Cancer.collection
    .insertMany(data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

seedData();
