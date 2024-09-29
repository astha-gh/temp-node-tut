//Offloads as setInterval is asynchronous

setInterval(() => {
    console.log(`I will wait`);
} , 4000);

console.log(`I run first`);