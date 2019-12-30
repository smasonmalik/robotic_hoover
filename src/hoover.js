'use strict'

var formatter = require('./formatter');

const directions = {N: 1, E: 1, S: -1, W: -1}

class Hoover{
    constructor(inputData){
        this.location = formatter.strToCoordinates(inputData[1])
    }

    move(cardinal, roomDimensions ){
        var xCoord = this.location[0];
        var yCoord = this.location[1];
        
        if (cardinal == 'N' || cardinal == 'S') {
            if (yCoord > 0 && yCoord < roomDimensions[1] ){
                this.location[1] += directions[cardinal]
            }
        }
        if (cardinal == 'E' || cardinal == 'W') {
            if (xCoord > 0 && xCoord < roomDimensions[1] ){
                this.location[0] += directions[cardinal]
            }
        }
    }

    // isNotAtWall(roomDimensions){
    //     if (this.location[1] > 0 && this.location[1] < roomDimensions[1] ){
    //         return true
    //     }
    //     if (this.location[0] > 0 && this.location[0] < roomDimensions[0] ){
    //         return true
    //     }
    // }
}
module.exports = Hoover;