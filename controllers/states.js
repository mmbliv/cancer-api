const State = require("../models/State");

module.exports = {
  index: (req, res) => {
    // console.log("hu");
    State.find({}).then((d) => {
      console.log(d);
      res.json(d);
    });
  },
  showStateData: (req, res) => {
    State.find({ state: req.params.state }).then((d) => {
      // console.log(d);
      res.json(d);
    });
  },
  showCancerInState: async (req, res) => {
    const data = await State.find({
      state: req.params.state,
      cancer_type: req.params.cancer_type,
    });
    // console.log(data);
    // const result = data[0][req.params.state][req.params.cancer];
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
