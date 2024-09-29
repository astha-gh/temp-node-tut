const {readFileSync , writeFileSync} = require('fs');

//console.log("start");

const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');

console.log(first , second);

//this process is very time consuming
writeFileSync(
    './content/result.txt' ,
     `Hello : ${first} , ${second}`,
     //this will append
     {flag : 'a'}
)


// console.log("done");
// console.log("end");