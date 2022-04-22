const path = require("path");
const express = require("express");
const fs = require("fs");
const http = require("https");

const PORT = process.env.PORT || 8080;

const app = express();

// app settings
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/update", (req, res) => {
   console.log(req.query);
   res.send({ message: "call was successful" });
});

app.get("/phones", (req, res) => {
   res.sendFile(path.join(__dirname, "/oneFormFixPhones.js"));
});

app.get("/walkins", (req, res) => {
   res.sendFile(path.join(__dirname, "/oneFormFixWalkIns.js"));
});

app.listen(PORT);
