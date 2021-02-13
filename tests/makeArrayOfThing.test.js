const kata = require('../kata.js')

test('makeArrayOfThing (SINGULAR) makes an array out of one item', () => {
  const expected = ['dog', 'dog', 'dog']
  const actual = kata.makeArrayOfThing('dog', 3)
  expect(actual).toEqual(expected)
})
