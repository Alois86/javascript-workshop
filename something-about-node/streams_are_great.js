function httpHandler(req, res) {
  shortner.on("error", function(err) {
    res.statusCode = 500
    res.end("Internal Server Error")
  })

  req.pipe(bodyParser)
     .pipe(shortner)
     .pipe(stringify)
     .pipe(res)
 }
