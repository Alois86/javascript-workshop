var http = require("http")

var handler = function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.end("<html><title>Hello Node</title><body>Hello Node</body></html>")
}

http.createServer(handler).listen(3000, "127.0.0.1")
