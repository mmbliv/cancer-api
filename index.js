const express = require("express");
const app = express();
const { state } = require("./routes");

app.use(express.json());

app.use(state);

app.listen(3000, () => {
  console.log("listening");
});
