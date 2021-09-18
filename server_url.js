var http = require("http");
var config = require("./config");

var server = http.createServer();

server.on("request", function(req, res){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.write("request from: " + req.url);
    res.end();
})


server.listen(config.port)
console.log("port number: %d", config.port)