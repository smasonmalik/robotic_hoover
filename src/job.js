'use strict'

var Hoover = require('../src/hoover');
var Room = require('../src/room');

class Job{
    constructor(inputData){
        this.data = inputData
        this.room = new Room(this.data)
        this.hoover = new Hoover(this.data);
        this.instructions = this.data[this.data.length -1].split('')
    }

    finalLocation(){
        let self = this
        this.instructions.forEach(function(cardinal){
            self.hoover.move(cardinal, self.room.size)
        })
        return this.hoover.locationHistory.pop()
    }

    patchesCleaned(){
        var patchesCleaned = 0
        let history = this.hoover.locationHistory.map(coord => coord.join(''))
        this.room.dirtPatches.forEach(function(patch){
            if (history.includes(patch.join(''))) patchesCleaned += 1 
        })
        return patchesCleaned
    }
}
module.exports = Job;