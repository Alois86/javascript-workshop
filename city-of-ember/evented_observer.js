function Ork(name) {
  this.name = name
  var _e = document.createElement("div")
  this.dispatchEvent = _e.dispatchEvent.bind(_e)
  this.addEventListener = _e.addEventListener.bind(_e)
}

Ork.prototype.smash = function(thing) {
  var evData = { message: "smashed " + thing, ork: this }
  var ev = new CustomEvent("orkevent", { detail: evData })
  this.dispatchEvent(ev)
}

function OrkMaster(name) {
  this.name = name
}

OrkMaster.prototype.handleEvent = function(ev) {
  var ork = ev.detail.ork
  var message = ev.detail.message
  console.log(this.name + " here " +
              ork.name + " told me he "
              + message)
}

OrkMaster.prototype.observe = function(ork) {
  var handler = this.handleEvent.bind(this)
  ork.addEventListener("orkevent", handler)
}

var master = new OrkMaster("Uruk-hai")
var gobgrub = new Ork("Gobgrub")
var nazsnaga = new Ork("Nazsnaga")

master.observe(gobgrub)
master.observe(nazsnaga)

gobgrub.smash("human")
nazsnaga.smash("drawf")

// Uruk-hai here Gobgrub told me he smashed human
// Uruk-hai here Nazsnaga told me he smashed drawf


