function wait(cb) {
  setTimeout(cb, 100);
}
try {
  wait(function() { throw new Error("Out of time") })
} catch(e) {
  console.log(e)
}
