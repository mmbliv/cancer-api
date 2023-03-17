const Cancer = require("../models/Cancer.js");

module.exports = {
  index: (req, res) => {
    Cancer.find({}).then((d) => {
      res.json(d);
    });
  },
};
