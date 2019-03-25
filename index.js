const express = require("express");

//App setup

const app = express();

const server = app.listen(3000, function() {
    console.log("Listening at http://localhost:3000");
});

app.use(express.static("public"));