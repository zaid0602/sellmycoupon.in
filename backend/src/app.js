const express = require('express');
const app = express();
const authRoutes = require("./routes/auth.routes");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use(express.json());

const cors = require("cors");
app.use(cors());


module.exports = app;
