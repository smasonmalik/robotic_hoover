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
            expect(job.finalLocation()).toEqual([1, 3])
        })
    })
    describe('keeping count of patches', function(){
        it('returns number of patches cleaned', function(){
            job.hoover.move('N', [5,5]) 
            job.hoover.move('N', [5,5])
            job.hoover.move('E', [5,5])
            job.hoover.move('S', [5,5])
            job.hoover.move('E', [5,5])
            job.hoover.move('E', [5,5])
            job.hoover.move('S', [5,5])
            job.hoover.move('W', [5,5])
            job.hoover.move('N', [5,5])
            job.hoover.move('W', [5,5])
            job.hoover.move('W', [5,5])
            expect(job.patchesCleaned()).toEqual(1)
        })
    })
})