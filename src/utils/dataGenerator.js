exports.getRandomInt = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
}

exports.getRandBool = () => {
    const val = [true, false];
    return val[Math.floor(Math.random() * val.length)];
}

exports.getRandomFloat = (min, max) => {
    var val = this.getRandomInt(min, max).toString();

    if (this.getRandBool) {
        val += `.${this.getRandomInt(1, 99)}`;
    }

    return parseFloat(val);
}

exports.getName = () => {
    const val = ['Fun', 'Relaxing', 'Recovery', 'Chill', 'Cold'];
    return `${this.getRandomInt(1,9999)} ${val[Math.floor(Math.random() * val.length)]} Run`;
}

exports.getdistanceUnits = () => {
    const val = ["km", "mi"];
    return val[Math.floor(Math.random() * val.length)];
}

exports.getPace = (unit) => {
    if (unit == 'km') {
        return this.getRandomInt(336, 720);
    } else {
        return this.getRandomInt(540, 1200);
    }
}

exports.getBurnedCal = (distance, unit) => {
    if (unit == 'km') {
        return Math.ceil(this.getRandomInt(60, 110) * distance);
    } else {
        return Math.ceil(this.getRandomInt(90, 140) * distance);
    }
}

exports.getStartTime = () => {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

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