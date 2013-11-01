var myThing = require("../my_thing")
var argv = require("minimist")(process.argv.slice(2))

myThing(argv.i, function(err, res) {
  if(err) return console.error(err)
  console.log(res)
})

