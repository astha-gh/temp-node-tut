const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(res);

    if (req.url === '/') {
        res.write("This is the home page");
        res.end();
    }
    else if (req.url === '/about') {
        res.write("This is our about page");
        res.end();
    }
    else {
        res.write(`
            <h1>Oops!</h1>
            <p>We can't find the page you are looking for</p>
            <a href="/">Go back to home</a>
        `);
        res.end();
    }


    // res.write("Welcome to home page");
    // res.end();
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});