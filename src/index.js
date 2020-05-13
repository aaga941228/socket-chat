const express = require("express");
const SocketIo = require("socket.io");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, "../public")));

const server = app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

const io = SocketIo(server);

io.on("connection", (socket) => {
  console.log("new connection: ", socket.id);

  socket.on("chat:message", (data) => {
    io.sockets.emit("chat:message", data);
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
