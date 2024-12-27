const cloneArray = require("./cloneArray");

test("values should be the same", () => {
  expect(cloneArray([1, 2, 3, 4, 3])).toEqual([1, 2, 3, 4, 3]);
});
