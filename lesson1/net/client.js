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
