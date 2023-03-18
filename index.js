const express = require("express");
const app = express();
const { state, cancer, user } = require("./routes");

app.use(express.json());

app.use(user);
app.use(state);
app.use(cancer);

app.listen(3000, () => {
  console.log("listening");
});
