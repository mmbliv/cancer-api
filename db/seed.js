const Cancer = require("../models/Cancer.js");
const getAllCategory = require("../data/allCategoryData.js");

// console.log(getAllCategory());
Cancer.removeAllListeners({});
Cancer.collection
  .insertMany(getAllCategory())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
