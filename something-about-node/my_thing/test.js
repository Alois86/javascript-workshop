var myThing = require("./")

var handler = function(err, res) {
  if(err) {
    console.log(err)
    return
  }
  console.log(res)
}

myThing("snowboardng into a beertent", handler)
myThing("walking into a beertent", handler)

