const User = require("../models/User.js");
const userService = require("../utils/user/service.js");

module.exports = {
  signup: async (req, res) => {
    console.log("ji");
    try {
      await User.create(req.body);
      res.json({ message: "signup successfully" });
    } catch (err) {
      res.json({ message: err.message });
    }
  },
  authenticate: async (req, res) => {
    console.log("hu");
    const user = await userService.authenticate(req.body);
    if (user) {
      res.json({ token: user.token });
    } else {
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  },
};
