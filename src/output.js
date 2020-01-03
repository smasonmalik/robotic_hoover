'use strict'

function printOutput(location, patchesCleaned){
    return `${location.join(' ')}\n${patchesCleaned.toString()}`
}

module.exports.printOutput = printOutput