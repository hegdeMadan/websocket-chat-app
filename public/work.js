var socket = io.connect('http://localhost:3000');

//some DOM works
var name = document.getElementById('name'),
    message = document.getElementById('message'),
    send = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

//making message accessible to the server
send.addEventListener('click', function() {
  socket.emit('chat',{
    name: name.value,
    message: message.value
  });
});

// displaying message on the body
socket.on('chat', function(data) {
  output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
});
