const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const Cancer = new Schema({
  category: [String],
  new_case: {
    all_cancer: { both_sexes: Number, female: Number, male: Number },
    cancer_type: {},
  },
});
module.exports = mongoose.model("cancer", Cancer);
