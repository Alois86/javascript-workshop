var fb = require("./")
var _ = require("underscore")

function fbEl(e) {
  return fb([e])[0]
}

describe("fizzbuzz", function() {
  it("returns 1 for one", function() {
    expect(fbEl(1)).toBe(1)
  })

  it("returns 1,2 for 1,2", function() {
    expect(fb([1,2])).toEqual([1,2])
  })

  it("returns Fizz for 3", function() {
    expect(fbEl(3)).toBe("Fizz")
  })

  it("returns Buzz for 5", function() {
    expect(fbEl(5)).toBe("Buzz")
  })

  it("returns FizzBuzz for 15", function() {
    expect(fbEl(15)).toBe("FizzBuzz")
  })
})
