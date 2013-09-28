var convert = require("../index")

describe("to_roman", function() {
  it("outputs I for 1", function(){
    expect(convert(1)).toBe("I")
  })
})
