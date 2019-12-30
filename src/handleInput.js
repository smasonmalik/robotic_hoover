'use strict'

var fs = require('fs') 


function readFile(filePath) {
    fs.readFile(filePath, (err, data) => { 
        if (err) throw err; 
        console.log(data.toString().split('\n'));
        return data.toString().split('\n');
    })
}

function strToCoordinates(string) {   
    return string.split(' ').map(x => Number(x))
}

module.exports.readFile = readFile
module.exports.strToCoordinates = strToCoordinates