'use strict'

const fs = require('fs') 
  
fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
})