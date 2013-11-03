function Ork(name) {
  this.name = name
  this._observers = []
}

Ork.prototype.smash = function(thing) {
  this._observers.forEach(function(o) {
    o.notify(this, "smashed " + thing);
  }, this)
}

Ork.prototype.registerObserver = function(observer) {
  this._observers.push(observer)
}

function OrkMaster(name) {
  this.name = name
}

OrkMaster.prototype.notify = function(ork, message) {
  console.log(this.name + " here " + 
              ork.name + " told me he " 
              + message)
}

OrkMaster.prototype.observe = function(ork) {
  ork.registerObserver(this)
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
