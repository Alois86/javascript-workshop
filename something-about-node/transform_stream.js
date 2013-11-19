var Transform = require("stream").Transform
var util = require("util")

function ITransformThings(options) {
  Transform.call(this, options)
  this._writableState.objectMode = true
  this._readableState.objectMode = false
}
util.inherits(ITransformThings, Transform)

ITransformThings.prototype._transform = function(chunk, enc, done) {
  this.push(chunk.toString())
  done()
}

var ts = new ITransformThings()
ts.pipe(process.stdout)
ts.write(function(foo) { return foo })
ts.write("bar")
ts.write([1,2,3])
ts.end()
