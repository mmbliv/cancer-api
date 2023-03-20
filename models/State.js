const mongoose = require("../db/connection.js");
// const { stateSchema } = require("../utils/getAllStateNames.js");
const { stateSchema } = require("../utils/getAllCancerType.js");
const Schema = mongoose.Schema;
const State = new Schema({
  state: String,
  cancer_type: String,
  estimated_deaths_2023: String,
  new_case_2023: String,
});
// State.add(stateSchema);
// console.dir(State);
module.exports = mongoose.model("State", State);
// console.log(stateSchema);
