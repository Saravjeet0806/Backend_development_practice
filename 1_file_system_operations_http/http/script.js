const http = require('http');

const server = http.createServer(function(req, res){  //to make server in port no 3000
    res.end("hello world");
})

server.listen(3000); 