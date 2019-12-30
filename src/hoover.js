'use strict'

var formatter = require('../src/handleInput');

const directions = {N: 1, E: 1, S: -1, W: -1}

class Hoover{
    constructor(inputData){
        this.location = formatter.strToCoordinates(inputData[1])
    }

    move(cardinal){
        if (cardinal == 'N' || cardinal == 'S') {
            this.location[1] += directions[cardinal]
        }
        if (cardinal == 'E' || cardinal == 'W') {
            this.location[0] += directions[cardinal]
        }
    }
}
module.exports = Hoover;