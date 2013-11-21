var CONVERSION_TABLE = [
  { num: 1000, glyph: "M" },
  { num: 900, glyph: "CM" },
  { num: 500, glyph: "D" },
  { num: 400, glyph: "CD" },
  { num: 100, glyph: "C" },
  { num: 90, glyph: "XC" },
  { num: 50, glyph: "L" },
  { num: 40, glyph: "XL" },
  { num: 10, glyph: "X" },
  { num: 9, glyph: "IX" },
  { num: 5, glyph: "V" },
  { num: 4, glyph: "IV" },
  { num: 1, glyph: "I" },
]

var convert = function(n) {
  var res = []

  CONVERSION_TABLE.forEach(function(e) {
    for(; n >= e.num; res.push(e.glyph), n = n - e.num);
  })

  return res.join("")
}

module.exports = convert
