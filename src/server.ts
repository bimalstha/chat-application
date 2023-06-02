import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const PORT = 3000;
const server = http.createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log("message received", message);
  });
  io.emit("message", onmessage);

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

app.use(cors());
app.listen(PORT, () => {
  console.log("the server is listening at PORT ", PORT);
});
