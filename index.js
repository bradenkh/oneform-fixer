const path = require("path");
const express = require("express");
const fs = require("fs");
const Server = require("http");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/phones", (req, res) => {
   res.sendFile(path.join(__dirname, "/oneFormFixPhones.js"));
});

app.get("/walkins", (req, res) => {
   res.sendFile(path.join(__dirname, "/oneFormFixWalkIns.js"));
});

app.listen(PORT);
