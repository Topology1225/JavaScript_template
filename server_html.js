var http = require("http");
var fs   = require("fs");
var config = require("./config");
var server = http.createServer();
var msg;

server.on("request", function(req, res){
    // callback for non blocking execution
    fs.readFile(__dirname + "/hello.html", "utf-8", function(err, data){
        // if an error occur
        if (err){
            res.writeHead(404, {"content-Type" : "text/plain"});
            res.write("page not found");
            return res.end();// stop executing
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    });
});


server.listen(config.port)