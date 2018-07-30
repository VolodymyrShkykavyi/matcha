

window.onload = function(){
  var id_el = $($("#site-header a div.author-title")[0]).data().id;

  var url = "ws://e1r3p1:8080/?id=" + id_el;
  var socket = new WebSocket(url);

  var isActive = true;
  function onBlur() { 
     isActive = false;
}
function onFocus() {
    isActive = true;
}

  socket.onmessage = function(event) {
    let message = JSON.parse(event.data);
    if(message['type'] == "mess_send" || message['type'] == "mess_res")
    {
      if(message['type'] == "mess_res")
      {
        $("#last_mess_date").html(message['date_creation']);
        if(message['msg'].length > 50)
          $("#last_mess" + message['id_room']).html(message['msg'].substr(0, 50) + "...");
        else
          $("#last_mess" + message['id_room']).html(message['msg']);
      }
      if($("#curr_chat").html() == message['id_room'])
      {
        $("#chat_mess_ul:last-child").append('<li><div class="author-thumb"><img src="/img' + message['img'] + '" alt="author"></div><div class="notification-event" style="width:90%;"><a href="#" class="h6 notification-friend">' + message['login'] + '</a><span class="notification-date" ><time class="entry-date updated" datetime="2004-07-24T18:18">' + message['date_creation'] + '</time></span><br/><span class="chat-message-item" >' + message['msg'] + '</span></div></li>');
        var scroll = $("#scroll")[0];
          if(scroll)
              scroll.scrollTop = scroll.scrollHeight;
      }
      else
      {
       var win = new Audio('/audio/notify.mp3');
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

$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13' && $('#textarea').is(':focus')) {
      e.preventDefault();
       $('#butt').click();
   }
});
