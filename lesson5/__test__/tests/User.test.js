
const request = require('supertest');
const chai = require('chai');

const server = require('../../src/server/server');

const { expect } = chai;

describe('UserComponent -> controller', () => {
    it('UserComponent -> controller -> /v1/users/', (done) => {
        request(server)
            .get('/v1/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(({ body }) => {
                const expectBody = expect(body);

                expectBody.to.have.property('data').and.to.be.a('array');

                done();
            })
            .catch((err) => done(err));
    });
});
