const { readFile, writeFile } = require('fs');

//reads content in first file
readFile('./content/first.txt', 'utf8', (err, result) => {
    //callback function takes error object(err) and file contents(result) as argument
    if (err) {
        console.log(err);
        return;
    }
    //content of first file stored in first variable
    const first = result;
    //reads content in second file
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        //content of second file stored in second variable
        const second = result;
        writeFile(
            //writes the content stored in first and second into a new file called result-async.txt
            './content/result-async.txt',
            `Hello : ${first} , ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
});

