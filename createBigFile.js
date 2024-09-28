//Creating a big file for streams

const {writeFileSync, write} = require('fs');

for(let i = 0 ; i<100 ; i++){
    writeFileSync('./content/big.txt' , `Hello for the ${i}th time\n` , {flag : 'a'});
}