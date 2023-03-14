const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cancer = new Schema({
  category: [String],
});
module.exports = mongoose.model("cancer", Cancer);
