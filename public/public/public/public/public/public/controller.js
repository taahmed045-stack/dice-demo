const socket = io();

const status = document.getElementById("status");

socket.on("connect", () => {
  status.textContent = "🟢 Connected";
});

socket.on("disconnect", () => {
  status.textContent = "🔴 Disconnected";
});

function roll() {
  socket.emit("dice", {
    action: "roll"
  });
}

function send(value) {
  socket.emit("dice", {
    action: "set",
    value: value
  });
}

function resetGame() {
  socket.emit("dice", {
    action: "reset"
  });
}
