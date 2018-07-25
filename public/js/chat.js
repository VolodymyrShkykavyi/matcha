
window.onload = function(){
  var id_el = $($("#site-header a div.author-title")[0]).data().id;

  var url = "ws://localhost:8080/?id=" + id_el;
  var socket = new WebSocket(url);

  socket.onmessage = function(event) {
    let message = JSON.parse(event.data);
    console.log(message);
  };
  
  if (document.location.pathname === '/chat'){

    document.forms["messages"].onsubmit = function()
    {
      let message = {
       msg: this.mess.value,
       id_room: this.id_room.value
      }
      socket.send(JSON.stringify(message));
      return false;
    }
  }
}