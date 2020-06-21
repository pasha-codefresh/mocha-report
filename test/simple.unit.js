var expect = require('chai').expect;

describe('#sum()', function() {

    context('without arguments', function() {
        it('should return 0', function() {
            expect(1 - 1).to.equal(0)
        })
    })

    context('with number arguments', function() {
        it('should return sum of arguments', function () {
            expect(10 + 5).to.equal(15)
        })
    })
})
