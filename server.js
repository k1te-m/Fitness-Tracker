// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");

// Port Set-up
const PORT = process.env.PORT || 3000;

// Express Set-up
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(routes);
app.use(apiRoutes);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
