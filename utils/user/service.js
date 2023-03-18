const jwt = require("jsonwebtoken");
const config = require("../../config.json");
const User = require("../../models/User.js");

async function authenticate(userInfo) {
  const users = await User.find();
  const user = users.find(
    (u) => u.name === userInfo.name && u.password === userInfo.password
  );
  if (user) {
    const token = jwt.sign({ name: user.name, role: user.role }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token,
    };
  }
}
// authenticate();
module.exports = { authenticate };
