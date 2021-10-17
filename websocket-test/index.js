const btn = document.getElementById("btn");

const socket = new WebSocket("ws://localhost:5000/");

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      id: 311,
      username: "Dinclaise",
      method: "connection",
    })
  );
};

socket.onmessage = (event) => {
  console.log("Пришло сообщение", event.data);
};

btn.onclick = () => {
  socket.send(
    JSON.stringify({
      message: "Hello server",
      id: 311,
      username: "Dinclaise",
      method: "message",
    })
  );
};
