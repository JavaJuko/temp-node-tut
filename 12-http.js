const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our homepage');
    }
    if (req.url === '/about') {
        return res.end('Here is our short history');
    }
    res.end(`<h1>Oops!</h1>
    <p>We are unable to locate the page you are seeking</p>
    <a href = '/'>Back to home page...</a>`);
});

server.listen(5000);
