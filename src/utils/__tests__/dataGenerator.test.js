const utils = require('../dataGenerator');

test('getRandomInt', () => {
    const min = 5;
    const max = 10;
    const val = utils.getRandomInt(min, max);
    
    // checking if value is an integer and within range
    expect(typeof val).toBe('number');
    expect(val%1).toBe(0);
    expect(val).toBeGreaterThan(4);
    expect(val).toBeLessThan(11);
});

test('getRandBool', () => {
    const val = utils.getRandBool();

    // checking if value is of type boolean
    expect(typeof val).toBe('boolean');
});

test('getRandomFloat', () => {
    const min = 5;
    const max = 6;
    const val = utils.getRandomFloat(min, max);
    
    // checking if value is a float and within range
    expect(typeof val).toBe('number');
    expect(val%1).not.toBe(0);
    expect(val).toBeGreaterThan(4);
    expect(val).toBeLessThan(7);
});

test('getName', () => {
    const val = utils.getName();

    // checking if value is of type string
    expect(typeof val).toBe('string');
});

test('getdistanceUnits', () => {
    const val = utils.getdistanceUnits();

    // checking if value is of type string and if it's km or mi
    expect(typeof val).toBe('string');
    expect(['km', 'mi']).toContain(val);
});

test('getPace', () => {
    const val = utils.getPace(utils.getdistanceUnits());
    
    // checking if value is of type integer
    expect(typeof val).toBe('number');
    expect(val%1).toBe(0);
});

test('getBurnedCal', () => {
    const val = utils.getBurnedCal( utils.getRandomFloat(1, 20), utils.getdistanceUnits());
    
    // checking if value is of type integer
    expect(typeof val).toBe('number');
    expect(val%1).toBe(0);
});

test('getStartTime', () => {
    const time = utils.getStartTime();

    // checking if value is of type object
    expect(typeof time).toBe('object');
    expect(!Array.isArray(time)).toBeTruthy();
    expect(time).not.toBeNull();
});

test('getSplits', () => {
    const distanceUnits = utils.getdistanceUnits();
    const totalDist = utils.getRandomFloat(1, 5);
    const averagePace = utils.getPace(distanceUnits);
    const totalDuration = Math.round(averagePace * totalDist);
    const elevation = utils.getRandomInt(0, 40);
    const splits = utils.getSplits(totalDist, totalDuration, averagePace, elevation);

    // checking if value is an arry of objects
    expect(typeof splits).toBe('object');
    expect(Array.isArray(splits)).toBeTruthy();
    expect(splits.length).toBeGreaterThan(0);
    for (val in splits) {
        expect(!Array.isArray(val)).toBeTruthy();
        expect(Object.keys(val).length).not.toBe(0);
    }
});