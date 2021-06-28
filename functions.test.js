const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Check for null

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Check for falsy value
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// Checking objects and array
test('User should be Tyler Austin Object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Tyler',
    lastName: 'Austin',
  });
});

// Less than or greater
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});
