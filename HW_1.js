var http = require("http")
let date = new Date();
//var name = "Aphinya Tansan";
//var Hours = date.getHours();
//var Minutes = date.getMinutes();

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end('Aphinya Tansan\n'+ " Time at " + date.toLocaleString())
  })
  .listen(2337, "127.0.0.2");
console.log("Server running at http://127.0.0.2:2337/")
