'use strict'

var Hoover = require('../src/hoover');
var Room = require('../src/room');

class Job{
    constructor(inputData){
        this.data = inputData
        this.room = new Room(this.data)
        this.hoover = new Hoover(this.data);
        this.instructions = this.data[this.data.length -1].split('')
        this.patchesCleaned = 0;
        this.history = []
    }

    finalLocation(){
        let self = this
        this.instructions.forEach(function(cardinal){
            self.hoover.move(cardinal, self.room.size)
            
        })
        console.log(this.history);
        
        return this.hoover.currentLocation
    }

    

}
module.exports = Job;