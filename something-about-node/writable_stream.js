var Writable = require("stream").Writable
var util = require("util")

function IConcatThings(options) {
  Writable.call(this, options)
  this.data = []
}
util.inherits(IConcatThings, Writable)

IConcatThings.prototype._write = function(chunk, enc, done) {
  this.data.push(chunk)
  done()
}

var cs = new IConcatThings({ objectMode: true }) 
cs.on("finish", function() {
  console.log(cs.data)
})
cs.write(1)
cs.write(2)
cs.write(3)
cs.end()
