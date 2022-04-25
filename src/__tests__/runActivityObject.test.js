const runActivityObject = require('../runActivityObject');

test('it is of type object', () => {
    expect(typeof runActivityObject).toBe('object');
    expect(!Array.isArray(runActivityObject)).toBeTruthy();
    expect(runActivityObject).not.toBeNull();
    expect(Object.keys(runActivityObject).length).not.toBe(0);
});