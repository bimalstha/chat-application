"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var cors_1 = __importDefault(require("cors"));
var port = 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
var httpServer = http_1.default.createServer(app);
var serverIo = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
app.get("/", function (req, res) {
    res.send("connected");
});
serverIo.on("connection", function (socket) {
    console.log("user connected");
    socket.on("disconnect", function () {
        console.log("user disconnected");
    });
});
httpServer.listen(port, function () {
    console.log("the server is listening at ".concat(port));
});
