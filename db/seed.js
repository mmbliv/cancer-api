const Cancer = require("../models/Cancer.js");
const getAllCategory = require("../data/allCategoryData.js");
const getNewCase = require("../data/newCaseData.js");

const data = [getAllCategory(), getNewCase()];
console.log(data);
//seed the data
Cancer.deleteMany({});
Cancer.collection
  .insertMany(data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//seed the new case of each cancer
