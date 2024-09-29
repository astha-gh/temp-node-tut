console.log("First Task");

//OFFLOADS----> Since setTimeout is asynchronous
setTimeout(() => {
    console.log("Second Tasks");
} , 0);

console.log("Third Task");