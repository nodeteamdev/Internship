/* eslint-disable no-undef */
const http = require('http');
const http2 = require('follow-redirects').http;
const events = require('../src/server/events');
const server = require('../src/server/server');
const userModel = require('../src/components/User/model');
const userIndex = require('../src/components/User/index');

const port = server.get('port');

before('Run application!', (done) => {
    events.bind(http.createServer(server).listen(port), port);
    done();
});

const validUser = {
    fullName: 'Tom Cruise',
    email: 'impossible@gmail.com',
    age: 58,
};
const options = {
    method: 'POST',
    hostname: '127.0.0.1',
    port: 3000,
    path: '/v1/users',
    headers: {
        'Content-Type': 'application/json',
    },
    maxRedirects: 20,
};

describe('Positive cases', (suiteDone) => {
    beforeEach('Clean database', (done) => {
        userModel.findOneAndDelete({ email: validUser.email });
        done();
    });

    it('Create user with all valid data', (done) => {

    });
});

async function createRequest(user) {
    
}
