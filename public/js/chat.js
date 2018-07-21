
window.onload = function(){
  var id_el = $($("#site-header a div.author-title")[0]).data().id;

  var url = "ws://localhost:8080/?id=" + id_el;
  var socket = new WebSocket(url);

  socket.onmessage = function(event) {
    // let message = JSON.parse(event.data);
  };
  if (document.location.pathname === '/chat'){
    document.forms["messages"].onsubmit = function()
    {
      let message = {
       name:this.name.value,
       msg: this.msg.value,
      }
      socket.send(JSON.stringify(message));
      return false;
    }
  }
}