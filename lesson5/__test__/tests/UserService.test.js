const chai = require('chai');
const UtilService = require('../../src/components/User/service');

const { expect } = chai;

describe('UserComponent -> service', () => {
    it('UserComponent -> service -> findAll', (done) => {
        expect(UtilService.multiply(5, 5))
            .to.be.equal(11);

        done();
    });
});
