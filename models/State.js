const mongoose = require("../db/connection.js");
// const { stateSchema } = require("../utils/getAllStateNames.js");
const { stateSchema } = require("../utils/getAllCancerType.js");
const Schema = mongoose.Schema;
const State = new Schema(stateSchema);
// State.add(stateSchema);
// console.dir(State);
module.exports = mongoose.model("State", State);
