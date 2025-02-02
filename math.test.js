

const add = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
});

test('adds -1 + 2 to equal 1', () => {
    expect(add(-1, 2)).toBe(1);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 1.5 + 2.5 to equal 4', () => {
    expect(add(1.5, 2.5)).toBe(4);
});
test('add 2 + 3 to equal 6', () => {
    expect(add(2, 3)).toBe(6);
});
