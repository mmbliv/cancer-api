const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const sexSchema = new Schema({
  both_sexes: Number,
  female: Number,
  male: Number,
});

const Cancer = new Schema({
  category: [String],
  new_case: sexSchema,
});
module.exports = mongoose.model("cancer", Cancer);
