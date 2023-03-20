const State = require("../models/State");

module.exports = {
  index: (req, res) => {
    State.find({}).then((d) => {
      res.json(d);
    });
  },
  showStateData: (req, res) => {
    State.find({ state: req.params.state }).then((d) => {
      res.json(d);
    });
  },
  showCancerInState: async (req, res) => {
    console.log(req.query);
    const data = await State.find({
      state: req.query.state,
      cancer_type: req.query.cancer_type,
    });
    res.json(data);
  },

  updata: async (req, res) => {
    const data = await State.findOneAndUpdate(
      { state: req.params.state, cancer_type: req.params.cancer_type },
      req.body
    );
    // const cancerData = await State.find({ state: req.params.state }).select(
    //   req.params.cancer
    // );
    // const data = await State.findOneAndUpdate(
    //   { state: req.params.state },
    //   {
    //     [`${req.params.cancer}`]: {
    //       ...cancerData[0][req.params.cancer],
    //       ...req.body,
    //     },
    //   }
    // ).exec();
    res.json(data);
  },
  create: async (req, res) => {
    const data = await State.create(req.body);
    // const cancerData = await State.find({ state: req.params.state }).select(
    //   req.params.cancer
    // );
    // const data = await State.findOneAndUpdate(
    //   { state: req.params.state },
    //   {
    //     [`${req.params.cancer}`]: {
    //       ...cancerData[0][req.params.cancer],
    //       ...req.body,
    //     },
    //   },
    //   { new: true }
    // ).exec();
    res.json(data);
  },
};
