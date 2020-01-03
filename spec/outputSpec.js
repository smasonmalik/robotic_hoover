'use strict'

var output = require('../src/output');

describe('job output file', function() {
    it('returns final location and number of patches cleaned', function () {
        expect(output.printOutput([1, 3], 1)).toEqual('1 3\n1')
    })
})