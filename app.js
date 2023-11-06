const path = require("path");

const express = require("express");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(authRoutes);

 const port = process.env.Port || 3000
app.listen(port);
