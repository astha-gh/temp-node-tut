const path = require('path');

console.log(path.sep);

//joins sequence of path segements using the path seperater
const filePath = path.join('/content' , 'subfolder' , 'text.text');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//resolve ---> returns absolute path. Accepts a sequence of path segments and returns absolute path
const absolute = path.resolve(__dirname , 'content' , 'subfolder' , 'text.txt');
console.log(absolute);