
window.onload = function(){
  var id_el = $($("#site-header a div.author-title")[0]).data().id;

  var url = "ws://localhost:8080/?id=" + id_el;
  var socket = new WebSocket(url);

  socket.onmessage = function(event) {
    let message = JSON.parse(event.data);
    $("#last_mess" + message['id_room']).html(message['msg']);
    if(message['type'] == "private_mess")
    {
      if($("#curr_chat").html() == message['id_room'])
      {
        chat_field(message['id_room']);
      }
    }
    
    console.log(message);
  };
  



    var mess_form = $("form[name='messages']")[0];

    if(mess_form)
    {
      mess_form.onsubmit = function(ev){
        ev.preventDefault();
        let message = {
              msg: this.mess.value,
               id_room: this.id_room.value,
              type: "private_mess",
              }
              socket.send(JSON.stringify(message));
              this.mess.value = "";
     };
    }

}
