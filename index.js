const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello From my First Server with Express JS!");
});

app.get("/data", (req, res) => {
  console.log("Data is Loading...........");
  res.send("Data is Loading...........");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
