const Cancer = require("../models/Cancer.js");

module.exports = {
  index: (req, res) => {
    Cancer.find({}).then((d) => {
      res.json(d);
    });
  },
  getUsData: async (req, res) => {
    const data = await Cancer.find({}).select("all_cancer_in_US");
    res.json(data);
  },
};
