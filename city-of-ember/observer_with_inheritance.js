var util = require("util")

var Observable = function() {
  this._observers = []
}

Observable.prototype.addObserver = function(observer) {
  this._observers.push(observer)
}

Observable.prototype.changed = function() {
  this._observers.forEach(function(o) {
    o.notify(this)
  }, this)
}

function Ork(name) {
  Observable.call(this)
  this.name = name
  this.inventory = []
}
util.inherits(Ork, Observable)

Ork.prototype.take = function(thing) {
  this.inventory.push(thing)
  this.changed()
}

var ork = new Ork("nazza")
var orkMaster = {
  notify: function(ork) {
    console.log(ork.name + " changed")
    console.log(ork.inventory)
  }
}
ork.addObserver(orkMaster)

ork.take("axe")



