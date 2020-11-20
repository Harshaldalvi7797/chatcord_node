/** @format */

const express = require("express");
const path = require("path");
const app = express();

const socketio = require("socket.io");
let http = require("http");

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
//set static folder
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", socket => {
  console.log("new connection");
  // socket.emit("message", "welcome")
});

app.listen(PORT, () => {
  console.log(`connected on ${PORT}`);
});