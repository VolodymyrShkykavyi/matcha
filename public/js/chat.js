

window.onload = function(){
  var id_el = $($("#site-header a div.author-title")[0]).data().id;

  var url = "ws://localhost:8080/?id=" + id_el;
  var socket = new WebSocket(url);

  socket.onmessage = function(event) {
    let message = JSON.parse(event.data);
    if(message['type'] == "private_mess")
    {
      $("#last_mess" + message['id_room']).html(message['msg']);
      if($("#curr_chat").html() == message['id_room'])
      {
        chat_field(message['id_room']);
        var win = new Audio('http://localhost:1111/audio/notify.mp3');
            win.play();
      }
      else
      {
       var win = new Audio('http://localhost:1111/audio/notify.mp3');
            win.play();
      }
    }
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
              if(this.mess.value != "")
              {
                 socket.send(JSON.stringify(message));
              }
              this.mess.value = "";
     };
    }

}
