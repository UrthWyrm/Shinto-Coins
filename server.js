// Imports Go Here ///////////////////////////////////////////////////////////////
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

// Configurations Go Here ////////////////////////////////////////////////////////
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database Goes Here ////////////////////////////////////////////////////////////
mongoose.connect("mongodb://localhost/shinto-coins");
// require("./server/config/mongoose.js");

// Routes Go Here ////////////////////////////////////////////////////////////////
require("./server/config/routes.js")(app);
// 

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// Port Goes Here /////////////////////////////////////////////////////////////////
app.listen(8000, function() {
    console.log("Listening on port: 8000");
})