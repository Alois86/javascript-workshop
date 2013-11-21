window.stuff = require("./stuff.js")
var list = document.getElementById('stuff')

document.getElementById("click-me").onclick = function() {
  list.appendChild(stuff())
}

