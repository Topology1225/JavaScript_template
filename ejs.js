var http = require("http");
var ejs  = require("ejs");
var qs = require("querystring");
var fs   = require("fs");
var config = require("./config");
var math  = require("math")
var server = http.createServer();

var msg;

var posts = [];

// show form
function renderForm(posts, res){
    var data = ejs.render(template, {
        posts: posts
    });

    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(data);
    res.end();
}

var template = fs.readFileSync(__dirname + "/hello.ejs", "utf-8");

server.on("request", function(req, res){
    if (req.method === "POST"){
        req.data = "";
        // get data from the form
        req.on("readable", function(){
            req.data += req.read() || "";
            console.log(req.data)
        });
        req.on("end", function(){
            // when we use parse, we can use the input value from the form.
            var query = qs.parse(req.data);
            console.log(query);
            posts.push(query.user_name);
            renderForm(posts, res);
        });
    } else{
        renderForm(posts, res)
    }
});

server.listen(config.port)

