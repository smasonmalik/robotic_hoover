'use strict'

var formatter = require('../src/handleInput');

class Hoover{
    constructor(inputData){
        this.location = formatter.strToCoordinates(inputData[1])
    }
}
module.exports = Hoover;