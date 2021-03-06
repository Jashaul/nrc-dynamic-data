const generator = require("./utils/dataGenerator");

// gets dynamic values from utils and returns running data object
const distanceUnits = generator.getdistanceUnits();
const totalDist = generator.getRandomFloat(1, 20);
const smartDevice = generator.getRandBool();
const averagePace = generator.getPace(distanceUnits);
const totalDuration = Math.round(averagePace * totalDist);
const startTime = generator.getStartTime();
const elevation = generator.getRandomInt(0, 40)
var avgHeartRate = null;

// checking if smart device is connected
if (smartDevice) {
    avgHeartRate = generator.getRandomInt(100, 180);
}

// generate array of time splits of pace per km or mile
const splits = generator.getSplits(totalDist, totalDuration, averagePace, elevation);

module.exports = {
    runName: generator.getName(),
    totalDistance: totalDist,
    distanceUnits: distanceUnits,
    averagePace: averagePace,
    totalDuration: totalDuration,
    runIndoors: generator.getRandBool(),
    caloriesBurned: generator.getBurnedCal(totalDist, distanceUnits),
    averageCadence: generator.getRandomInt(140, 180),
    totalElevation: elevation,
    activeSmartDevice: smartDevice,
    averageHeartRate: avgHeartRate,
    startTime: startTime.toISOString(),
    endTime: new Date(startTime.getTime() + (totalDuration*1000)).toISOString(),
    runSplits: splits
};