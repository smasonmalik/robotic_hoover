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
})
