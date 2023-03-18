const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;
const AllUS = new Schema({});
module.exports = mongoose.model("AllUS", AllUS);
