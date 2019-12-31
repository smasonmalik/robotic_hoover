'use strict'

var JobClass = require('../src/job');

var inputData = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]

describe('Job', function(){
    var job;

    beforeEach(function(){
        job = new JobClass(inputData)
    })

    describe('final hoover location', function(){
        it('returns final hoover position', function(){
            this.
            console.log('job', job.hoover.location);   
            expect(job.finalLocation()).toEqual([1, 3])
        })
    })
})