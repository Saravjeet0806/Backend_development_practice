const http = require('http');

const server = http.createServer(function(req, res){  //to make server in port no 3000
    res.end("hello world");
})

const port = 3000
server.listen(port, ()=>{
    console.log("listening on port 3000");
    
}); 