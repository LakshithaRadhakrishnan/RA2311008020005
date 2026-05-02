const express = require("express");
const Log = require("../logging_middleware/logger");

const app = express();

app.get("/", (req, res) => {
  Log("backend", "info", "route", "API called");
  res.send("Server running");
});

app.listen(3000, () => {
  Log("backend", "info", "service", "Server started");
});