var awesomeness = function(thing, cb) {
  if(thing.match(/snowboard*/)) {
    cb(null, thing + ", is awesome!")
  } else {
    cb(thing + ", sucks!")
  }
}

module.exports = awesomeness
