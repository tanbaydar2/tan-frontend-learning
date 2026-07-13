const connectionStatus = document.querySelector(".status"); 
const messageList = document.getElementById("log");        
const messageInput = document.getElementById("message");   
const sendButton = document.getElementById("send");
const liveValue = document.getElementById("value");
let count = 0;        

const socket = new WebSocket("wss://echo.websocket.org");

socket.onopen = () => {
  connectionStatus.textContent = "open";
};

socket.onmessage = (event) => {
  const item = document.createElement("li");
  item.textContent = event.data;
  messageList.append(item);

  liveValue.textContent = count;
  count = count + 1;
};

socket.onclose = () => {
  connectionStatus.textContent = "closed";
};

socket.onerror = () => {
  connectionStatus.textContent = "error";
};

sendButton.onclick = () => {
  socket.send(messageInput.value);
  messageInput.value = "";
};
