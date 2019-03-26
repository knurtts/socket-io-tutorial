const express = require("express");
const socket = require("socket.io");

//App setup

const app = express();

const server = app.listen(3000, function() {
    console.log("Listening at http://localhost:3000");
});

app.use(express.static("public"));

//socket setup
const io = socket(server);

io.on("connection", (socket) => {
        console.log("socket connection made", socket.id);

        socket.on("chat", (data) => {
            io.sockets.emit("chat", data);
        });

        socket.on("typing", (data) => {
            socket.broadcast.emit("typing", data);
        });
    });