//In feAsyncModule.js we used callbacks so will change it and use promises

const { readFile } = require('fs');
const { resolve } = require('path');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve(result);
            }
        })
    })
}

getText('./content/result.txt')
    .then(value => (console.log(value)))
    .catch(err => (console.log(err)));