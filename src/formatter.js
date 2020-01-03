'use strict'

var fs = require('fs') 


function fileReader(filePath) {
    var fileData = fs.readFileSync(filePath, 'utf8')
    var inputData = fileData.toString().split('\n');
    return inputData
}

function strToCoordinates(string) {   
    return string.split(' ').map(x => Number(x))
}

module.exports.fileReader = fileReader
module.exports.strToCoordinates = strToCoordinates