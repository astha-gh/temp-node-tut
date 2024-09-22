const greet = "Hello, let's study node.js";
console.log(greet);



console.log(__dirname);
console.log(__filename);
//process -> gives info on the current environment where code is being executed
//console.log(process);  

setInterval(() => {
    console.log("hEllo");
} , 1000);