const socket = io("http://127.0.0.1:3000");

socket.on("connect", () => {
  console.log("connected to server");
});

socket.on("message", (message) => {
  const messageList = document.getElementById("messages");
  const newMessage = document.createElement("li");
  newMessage.textContent = message;
  messageList.appendChild(newMessage);
});

function sendMessage(event) {
  event.preventDefault();
  const messageInput = document.getElementById("input");
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("message", message);
    messageInput.value = "";
  }
}
