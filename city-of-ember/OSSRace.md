OSS-Race app
============
Battle GitHub users by name via stats from
[Open Source Report Card](http://osrc.dfm.io/)

Install what we need to get started
-----------------------------------
    npm install -g yo grunt-cli bower generator-ember grunt-contrib-compass
    gem install compass

Run the yoeman generator Ember
------------------------------
    yo ember

Setup the proxy so we can Interact with external resources
----------------------------------------------------------
replace Gruntfile.js with provided Gruntfile.js.oss-race this adds the small
proxy to make sure we can do requests to anything via /?url=encodeURI(url) when
running

    grunt server

