var awesomeness = require("./awesomeness")

var handler = function(err, res) {
  if(err) {
    console.log(err)
    return
  }
  console.log(res)
}

awesomeness("snowboardng into a beertent", handler)
awesomeness("walking into a beertent", handler)

