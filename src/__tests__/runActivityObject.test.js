const runActivityObject = require('../runActivityObject');

// test if script returns object
test('is of type object', () => {
    expect(typeof runActivityObject).toBe('object');
    expect(!Array.isArray(runActivityObject)).toBeTruthy();
    expect(Object.keys(runActivityObject).length).not.toBe(0);
});