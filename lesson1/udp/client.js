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
