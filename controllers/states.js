const { trusted } = require("mongoose");
const State = require("../models/State");

module.exports = {
  index: (req, res) => {
    State.find({}).then((d) => {
      res.json(d);
    });
  },
  showStateData: (req, res) => {
    State.find({})
      .select(req.params.state)
      .then((d) => {
        // console.log(d);
        res.json(d);
      });
  },
  showCancerInState: async (req, res) => {
    const data = await State.find({}).select(req.params.state);
    const result = data[0][req.params.state][req.params.cancer];
    res.json(result);
  },
  create: async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const data = await State.find({}).select(req.params.state);
    const result = {
      ...req.body,
      ...data[0][req.params.state][req.params.cancer],
    };
    res.json(result);
  },
};
