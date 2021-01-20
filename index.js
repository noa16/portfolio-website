const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
//Connect Database
connectDB();
const PORT = process.env.PORT || 3000;

//Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("server started");
});

//Define Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/login", require("./routes/login"));
app.use("/api/contact", require("./routes/contact"));


app.listen(PORT, () => console.log("server started"));
