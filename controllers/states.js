const State = require("../models/State");

module.exports = {
  index: (req, res) => {
    State.find({}).then((d) => {
      res.json(d);
    });
  },
  showStateData: (req, res) => {
    State.find({})
      .select(req.params.name)
      .then((d) => {
        // console.log(d);
        res.json(d);
      });
  },
    showCancerInState:(req,res)=>{
      State.find().
    }
};
