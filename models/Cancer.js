const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

// const SexSchema = new Schema({
//   both_sexes: Number,
//   female: Number,
//   male: Number,
// });

// const SexAndAgeSchema = new Schema({
//   both_sexes_combined_0_49_years: String,
//   both_sexes_combined_50_59_years: String,
//   both_sexes_combined_60_69_years: String,
//   both_sexes_combined_70_plus_years: String,
//   both_sexes_combined_all_age: String,
//   female_0_49_years: String,
//   female_50_59_years: String,
//   female_60_69_years: String,
//   female_70_plus_years: String,
//   female_all_age: String,
//   male_0_49_years: String,
//   male_50_59_years: String,
//   male_60_69_years: String,
//   male_70_plus_years: String,
//   male_all_age: String,
// });

const Cancer = new Schema({
  // category: [String],
  // all_cancer_in_US: Schema.Types.Mixed,
  // cancer_data: Schema.Types.Mixed,
  cancer_type: String,
  new_case_2023: Schema.Types.Mixed,
  estimated_deaths_2023: Schema.Types.Mixed,
  incidence_rates_2015_2019: Schema.Types.Mixed,
  death_rates_2016_2020: Schema.Types.Mixed,
  probability_of_developing_cancer_2017_2019: Schema.Types.Mixed,
  probability_of_dying_from_cancer_2017_2019: Schema.Types.Mixed,
  survival_2012_2018_5_year: Schema.Types.Mixed,
});
module.exports = mongoose.model("Cancer", Cancer);
