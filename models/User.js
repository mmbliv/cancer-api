const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "user"] },
  //   id: Number,
});
module.exports = mongoose.model("User", UserSchema);
