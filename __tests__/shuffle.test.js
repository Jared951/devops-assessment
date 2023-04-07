const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  
  test('return an array', () => {
    let result = shuffle([0, 1, 2])
    expect(Array.isArray(result)).toBe(true)
  }),

  test('check that it returns an array of the same length as the argument sent in', () => {
    let result = shuffle([0, 1, 2])
    expect(result).toHaveLength(3)
  })

});
