// returns random integer within specified range
exports.getRandomInt = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

// returns true or false at random
exports.getRandBool = () => {
    const val = [true, false];
    return val[Math.floor(Math.random() * val.length)];
}

// returns random float value within specified range
exports.getRandomFloat = (min, max) => {
    var val = this.getRandomInt(min, max).toString();

    if (this.getRandBool) {
        val += `.${this.getRandomInt(1, 99)}`;
    }

    return parseFloat(val);
}

// returns a string, used for running title. eg: 6423 Relaxing Run
exports.getName = () => {
    const val = ['Fun', 'Relaxing', 'Recovery', 'Chill', 'Cold'];
    return `${this.getRandomInt(1,9999)} ${val[Math.floor(Math.random() * val.length)]} Run`;
}

// returns km or mile distance units 
exports.getdistanceUnits = () => {
    const val = ["km", "mi"];
    return val[Math.floor(Math.random() * val.length)];
}

// returns a random pace in seconds based on distance unit. Pace ranges vary for km and mi, which is set based on an estimated global average of running and walking pace.
exports.getPace = (unit) => {
    if (unit == 'km') {
        return this.getRandomInt(336, 720);
    } else {
        return this.getRandomInt(540, 1200);
    }
}

// returns calories burned based on distance covered. Calories burned vary for km and mi, which is set based on an estimated global average of calories burned by runners and walking.
exports.getBurnedCal = (distance, unit) => {
    if (unit == 'km') {
        return Math.ceil(this.getRandomInt(60, 110) * distance);
    } else {
        return Math.ceil(this.getRandomInt(90, 140) * distance);
    }
}

// returns a random start date
exports.getStartTime = () => {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

// returns array of time splits of pace per km or mile
exports.getSplits = (distance, duration, pace, totalElevation) => {
    var splits = new Array();
    var avgPaceTracker = 0;
    var elevationTracker = 0;
    const size = Math.ceil(distance);

    for (var n = 0; n < size; n++) {
        const threshold = Math.ceil(0.1 * pace);
        var averagePace = this.getRandomInt(pace-threshold, pace+threshold);
        var elevation = this.getRandomInt(0, totalElevation);
        const elevationSign = this.getRandBool();

        if (n+1 == size) {
            averagePace = duration - avgPaceTracker;
            elevation = totalElevation - elevationTracker;
        } else {
            avgPaceTracker += averagePace;
            elevationSign? elevationTracker += elevation: elevationTracker -= elevation;
        }

        splits.push({
            averagePace: averagePace,
            elevation: elevationSign? elevation: elevation * -1,
            paceDiff: n == 0? null: averagePace - splits[n-1].averagePace
        });
    }
    
    return splits;
}