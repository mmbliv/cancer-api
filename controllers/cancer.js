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
  getCancerCategory: async (req, res) => {
    const data = await Cancer.find({}).select("category");
    res.json(data);
  },
  getAllTypeData: async (req, res) => {
    const data = await Cancer.find({}).select("cancer_data");
    res.json(data);
  },
  getOneTypeData: async (req, res) => {
    const data = await Cancer.find(
      {},
      {
        cancer_data: {
          $elemMatch: {
            cancer_type: req.params.cancer,
          },
        },
      }
    );
    res.json(data);
  },
};
