'use strict'

var HooverClass = require('../src/hoover');

var inputData = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]

describe('Vacuum', function(){
    var hoover;

    beforeEach(function(){
        hoover = new HooverClass(inputData)
    })

    describe('hoover position', function(){
        it('returns starting hoover position', function() {
            expect(hoover.location).toEqual([1,2])
        })
    })

    // describe('mooving hoover', function() {
    //     it('changes hooverLocation given hoover movement direction', function(){
    //         expect(hoover.move('N'))
    //     }
    // })
})