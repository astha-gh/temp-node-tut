//streams extends event emitter class
//sequence of data that can be read or written

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data' , (result) => {
    console.log(result);
});

stream.on('error' , (err) => {
    console.log(err);
})