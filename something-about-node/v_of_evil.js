doThisFirst(function(err) {
  if(err) throw err
  nowDoThis(function() {
    if(err) throw err
    andFinallyDoThis() {
      if(err) throw err
      done()
    })
  })
})
