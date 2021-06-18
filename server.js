const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

io.on('connection', socket => {
  console.log('A user has connected.');

  const socketId = `${socket.id.substr(0, 2)}`;

  socket.on('message', message => {
    console.log('Message: ', message);

    io.emit('message', `${socketId} said: ${message}`);
  });
});

http.listen(8080, () => console.log('Listening on port 8080...'));
