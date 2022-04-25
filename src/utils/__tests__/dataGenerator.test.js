const utils = require('../dataGenerator');

test('getRandomInt', () => {
    const min = 5;
    const max = 10;
    const val = utils.getRandomInt(min, max);
    
    expect(val).not.toBeNull();
    expect(typeof val).toBe('number');
    expect(val).toBeGreaterThan(4);
    expect(val).toBeLessThan(11);
    expect(val%1).toBe(0);
});

test('getRandBool', () => {
    const val = utils.getRandBool();

    expect(val).not.toBeNull();
    expect(typeof val).toBe('boolean');
});

test('getRandomFloat', () => {
    const min = 5;
    const max = 6;
    const val = utils.getRandomFloat(min, max);
    
    expect(val).not.toBeNull();
    expect(typeof val).toBe('number');
    expect(val).toBeGreaterThan(4);
    expect(val).toBeLessThan(7);
    expect(val%1).not.toBe(0);

});

test('getName', () => {
    const val = utils.getName();

    expect(val).not.toBeNull();
    expect(typeof val).toBe('string');
});

test('getdistanceUnits', () => {
    const val = utils.getdistanceUnits();

    expect(val).not.toBeNull();
    expect(typeof val).toBe('string');
    expect(['km', 'mi']).toContain(val);
});

test('getPace', () => {
    const val = utils.getPace(utils.getdistanceUnits());
    
    expect(val).not.toBeNull();
    expect(typeof val).toBe('number');
    expect(val%1).toBe(0);
});

test('getBurnedCal', () => {
    const val = utils.getBurnedCal( utils.getRandomFloat(1, 20), utils.getdistanceUnits());
    
    expect(val).not.toBeNull();
    expect(typeof val).toBe('number');
    expect(val%1).toBe(0);
});

test('getStartTime', () => {
    const time = utils.getStartTime();

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

    expect(Array.isArray(splits)).toBeTruthy();
    expect(!Array.isArray(splits[0])).toBeTruthy();
    expect(typeof splits).toBe('object');
    expect(splits).not.toBeNull();
    expect(splits.length).toBeGreaterThan(0);
    expect(Object.keys(splits[0]).length).not.toBe(0);
});