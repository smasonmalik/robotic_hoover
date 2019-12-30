'use strict'

var formatter = require('../src/handleInput');

class Room {
    constructor(inputData){
        this.size = formatter.strToCoordinates(inputData[0])
    }
}

module.exports = Room; 