const { expressjwt: jwt } = require("express-jwt");
const { secret } = require("../../config.json");
console.log(secret);

function authorize(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }
  return [
    jwt({ secret, algorithms: ["HS256"] }),
    (req, res, next) => {
      if (roles.length && !roles.includes(req.auth.role)) {
        console.log(req.auth);
        return res.status(401).json({ message: "unauthorized" });
      }
      next();
    },
  ];
}

module.exports = authorize;
