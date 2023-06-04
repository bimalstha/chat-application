import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const port = 3000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const httpServer = http.createServer(app);

const serverIo = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("connected");
});

serverIo.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(port, () => {
  console.log(`the server is listening at ${port}`);
});
