# Introduction to Ember with some history (20 min)
* MVC != MVC
  * Rails is not MVC (sorry!)
  * GoGaRuCo 2013 - A tale of two MVC's by Yehuda Katz
     (http://www.youtube.com/watch?v=s1dhXamEAKQ)

* Smalltalk / Cocoa's MVC
  - What is different?
    -> observer pattern
    -> Each element on the page is it's own little MVC
    -> Models notify Views
    -> no "it's over after the request is done!"

* If you want to learn ember, learn about Cocoa
    (ie Aaron Hillegas - Cocoa-Programming-Mac-4th-Edition)
    -> Tom Dale, of Ember Core fame, was Sproutcore core
    -> Sproutcore aims to bring Cocoa to the Browser

# Learn from the masters, Architekture overview based on RiakControl (45 min)
  * Controllers
    -> Controls access to models
       for example refreshing models as needed telling other parts to update...
  * Models
    -> Provide attributes (computed or static) to views
  * Views
    -> Manage user events like the user clicks a button
       View: { click: function() { doit() } }
  * Router & Routes
    -> Router maps urls to route object
    -> Route objects manage state about the "page"
       -> load a model
       -> set poll timers
    -> Route objects are a lot like Controllers in Rails
  * Testing Ember
    -> A basic test for something (TODO)

# Setup to Build an App with Ember (25min)
  - Writeing a basic index.html
  - Setting up a webserver (python!)
  - first rendered template
  - first model / object

# Build something (45min) (TODO)
  - Git User Race
    - Pull json form http://osrc.dfm.io/<username>.json
    - Score the users (think of something)
  - announce winner
  - Live Code? Students build it?
  - provide some css (TODO)


- http://net.tutsplus.com/tutorials/javascript-ajax/getting-into-ember-js/
- http://blog.embed.ly/post/46586649344/introduction-to-ember-development

