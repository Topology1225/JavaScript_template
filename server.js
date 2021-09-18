var http = require("http");
var config = require("./config");
var server = http.createServer();

server.on("request", function(req, res){
    res.writeHead(200, {"Content-Type" : "test/plain"});
    res.write("hello wolrd");
    res.end();
});

server.listen(config.port)

console.log(config.port)