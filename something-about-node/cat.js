var fs = require("fs")

var file = process.argv[2]

fs.readFile(file, { encoding: "utf8" }, function(err, data) {
  console.log(data)
})
