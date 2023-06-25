const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const sequelize = require("./data/database");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

const editroute = require("./router/editroute");
const deleteroute = require("./router/deleteroute");

app.use(editroute);
app.use(deleteroute);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
