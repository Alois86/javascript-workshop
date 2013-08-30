!SLIDE
# Something about node.js: The basics

!SLIDE
# The Basics
* V8
* POSIX Bindings
* A usable server side JS implementation

!SLIDE
# V8
* Google Chrome JavaScript VM
* Highly optimized

!SLIDE
# POSIX
* Interface with the OS Layer
* Read Write Files
* Open Sockets
* ... do stuff you can't normally do in JavaScript

!SLIDE
# Usable server side JavaScript?
There are many others... None caught on!

.notes Rhino, Mozillas VM, etc.

!SLIDE
# Why all the hype?
* Async
* Execution speed
* (Perceived) Ease of use

.notes everybody and their mother knows JavaScript

!SLIDE
# What can we do with it?
    @@@ javascript
    var http = require("http")

    var handler = function(req, res) {
      var headers = { "Content-Type": "text/plain" }
      res.writeHead(200, headers)
      res.end("Hello Node!")
    }

    http.createServer(handler).listen(3000)

.notes step through, compare to rack

!SLIDE
# Ok this is not really useful is it?

!SLIDE
# The ecosystem: NPM
Like gems / bundler but for node

!SLIDE
# What makes it great
* Really active community
* Handles a lot of small packages really well

!SLIDE
# ... greater?
broke free of the node community, and is also established
as the JavaScript package manager now

.notes bower, yeoman, bela sagt da mehr!

!SLIDE
# The atonomy of a node program
* First class functions
* Callbacks
* A lot of small modules

.notes what are first class functions

!SLIDE
# Make it an npm package
    @@@ shell
    $ mkdir hello-world
    $ cd hello-world && npm init

!SLIDE
# Entry point
    @@@ javascript
    var awesomeness = function(thing, cb) {
      if(thing.match(/snowboard*/)) {
        cb(null, thing + ", is awesome!")
      } else {
        cb(thing + ", sucks!")
      }
    }
    module.exports = awesomeness

!SLIDE
# Load a module

    @@@ javascript
    var awesomeness = require("./async_awesomeness")
    awesomeness(["snowboard into a beertent"], function(err, through

!SLIDE
# Installing dependencies
    @@@ shell
    $ npm install mongodb --save

Install the package and save for later

!SLIDE
# Install dependencies of an exisiting project
    @@@ shell
    $ npm install

Installs all dependencies, similar to `bundle`

!SLIDE
# Code!
    @@@ javascript
    var doSomething = function(params, callback) {
      var query = parseParams(params)
      db.execute(query, function(err, result) {
        if(err) {
          callback(err)
          return
        }
        callback(null, result)
      }
    }

.notes step through

!SLIDE
# Better code ;)
    @@@ javascript
    var doSomething = function(params, callback) {
      var query = parseParams(params)
      db.execute(query, callback)
    }

!SLIDE
# Some pitfalls and best practices

!SLIDE
# Name your functions
    @@@ javascript
    foo(in, function(err, res) { ... })

is a hell to debug... so name where sensible! This is true for JavaScript but
node.js especially because callbacks are everywhere.

!SLIDE
# Be aware of V shaped code!
    @@@ javascript
    do(foo, function(err, res) {
      do2(bar, function(err, res) {
        do3(baz, function(err, res) {
        }
      }
    }

.notes also known as callback hell!

!SLIDE
# JavaScript is object oriented, use it like so
... and you will have a better time.

!SLIDE
# Don't use Exceptions
... you raise Exception, they raise hell.

.notes In async code this simply does not work as expected since the Exception Stack is
not captured in the closure

!SLIDE
# Example works
    @@@ javascipt
    function foo(cb) { cb() }
    try {
      foo(function(err) { throw "Nuts" }
    } catch(e) {
      console.log(e)
    }
    // Nuts

!SLIDE
# Example does not work
    @@@ javascipt
    function foo(cb) { setTimeout(cb, 100) }
    try {
      foo(function(err) { throw "Nuts" }
    } catch(e) {
      console.log(e)
    }
    // Uncaught Exception!

.notes Remember you don't control the callstack

!SLIDE
# Don't call the callback twice
    @@@ javascript
    var doSomething = function(params, callback) {
      var query = parseParams(params)
      db.execute(query, function(err, result) {
        if(err) callback(err)
        callback(null, result)
      }
    }

Is wrong!

!SLIDE
# Ok you know the basics! Let's go!




