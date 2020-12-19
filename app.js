// MODULES
const express = require("express");
const bodyParser = require("body-parser");

// APP CONFIG
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.set("view engine", "ejs");

// ROUTES
app.get("/", (req, res) => {
    res.render("home");
});


app.listen(3000, () => {
    console.log("SERVER STARTED");
});