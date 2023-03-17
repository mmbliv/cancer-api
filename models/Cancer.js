const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const SexSchema = new Schema({
  both_sexes: Number,
  female: Number,
  male: Number,
});

const SexAndAgeSchema = new Schema({
  both_sexes_combined_0_49_years: String,
  both_sexes_combined_50_59_years: String,
  both_sexes_combined_60_69_years: String,
  both_sexes_combined_70_plus_years: String,
  both_sexes_combined_all_age: String,
  female_0_49_years: String,
  female_50_59_years: String,
  female_60_69_years: String,
  female_70_plus_years: String,
  female_all_age: String,
  male_0_49_years: String,
  male_50_59_years: String,
  male_60_69_years: String,
  male_70_plus_years: String,
  male_all_age: String,
});

const Cancer = new Schema({
  category: [String],
  all_cancer_in_US: Schema.Types.Mixed,
  cancer_data: Schema.Types.Mixed,
});
module.exports = mongoose.model("Cancer", Cancer);
