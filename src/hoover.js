'use strict'

var formatter = require('../src/handleInput');

class Hoover{
    constructor(inputData){
        this.location = formatter.strToCoordinates(inputData[1])
    }

    move(direction){
        if (direction === 'N') {
            this.location[1] += 1
        }
        if (direction === 'S') {
            this.location[1] -= 1
        }
        if (direction === 'E') {
            this.location[0] += 1
        }
        if (direction === 'W') {
            this.location[0] -= 1
        }
    }
}
module.exports = Hoover;