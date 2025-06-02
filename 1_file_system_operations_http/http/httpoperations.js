const http = require('http');

const server = http.createServer(function(req, res){  //to make server in port no 3000
    if(req.url === "/"){
        res.write("hello world I am Saravjeet")
        res.end()  //to send request
    }
    if(req.url === "/source"){  //localhost:3000/source
        res.write("hello world this is the source page")
        res.end()  //to send request
    }
})

const port = 3000
server.listen(port, ()=>{
    console.log("listening on port 3000");
    
}); 