var convert = require("../index")

describe("to_roman", function() {
  it("outputs I for 1", function() {
    expect(convert(1)).toBe("I")
  })

  it("outputs II for 2", function() {
    expect(convert(2)).toBe("II")
  })

  it("outputs IV for 5", function() {
    expect(convert(4)).toBe("IV")
  })

  it("outputs V for 5", function() {
    expect(convert(5)).toBe("V")
  })

  it("outputs X for 10", function() {
    expect(convert(10)).toBe("X")
  })

  it("outputs XX for 20", function() {
    expect(convert(20)).toBe("XX")
  })
})
