## 1. NET

> Заполнить звездочки чтоб приложение заработало

_**client.js**_
```javascript
const *** = require('***');

const port = ****;

// net.connect is alias to net.createConnection()
// see https://nodejs.org/api/net.html#net_net_createconnection
const client = net.connect({
    ****
}, () => {
    console.log('connected to server!');
});

// The server can also receive data from the client by reading from its socket.
client.on('data', (data) => {
    console.log(data.toString());
    client.****();
});

// When the client requests to end the TCP connection with the server, the server
// ends the connection.
client.on('end', () => {
    console.log('disconnected from server');
});
```

_**server.js**_
```javascript
// Include Nodejs' net module.
const *** = require('***');

// The port on which the server is listening.
const port = ****;

// Create a new TCP server.
const server = net.createServer((*****) => {
    console.log('client connected');

    connection.on('end', () => {
        console.log('client disconnected');
    });

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    connection.write('Hello World!\r\n');
    connection.****(connection);
});

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(****, () => {
    console.log('server is listening');
});
```

> Зачем в приложении строчка `connection.****(connection);`?

## 2. UDP

> Заполнить звездочки чтоб приложение заработало

_**client.js**_

```javascript
const ***** = require('*****');

const PORT = 41234;
const HOST = '***.0.0.1';

// creating a udp server
const client = dgram.createSocket('****');
// buffer msg
const message = Buffer.from('My KungFu is Good!');

// sending msg
client.send(message, 0, message.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log('UDP message sent to ' + ${HOST} + ':' + ${PORT});
    // close connection
    client.close();
});
```

_**server.js**_

```javascript
const ***** = require('*****');

// creating a udp server
const server = dgram.createSocket('****');

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.*****();
});

// emits on new datagram msg
server.on('message', (msg, rinfo) => {
    // need to convert to string
    // since message is received as buffer
    // receive the message and do task
    console.log(`server got: ${msg.toString()} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
    const address = server.*******();
    console.log(`server listening ${address.address}:${address.port}`);
});

// Prints: server listening 0.0.0.0:41234
server.bind(*****);
```

## 3. HTTP

> Написать приложения с нуля
> Добавить несколько правил из архитектурного стиля REST

_**client.js**_

```javascript
// code here
```

_**server.js**_

```javascript
// code here
```
