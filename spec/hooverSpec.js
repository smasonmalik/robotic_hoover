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
            expect(hoover.currentLocation).toEqual([1,2])
        })
    })

    describe('moving hoover given a direction', function() {

        it('moves north', function(){
            hoover.move('N',[5,5])
            expect(hoover.currentLocation).toEqual([1,3])
        })

        it('moves south', function(){
            hoover.move('S',[5,5])
            expect(hoover.currentLocation).toEqual([1,1])
        })

        it('moves east', function(){
            hoover.move('E',[5,5])
            expect(hoover.currentLocation).toEqual([2,2])
        })
        it('moves west', function(){
            hoover.move('W',[5,5])
            expect(hoover.currentLocation).toEqual([0,2])
        })
    })
    describe('mooving hoover into wall', function() {
        var roomDimensions = [5,5];
        it('stays in same location when at North wall', function() {
            hoover.currentLocation = [5,5]
            hoover.move('N', roomDimensions)
            expect(hoover.currentLocation).toEqual([5,5])
        })
        it('stays in same location when at East wall', function() {
            hoover.currentLocation = [5,5]
            hoover.move('E', roomDimensions)
            expect(hoover.currentLocation).toEqual([5,5])
        })
        it('stays in same location when at South wall', function() {
            hoover.currentLocation = [0,0]
            hoover.move('S', roomDimensions)
            expect(hoover.currentLocation).toEqual([0,0])
        })
        it('stays in same location when at West wall', function() {
            hoover.currentLocation = [0,0]
            hoover.move('W', roomDimensions)
            expect(hoover.currentLocation).toEqual([0,0])
        })
    })

    describe('hoover location history', function(){
        var roomDimensions = [5,5];
        it('stores all hoover positions', function(){
            hoover.move('N', roomDimensions) 
            hoover.move('N', roomDimensions)
            hoover.move('E', roomDimensions)
            hoover.move('S', roomDimensions)
            hoover.move('E', roomDimensions)
            hoover.move('E', roomDimensions)
            hoover.move('S', roomDimensions)
            hoover.move('W', roomDimensions)
            hoover.move('N', roomDimensions)
            hoover.move('W', roomDimensions)
            hoover.move('W', roomDimensions)
            expect(hoover.locationHistory.pop()).toEqual([1,3])

        })
    })
});