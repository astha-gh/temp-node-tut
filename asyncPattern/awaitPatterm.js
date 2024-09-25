const {readFile , writeFile} = require('fs');

const start = async() => {
    try{
        const first = await readFile('./content/first.txt' , 'utf8');
        const second = await readFile('./content/second.txt' , 'utf8');
        await writeFile('./content/result-await.txt' , 
            `Hello : ${first} ${second}` , {flag : 'w'}
        )
        console.log(first , second);
    }
    catch(error){
        console.log(error);
    }
}


start();