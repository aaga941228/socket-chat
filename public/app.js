const socket = io();

const message = document.querySelector("#message");
const username = document.querySelector("#username");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");
const actions = document.querySelector("#actions");

btn.addEventListener("click", () => {
  socket.emit("chat:message", {
    username: username.value,
    message: message.value,
  });
});

message.addEventListener("keypress", function () {
  socket.emit("chat:typing", username.value);
});

socket.on("chat:message", function (data) {
  actions.innerHTML = "";
  output.innerHTML += `
    <p>
    <strong>${data.username}</strong>: ${data.message}
    </p>
  `;
});

socket.on("chat:typing", function (data) {
  actions.innerHTML = `
    <p><em>${data}</em> is typing</p>
  `;
});
