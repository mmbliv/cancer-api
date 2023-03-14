const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cancer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose;
