const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//over write to the file or create a new one if not exist
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}` , 
{flag: 'a'}) //flag parameter with the value of 'a' means that the data will be appended to the file if it already exists.

//console.log(first, second)
console.log('done with this task')
console.log('starting the next one')