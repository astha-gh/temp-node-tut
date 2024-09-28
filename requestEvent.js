//Using Event Emitter as an API

const http = require('http');

const server = http.createServer();

server.on('request' , (req , res) => {
    res.write("Hello");
    res.end();
});

server.listen(3000 , () => {
    console.log("Listening at port 3000");
})