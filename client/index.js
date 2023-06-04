import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
export const a = "hello";
console.log(a);
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("a user connected");
});

// socket.on("message", (message) => {
//   const messageList = document.getElementById("messages");
//   const newMessage = document.createElement("li");
//   newMessage.textContent = message;
//   messageList.appendChild(newMessage);
// });

// function sendMessage(event) {
//   event.preventDefault();
//   const messageInput = document.getElementById("input");
//   const message = messageInput.value.trim();
//   if (message !== "") {
//     socket.emit("message", message);
//     messageInput.value = "";
//   }
// }
