var convert = function(n) {
  var res = []
  while(n >= 10) {
   res.push("X")
   n = n - 10
  }
  while(n >= 5) {
   res.push("V")
   n = n - 5
  }
  while(n >= 4) {
   res.push("IV")
   n = n - 4
  }
  while(n >= 1) {
   res.push("I")
   n = n - 1
  }
  return res.join("")
}

module.exports = convert
