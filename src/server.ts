import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const PORT = 3000;
const server = new http.Server(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use(cors());

server.listen(PORT, () => {
  console.log("The server is listening at PORT", PORT);
});
