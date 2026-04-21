const express = require('express');
const app = express();

const authroutes = require("./routes/auth.routes");
app.use("/api/auth", authroutes);

app.use(express.json());

const cors = require("cors");
app.use(cors());


module.exports = app;
