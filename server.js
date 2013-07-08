var app = require('http').createServer()
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(3000);

io.sockets.on('connection', function (socket) {
  
  socket.on('receiveClientData', function (data) {
    //Data receive from Client here
    console.log(data);
    socket.emit('sendClientData', { data: 'Server said Hello world' });
  });

  socket.on('disconnect', function(){
    // client disconnected
    alert("Disconnected from Server");
  });

});
