var myThing = function(thing, cb) {
  if(thing.match(/snowboard*/)) {
    cb(null, thing + ", is my thing!")
  } else {
    cb(thing + ", is not really my thing!")
  }
}

module.exports = myThing
