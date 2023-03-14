const convertData = require("../utils/convertData.js");
const generateDataBasedOnSex = require("../utils/generateDataBasedOnSex.js");
const path = require("path");
const dataPath = path.join(__dirname, "DeathEstimates.xlsx");
const deathData = convertData(7, "sheet1", dataPath);

const death = generateDataBasedOnSex(deathData, "estimated_deaths_2023");
// console.log(death);
module.exports = death;
