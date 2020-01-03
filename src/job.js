'use strict'

var Hoover = require('./hoover');
var Room = require('./room');
var output = require('./output');

class Job{
    constructor(inputData){
        this.data = inputData
        this.room = new Room(inputData)
        this.hoover = new Hoover(inputData);
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

    runJob(){
        var location = this.finalLocation()
        var patchesCleaned = this.patchesCleaned()
        console.log(output.printOutput(location, patchesCleaned))
    }
}
module.exports = Job;