
window.onload = function(){
  // var socket = new WebSocket("ws://echo.websocket.org");
  var id_el = document.getElementById("user_id");
  var url = "ws://localhost:8080/?id=" + id_el.innerHTML;
  var socket = new WebSocket(url);
  var status = document.getElementById("status");
  console.log(socket);

  socket.onopen = function() {
    status.innerHTML = "cоединение установлено<br>";
  };

  socket.onclose = function(event) {
    if (event.wasClean) {
      status.innerHTML = 'cоединение закрыто';
    }
    else {
      status.innerHTML = 'соединения как-то закрыто';
    }
    status.innerHTML += '<br>код: ' + event.code + ' причина: ' + event.reason;
  };

  socket.onmessage = function(event) {
    alert("Получены данные " + event.data);
    let message = JSON.parse(event.data);
    status.innerHTML += `пришли данные: <b>${message.name}</b>: ${message.msg}<br>`;
  };

  socket.onerror = function(event) {
    status.innerHTML = "ошибка " + event.message;
  };

  document.forms["messages"].onsubmit = function(){
    let message = {
      name:this.name.value,
      msg: this.msg.value,
    }
    socket.send(JSON.stringify(message));
    return false;
  }
}