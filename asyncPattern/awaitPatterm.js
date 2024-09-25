const {readFile , writeFile} = require('fs');
const util = require('util');
//Promisify converts callback-based functions to promise-based function
const readFilePromises = util.promisify(readFile);
const writeFilePromises = util.promisify(writeFile);


const start = async() => {
    try{
        const first = await readFilePromises('./content/first.txt' , 'utf8');
        const second = await readFilePromises('./content/second.txt' , 'utf8');
        await writeFilePromises('./content/result-await.txt' , 
            `Hello : ${first} ${second}` , {flag : 'w'}
        )
        console.log(first , second);
    }
    catch(error){
        console.log(error);
    }
}


start();

// const { readFile } = require('fs');
// const { resolve } = require('path');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path , 'utf8', (err, result) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             else {
//                 resolve(result);
//             }
//         })
//     })
// }

// getText('./content/result.txt')
//     .then(value => (console.log(value)))
//     .catch(err => (console.log(err)));

// const start = async() => {
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first);
//         console.log(second);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// start();


