const http = require('http');

const server = http.createServer((req , res) => {
    console.log(`Resquest Event`);
    res.write("Listening");
    res.end();
})

server.listen(3000 , () => {
    console.log("Server Listening at port 3000");
})

//here res.write() and res.end() are offloading because they are non-blocking operations