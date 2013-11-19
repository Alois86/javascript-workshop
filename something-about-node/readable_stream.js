var Readable = require("stream").Readable
var util = require("util")

function ICanRead(options) {
  Readable.call(this, options)
  this.data = ["I", "can", "read"]
}
util.inherits(ICanRead, Readable)

ICanRead.prototype._read = function(size) {
  var chunk = this.data.shift()
  this.push(chunk)
}

var rs = new ICanRead({})

rs.once("readable", function() {
  rs.pipe(process.stdout)
})

