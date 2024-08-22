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

app.get("/priceOptions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id: ", id);
  const option = options.find((option) => option.id === id) || {};
  res.send(option);
});

app.listen(port, () => {
  console.log(`My Price Options server is running on port: ${port}`);
});
