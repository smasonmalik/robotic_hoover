'use strict'

var RoomClass = require('../src/room');

var inputData = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]

describe('Room', function() {
    var room;

    beforeEach(function(){
        room = new RoomClass(inputData)
    })

    describe('room size', function () {
        it('sets room size', function() {
            expect(room.size).toEqual([5,5])
        })
    })

    describe('room dirt patches', function() {
        it('get dirt patches from inputData', function() { 
            expect(room.getDirtLocations(inputData)).toEqual([[1,0],[2,2],[2,3]])
        })
        it('stores dirt patches as class variable', function(){
            expect(room.dirtPatches).toEqual([[1,0],[2,2],[2,3]])
        })
    })
})
