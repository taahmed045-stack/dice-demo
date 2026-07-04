const socket = io();

const status = document.getElementById("status");
const dice = document.getElementById("dice");
const message = document.getElementById("message");

socket.on("connect", () => {
  status.textContent = "🟢 Connected";
});

socket.on("disconnect", () => {
  status.textContent = "🔴 Disconnected";
});

socket.on("dice", (data) => {
  switch (data.action) {
    case "roll":
      dice.textContent = Math.floor(Math.random() * 6) + 1;
      message.textContent = "🎲 Dice Rolled";
      break;

    case "set":
      dice.textContent = data.value;
      message.textContent = "Controller selected " + data.value;
      break;

    case "reset":
      dice.textContent = "1";
      message.textContent = "Reset Complete";
      break;
  }
});
