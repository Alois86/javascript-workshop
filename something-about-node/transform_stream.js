var Transform = require("stream").Transform
var util = require("util")

function ITransformThings(options) {
  Transform.call(this, options)
  this._writableState.objectMode = true
  this._readableState.objectMode = false
}
util.inherits(ITransformThings, Transform)

ITransformThings.prototype._transform = function (chunk, enc, done) {
  if (typeof chunk === 'function') {
    chunk = chunk();
  }
  this.push(chunk.toString());
  done()
}

var ts = new ITransformThings()
ts.pipe(process.stdout)
ts.write(function () {
  return 'awesome'
})
ts.write("bar")
ts.write([1, 2, 3])
ts.end()