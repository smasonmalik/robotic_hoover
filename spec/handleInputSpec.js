'use strict'

var formatter = require('../src/handleInput');

var data = ['5 5','1 2','1 0','2 2','2 3','NNESEESWNWW'];

describe('reading input data', function() {
    it('returns room dimenions', function () {
        expect(formatter.strToCoordinates(data[0])).toEqual([5, 5]);
    })
})