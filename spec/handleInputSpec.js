'use strict'

var formatter = require('../src/handleInput');

describe('reading input data', function() {
    it('returns room dimenions', function () {
        expect(formatter.strToCoordinates('5 5')).toEqual([5, 5]);
    })
})