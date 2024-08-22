const express = require("express");
const cors = require("cors");
const options = require("./priceOptions.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("My Price Options with sooo many takaaa .");
});

app.get("/priceOptions", (req, res) => {
  res.send(options);
});


app.listen(port, () => {
  console.log(`My Price Options server is running on port: ${port}`);
});
