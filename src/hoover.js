'use strict'

var formatter = require('./formatter');

const direction = {N: 1, E: 1, S: -1, W: -1}

class Hoover{
    constructor(inputData){
        this.startLocation = formatter.strToCoordinates(inputData[1]);
        this.currentLocation = formatter.strToCoordinates(inputData[1])
        this.locationHistory = [formatter.strToCoordinates(inputData[1])];
    }

    move(cardinal, roomDimensions ){
        var xCoord = this.currentLocation[0];
        var yCoord = this.currentLocation[1];
        
        if (cardinal == 'N' || cardinal == 'S') {
            if (yCoord > 0 && yCoord < roomDimensions[1] ){
                this.currentLocation[1] += direction[cardinal]
                this.locationHistory.push(this.currentLocation)
                
            }
        }
        if (cardinal == 'E' || cardinal == 'W') {
            if (xCoord > 0 && xCoord < roomDimensions[1] ){
                this.currentLocation[0] += direction[cardinal]
                this.locationHistory.push(this.currentLocation)
            }
        }
    }
}
module.exports = Hoover;