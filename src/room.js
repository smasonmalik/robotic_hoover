'use strict'

var formatter = require('./formatter');

class Room {
    constructor(inputData){
        this.size = formatter.strToCoordinates(inputData[0])
        this.dirtPatches = this.getDirtLocations(inputData)
    }

    getDirtLocations(inputData){
        var dirtString = inputData.slice(2,-1)
        return dirtString.map(dirtPatch => formatter.strToCoordinates(dirtPatch))
    }
}

module.exports = Room; 