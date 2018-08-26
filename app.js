var express = require('express'),
    socket = require('socket.io');

  var  app = express();

//serving static
app.use(express.static('public'));

//setting up server
var server = app.listen(3000, function() {
  console.log('server is running on port 3000!');
});

//socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('socket connection is made.', socket.id);

    socket.on('chat', function(data) {
      io.sockets.emit('chat', data);
    });
});
