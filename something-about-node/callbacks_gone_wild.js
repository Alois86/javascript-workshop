function going(err, cb) {
  if(err) cb(err)
  cb()
}

going("wild", function() { console.log("going wild") })


