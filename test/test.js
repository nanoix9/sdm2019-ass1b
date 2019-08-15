const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const numbers = [1, 2, 3, 4, 5];

describe('example', function() {

    context('use assert', function() {
        it('should be numbers', function() {
            assert.isArray(numbers, 'is array of numbers');
            assert.include(numbers, 2, 'array contains 2');
        })
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);
    })
})
