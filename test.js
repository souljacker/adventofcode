var assert = require('assert')

describe('advent of code', () => {
    var run = require('./run')

    function test(day, part, expected) {
        var actual = run(day, part)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 280))
    it('day 01, part 2', () => test(1, 2, 1797))
    it('day 02, part 1', () => test(2, 1, 1588178))
    it('day 02, part 2', () => test(2, 2, 3783758))
    it('day 03, part 1', () => test(3, 1, 2081))
    it('day 03, part 2', () => test(3, 2, 2341))
    it('day 04, part 1', () => test(4, 1, 254575))
    it('day 04, part 2', () => test(4, 2, 1038736))
    it('day 05, part 1', () => test(5, 1, 255))
    it('day 05, part 2', () => test(5, 2, 55))
    it('day 06, part 1', () => test(6, 1, 543903))
    it('day 06, part 2', () => test(6, 2, 14687245))
    it('day 07, part 1', () => test(7, 1, 16076))
    it('day 07, part 2', () => test(7, 2, 2797))
    it('day 08, part 1', () => test(8, 1, 1342))
    it('day 08, part 2', () => test(8, 2, 2074))
    it('day 09, part 1', () => test(9, 1, 207))
    it('day 09, part 2', () => test(9, 2, 804))
    it('day 10, part 1', () => test(10, 1, 492982))
    it('day 10, part 2', () => test(10, 2, 6989950))
})
