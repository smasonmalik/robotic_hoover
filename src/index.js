'use strict';

var formatter = require('./formatter');
var JobClass = require('./job');

const inputFile = 'input.txt'

var inputData = formatter.fileReader(inputFile)

var job = new JobClass(inputData)
job.runJob()

