const {readFile} = require('fs');

console.log("First Task");

//readFile is non-blocking, it offloads to next tasks while it is being completed
readFile('./content/first.txt' , "utf8" , (err , result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("Task Complete")
});

console.log("All task complete");


/*

O/P

First Task
All task complete
this is the first file
Task Complete
*/