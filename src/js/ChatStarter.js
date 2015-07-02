function ChatStarter(pusher) {
  var channel = pusher.subscribe('chat_alert_101')
  channel.bind('chat_alert', function(data) {
    var otherMember = data["other_member"]
    var answer = confirm ("Chat with member " + otherMember + "?")
    if(answer) {
      window.location.href = "/chat.html?other_member=" + otherMember;
    } else {
     console.log("byeee!");
    }
  })
};
