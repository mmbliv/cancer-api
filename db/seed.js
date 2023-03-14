const Cancer = require("../models/Cancer.js");
const getAllCategory = require("../data/allCategoryData.js");
const newCase = require("../data/newCaseData.js");
const death = require("../data/death.js");
const incRate = require("../data/incRate.js");
const deathRate = require("../data/deathRate.js");

const data = [getAllCategory(), newCase, death, incRate, deathRate];
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
