var http = require("http");
var config = require("./config");
var server = http.createServer();

var msg;

server.on("request", function(req, res){
    res.writeHead(200, {"Content-Type" : "text/plain"});

    // switch
    switch(req.url){
        case "/about":
            msg = "welcome about page";
            break;
        case "/company":
            msg = "wlcome my company page";
            break;
        default:
            msg = "page not found";
            break;
    }
    res.write(msg);
    res.end();
})

server.listen(config.port)
