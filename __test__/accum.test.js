const accum = require('../lib/accum');

test('Turns first letter of string into a capital', () => {
  expect(accum("a")).toBe("A");
});

xtest('Second letter is captilized', () => {
  expect(accum("Ab")).toBe("A B");
});

test('Second letter is captilized and gets additional b', () => {
  expect(accum("Ab")).toBe("A Bb");
});

test('Any number of letters given follows the pattern', () => {
    expect(accum("AbC")).toBe("A Bb Ccc");
    expect(accum("XxyZ")).toBe('X Xx Yyy Zzzz')
})
