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

    describe('moving hover given a direction', function() {

        beforeEach(function(){
            hoover.location = [1,2]
        })

        it('moves north', function(){
            hoover.move('N')
            expect(hoover.location).toEqual([1,3])
        })

        it('moves south', function(){
            hoover.move('S')
            expect(hoover.location).toEqual([1,1])
        })

        it('moves east', function(){
            hoover.move('E')
            expect(hoover.location).toEqual([2,2])
        })
        it('moves west', function(){
            hoover.move('W')
            expect(hoover.location).toEqual([0,2])
        })
    })
});