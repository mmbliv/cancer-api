const User = require("../models/User.js");
const generateDataBasedOnCancerType = require("../utils/generateDataBasedOnCancerType.js");

module.exports = {
  signup: async (req, res) => {
    const data = await User.create(req.body);
    res.json(data);
  },
};
