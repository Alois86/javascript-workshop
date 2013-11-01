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

  it("outputs XL for 40", function() {
    expect(convert(40)).toBe("XL")
  })

  it("outputs L for 50", function() {
    expect(convert(50)).toBe("L")
  })

  it("outputs XC for 90", function() {
    expect(convert(90)).toBe("XC")
  })

  it("outputs C for 100", function() {
    expect(convert(100)).toBe("C")
  })

  it("outputs CD for 400", function() {
    expect(convert(400)).toBe("CD")
  })

  it("outputs D for 500", function() {
    expect(convert(500)).toBe("D")
  })

  it("outputs CM for 900", function() {
    expect(convert(900)).toBe("CM")
  })

  it("outputs m for 1000", function() {
    expect(convert(1000)).toBe("M")
  })

  it("outputs m for 2129", function() {
    expect(convert(2129)).toBe("MMCXXVIV")
  })

  it("outputs for 3999", function() {
    expect(convert(3999)).toBe("MMMCMXCVIV")
  })
})
