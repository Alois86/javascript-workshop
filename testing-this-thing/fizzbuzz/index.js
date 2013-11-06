module.exports = function fizzbuzz(numbers) {
  return numbers.map(function(n) {
    var res = ""
    if(n % 3 === 0) res = res + "Fizz"
    if(n % 5 === 0) res = res + "Buzz"
    return res === "" ? n : res
  })
}


