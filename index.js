const express = require("express");
const app = express();
const cors = require("cors");
const { state, cancer, user } = require("./routes");

app.use(cors());
app.use(express.json());

app.use(user);
app.use(state);
app.use(cancer);

app.listen(3000, () => {
  console.log("listening");
});
