'use strict'

var HooverClass = require('../src/hoover');

var inputData = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]

describe('Hoover', function(){
    var hoover;

    beforeEach(function(){
        hoover = new HooverClass(inputData)
    })

    describe('hoover position', function(){
        it('returns starting hoover position', function() {
            expect(hoover.location).toEqual([1,2])
        })
    })

    describe('moving hoover given a direction', function() {

        beforeEach(function(){
            hoover.location = [1,2]
        })

        it('moves north', function(){
            hoover.move('N',[5,5])
            expect(hoover.location).toEqual([1,3])
        })

        it('moves south', function(){
            hoover.move('S',[5,5])
            expect(hoover.location).toEqual([1,1])
        })

        it('moves east', function(){
            hoover.move('E',[5,5])
            expect(hoover.location).toEqual([2,2])
        })
        it('moves west', function(){
            hoover.move('W',[5,5])
            expect(hoover.location).toEqual([0,2])
        })
    })
    describe('mooving hoover into wall', function() {
        var roomDimensions = [5,5];
        it('stays in same location when at North wall', function() {
            hoover.location = [5,5]
            hoover.move('N', roomDimensions)
            expect(hoover.location).toEqual([5,5])
        })
        it('stays in same location when at East wall', function() {
            hoover.location = [5,5]
            hoover.move('E', roomDimensions)
            expect(hoover.location).toEqual([5,5])
        })
        it('stays in same location when at South wall', function() {
            hoover.location = [0,0]
            hoover.move('S', roomDimensions)
            expect(hoover.location).toEqual([0,0])
        })
        it('stays in same location when at West wall', function() {
            hoover.location = [0,0]
            hoover.move('W', roomDimensions)
            expect(hoover.location).toEqual([0,0])
        })
    })
});