const Cancer = require("../models/Cancer.js");
const getAllCategory = require("../data/allCategoryData.js");
const getNewCase = require("../data/newCaseData.js");

const data = [getAllCategory(), getNewCase()];
// console.log(JSON.stringify(data));
//seed the data
async function seedData() {
  await Cancer.deleteMany({});
  Cancer.collection
    .insertMany(data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

seedData();
