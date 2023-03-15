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
  new_case_2023: SexSchema,
  estimated_deaths_2023: SexSchema,
  incidence_rates_2015_2019: SexSchema,
  death_rates_2016_2020: SexSchema,
  probability_of_developing_cancer_2017_2019: SexAndAgeSchema,
  probability_of_dying_from_cancer_2017_2019: SexAndAgeSchema,
  cancer_type: Schema.Types.Mixed,
});
module.exports = mongoose.model("Cancer", Cancer);
